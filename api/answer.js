/**
 * Vercel Serverless API - Answer Question
 * POST /api/answer
 */

const Groq = require('groq-sdk');

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

if (!global.sessions) {
    global.sessions = new Map();
}

const SYSTEM_PROMPT = `You are an expert career counselor AI playing a game similar to "Akinator" but for careers. Your goal is to discover the user's ideal career by asking strategic questions, then predict ANY career that best fits them.

IMPORTANT: You are NOT limited to a predefined list. You can suggest ANY career in the world - traditional, modern, niche, or emerging careers. Be creative and specific!

RULES:
1. Ask ONE question at a time that can be answered with: Yes, Probably, Maybe, Probably Not, or No
2. Questions should progressively understand the person's interests, skills, work style, values, and goals
3. Start broad, then get specific based on their answers
4. After 10-20 questions, make your career prediction
5. Be creative - suggest specific, tailored careers

RESPONSE FORMAT (JSON only, no markdown):
For questions:
{"type": "question", "question": "Your engaging question here?", "questionNumber": 1, "hint": "optional insight"}

For final prediction:
{"type": "prediction", "career": "Specific Career Title", "confidence": 85, "emoji": "relevant emoji", "category": "Career Category", "description": "Personalized explanation", "salary": "Estimated salary range", "growth": "Job outlook", "alternatives": ["Alt 1", "Alt 2", "Alt 3"], "roadmap": ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]}

ONLY output valid JSON, no other text.`;

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { sessionId, answer } = req.body;

        if (!sessionId || !global.sessions.has(sessionId)) {
            return res.status(400).json({ error: 'Invalid session. Please start a new game.' });
        }

        const session = global.sessions.get(sessionId);

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

        // Determine if we should ask for prediction
        const shouldPredict = session.questionCount >= 15;

        if (shouldPredict) {
            messages.push({
                role: 'user',
                content: 'Based on all my answers, make your final career prediction now. You MUST output a JSON with type "prediction". Include: career, confidence, emoji, category, description, salary, growth, alternatives (array of 3), and roadmap (array of 5 steps).'
            });
        } else {
            messages.push({
                role: 'user',
                content: `Question ${session.questionCount + 1}: Ask your next strategic question. Output JSON with type "question".`
            });
        }

        // Get response from LLM
        const response = await groq.chat.completions.create({
            model: 'llama-3.3-70b-versatile',
            messages: messages,
            temperature: 0.7,
            max_tokens: shouldPredict ? 1500 : 500
        });

        const content = response.choices[0].message.content;
        let parsed;

        try {
            const jsonMatch = content.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                parsed = JSON.parse(jsonMatch[0]);
            } else {
                throw new Error('No JSON found');
            }
        } catch (e) {
            // Fallback
            if (shouldPredict) {
                parsed = {
                    type: 'prediction',
                    career: 'Creative Professional',
                    confidence: 75,
                    emoji: '✨',
                    category: 'Professional',
                    description: 'Based on your responses, you have unique skills suited for a creative career.',
                    salary: '$50k - $120k',
                    growth: 'Growing field',
                    alternatives: ['Consultant', 'Entrepreneur', 'Specialist'],
                    roadmap: ['Identify passion', 'Build skills', 'Create portfolio', 'Network', 'Launch career']
                };
            } else {
                parsed = {
                    type: 'question',
                    question: 'Do you prefer working in teams or independently?',
                    questionNumber: session.questionCount + 1
                };
            }
        }

        // Ensure type is correct
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

        res.status(200).json(parsed);

    } catch (error) {
        console.error('Answer error:', error);
        res.status(500).json({ error: 'Failed to process answer', details: error.message });
    }
};
