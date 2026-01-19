/**
 * Vercel Serverless API - Start Game
 * POST /api/start
 */

export default async function handler(req, res) {
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

    const Groq = (await import('groq-sdk')).default;

    const groq = new Groq({
        apiKey: process.env.GROQ_API_KEY
    });

    const SYSTEM_PROMPT = `You are an expert career counselor AI playing a game similar to "Akinator" but for careers. Your goal is to discover the user's ideal career by asking strategic questions, then predict ANY career that best fits them.

IMPORTANT: You can suggest ANY career - traditional, modern, niche, or emerging. Be creative and specific!

RULES:
1. Ask ONE question at a time that can be answered with: Yes, Probably, Maybe, Probably Not, or No
2. Questions should progressively understand the person's interests, skills, work style, values, and goals
3. Start broad, then get specific
4. After 10-20 questions, make your career prediction
5. Be creative

RESPONSE FORMAT (JSON only):
{"type": "question", "question": "Your question?", "questionNumber": 1, "hint": "optional insight"}

ONLY output valid JSON.`;

    try {
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

        // Return session state to client (client will send it back each request)
        res.status(200).json({
            ...parsed,
            questionNumber: 1,
            totalQuestions: 20,
            progress: 5,
            // Session data passed to client
            _session: {
                history: [
                    { role: 'assistant', content: JSON.stringify(parsed) }
                ],
                questionCount: 1
            }
        });

    } catch (error) {
        console.error('Start error:', error);
        res.status(500).json({ error: 'Failed to start game', details: error.message });
    }
}
