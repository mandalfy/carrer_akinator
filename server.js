/**
 * Career Akinator - LLM Backend Server
 * Uses Groq API with Llama 3 for intelligent career guessing
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Groq = require('groq-sdk');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Groq client
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// In-memory session storage (use Redis/DB for production)
const sessions = new Map();

// System prompt for the LLM - fully open-ended career generation
const SYSTEM_PROMPT = `You are an expert career counselor AI playing a game similar to "Akinator" but for careers. Your goal is to discover the user's ideal career by asking strategic questions, then predict ANY career that best fits them.

IMPORTANT: You are NOT limited to a predefined list. You can suggest ANY career in the world - traditional, modern, niche, or emerging careers. Be creative and specific!

RULES:
1. Ask ONE question at a time that can be answered with: Yes, Probably, Maybe, Probably Not, or No
2. Questions should progressively understand the person's:
   - Interests and passions
   - Skills and strengths
   - Work environment preferences
   - Values and motivations
   - Risk tolerance and lifestyle goals
3. Start broad, then get specific based on their answers
4. After 10-20 questions, make your career prediction
5. Be creative - suggest specific, tailored careers (e.g., "Marine Biologist specializing in coral reef conservation" instead of just "Scientist")

RESPONSE FORMAT (JSON only, no markdown):
For questions:
{"type": "question", "question": "Your engaging question here?", "questionNumber": 1, "hint": "optional insight about what you're learning about them"}

For final prediction:
{"type": "prediction", "career": "Specific Career Title", "confidence": 85, "emoji": "relevant emoji", "category": "Career Category", "description": "Personalized explanation of why this career is perfect for them based on their answers", "salary": "Estimated salary range", "growth": "Job outlook", "alternatives": ["Specific Alternative 1", "Specific Alternative 2", "Specific Alternative 3"], "roadmap": ["Specific step 1 to get started", "Step 2", "Step 3", "Step 4", "Step 5"]}

Remember: 
- ONLY output valid JSON, no other text
- Be SPECIFIC and CREATIVE with career suggestions
- Tailor everything to their unique combination of answers`;


/**
 * Start a new game session
 */
app.post('/api/start', async (req, res) => {
    try {
        const sessionId = Date.now().toString(36) + Math.random().toString(36).substr(2);

        // Initialize session
        sessions.set(sessionId, {
            history: [],
            questionCount: 0,
            startTime: Date.now()
        });

        // Get first question from LLM
        const response = await groq.chat.completions.create({
            model: 'llama-3.3-70b-versatile',
            messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                { role: 'user', content: 'Start the career guessing game. Ask your first question.' }
            ],
            temperature: 0.7,
            max_tokens: 500
        });

        const content = response.choices[0].message.content;
        let parsed;

        try {
            // Try to extract JSON from the response
            const jsonMatch = content.match(/\{[\s\S]*\}/);
            parsed = JSON.parse(jsonMatch ? jsonMatch[0] : content);
        } catch (e) {
            // Fallback if parsing fails
            parsed = {
                type: 'question',
                question: 'Do you enjoy working with technology and computers?',
                questionNumber: 1
            };
        }

        // Store in session history
        sessions.get(sessionId).history.push({
            role: 'assistant',
            content: JSON.stringify(parsed)
        });
        sessions.get(sessionId).questionCount = 1;

        res.json({
            sessionId,
            ...parsed
        });

    } catch (error) {
        console.error('Start error:', error);
        res.status(500).json({ error: 'Failed to start game', details: error.message });
    }
});

/**
 * Submit an answer and get next question or prediction
 */
app.post('/api/answer', async (req, res) => {
    try {
        const { sessionId, answer } = req.body;

        if (!sessionId || !sessions.has(sessionId)) {
            return res.status(400).json({ error: 'Invalid session' });
        }

        const session = sessions.get(sessionId);

        // Add user's answer to history
        session.history.push({
            role: 'user',
            content: `My answer: ${answer}`
        });

        // Build messages for LLM
        const messages = [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: 'Start the career guessing game. Ask your first question.' },
            ...session.history
        ];

        // Determine if we should ask for prediction (after 15 questions)
        const shouldPredict = session.questionCount >= 15;
        console.log(`Question count: ${session.questionCount}, Should predict: ${shouldPredict}`);

        if (shouldPredict) {
            messages.push({
                role: 'user',
                content: 'Based on all my answers, make your final career prediction now. You MUST output a JSON with type "prediction". Include: career, confidence, emoji, category, description, salary, growth, alternatives (array of 3), and roadmap (array of 5 steps).'
            });
        } else {
            messages.push({
                role: 'user',
                content: `Question ${session.questionCount + 1}: Ask your next strategic question to narrow down my ideal career. Output JSON with type "question".`
            });
        }

        // Get response from LLM
        const response = await groq.chat.completions.create({
            model: 'llama-3.3-70b-versatile',
            messages: messages,
            temperature: 0.7,
            max_tokens: shouldPredict ? 1500 : 500  // More tokens for prediction
        });

        const content = response.choices[0].message.content;
        console.log('LLM Response:', content.substring(0, 200) + '...');

        let parsed;

        try {
            // Try to extract JSON - handle nested braces better
            const jsonMatch = content.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                parsed = JSON.parse(jsonMatch[0]);
            } else {
                throw new Error('No JSON found in response');
            }
        } catch (e) {
            console.error('Parse error:', e.message);
            console.error('Raw content:', content);

            // Generate fallback based on context
            if (shouldPredict) {
                parsed = {
                    type: 'prediction',
                    career: 'Creative Professional',
                    confidence: 75,
                    emoji: '✨',
                    category: 'Professional',
                    description: 'Based on your responses, you have a unique combination of interests and skills that would suit a creative career path.',
                    salary: '$50k - $120k',
                    growth: 'Growing field',
                    alternatives: ['Consultant', 'Entrepreneur', 'Specialist'],
                    roadmap: ['Identify your core passion', 'Build relevant skills', 'Create a portfolio', 'Network in your field', 'Launch your career']
                };
            } else {
                parsed = {
                    type: 'question',
                    question: 'Do you prefer working in teams or independently?',
                    questionNumber: session.questionCount + 1
                };
            }
        }

        // Ensure type is set correctly
        if (shouldPredict && parsed.type !== 'prediction') {
            parsed.type = 'prediction';
        }

        // Update session
        session.history.push({
            role: 'assistant',
            content: JSON.stringify(parsed)
        });

        if (parsed.type === 'question') {
            session.questionCount++;
            parsed.questionNumber = session.questionCount;
            parsed.totalQuestions = 20;
            parsed.progress = Math.min((session.questionCount / 20) * 100, 100);
        }

        console.log('Sending response type:', parsed.type);
        res.json(parsed);

    } catch (error) {
        console.error('Answer error:', error);
        res.status(500).json({ error: 'Failed to process answer', details: error.message });
    }
});

/**
 * Get career details
 */
app.get('/api/careers/:name', (req, res) => {
    const careerName = req.params.name;
    // Return basic career info - could be expanded with a full database
    res.json({
        name: careerName,
        found: allCareers.some(c => c.toLowerCase() === careerName.toLowerCase())
    });
});

/**
 * Health check
 */
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', sessions: sessions.size });
});

// Serve index.html for root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Career Akinator server running at http://localhost:${PORT}`);
    console.log(`📊 Using Groq API with Llama 3`);
});
