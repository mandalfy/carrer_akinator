/**
 * Vercel Serverless API - Start Game
 * POST /api/start
 */

const Groq = require('groq-sdk');

// Initialize Groq client
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

// In-memory session storage (note: resets on cold starts)
// For production, use Redis/Upstash or a database
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
        const sessionId = Date.now().toString(36) + Math.random().toString(36).substr(2);

        // Initialize session
        global.sessions.set(sessionId, {
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
            const jsonMatch = content.match(/\{[\s\S]*\}/);
            parsed = JSON.parse(jsonMatch ? jsonMatch[0] : content);
        } catch (e) {
            parsed = {
                type: 'question',
                question: 'Do you enjoy working with technology and computers?',
                questionNumber: 1
            };
        }

        // Store in session
        global.sessions.get(sessionId).history.push({
            role: 'assistant',
            content: JSON.stringify(parsed)
        });
        global.sessions.get(sessionId).questionCount = 1;

        res.status(200).json({
            sessionId,
            ...parsed,
            totalQuestions: 20,
            progress: 5
        });

    } catch (error) {
        console.error('Start error:', error);
        res.status(500).json({ error: 'Failed to start game', details: error.message });
    }
};
