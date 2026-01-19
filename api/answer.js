/**
 * Vercel Serverless API - Answer Question
 * POST /api/answer
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
For questions: {"type": "question", "question": "Your question?", "questionNumber": N, "hint": "insight"}
For predictions: {"type": "prediction", "career": "Title", "confidence": 85, "emoji": "🎯", "category": "Category", "description": "Why this fits", "salary": "$X-$Y", "growth": "Outlook", "alternatives": ["A","B","C"], "roadmap": ["Step1","Step2","Step3","Step4","Step5"]}

ONLY output valid JSON.`;

    try {
        const { answer, _session } = req.body;

        if (!_session) {
            return res.status(400).json({ error: 'Invalid session. Please start a new game.' });
        }

        const history = _session.history || [];
        const questionCount = _session.questionCount || 0;

        // Add user's answer to history
        history.push({
            role: 'user',
            content: `My answer: ${answer}`
        });

        // Build messages for LLM
        const messages = [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: 'Start the career guessing game. Ask your first question.' },
            ...history
        ];

        // Determine if we should ask for prediction
        const shouldPredict = questionCount >= 15;

        if (shouldPredict) {
            messages.push({
                role: 'user',
                content: 'Based on all my answers, make your final career prediction now. Output JSON with type "prediction".'
            });
        } else {
            messages.push({
                role: 'user',
                content: `Question ${questionCount + 1}: Ask your next strategic question. Output JSON with type "question".`
            });
        }

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
                    questionNumber: questionCount + 1
                };
            }
        }

        if (shouldPredict && parsed.type !== 'prediction') {
            parsed.type = 'prediction';
        }

        // Update history
        history.push({
            role: 'assistant',
            content: JSON.stringify(parsed)
        });

        const newQuestionCount = parsed.type === 'question' ? questionCount + 1 : questionCount;

        res.status(200).json({
            ...parsed,
            questionNumber: newQuestionCount,
            totalQuestions: 20,
            progress: Math.min((newQuestionCount / 20) * 100, 100),
            _session: {
                history: history,
                questionCount: newQuestionCount
            }
        });

    } catch (error) {
        console.error('Answer error:', error);
        res.status(500).json({ error: 'Failed to process answer', details: error.message });
    }
}
