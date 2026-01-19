/**
 * Career Akinator - LLM-Powered Controller
 * Connects to backend server for AI-driven career guessing
 */

// ============================================
// Configuration
// ============================================

// Use relative URL - works for both local dev and Vercel
const API_BASE = '/api';

// ============================================
// Game State
// ============================================

let sessionId = null;
let currentQuestion = null;
let matchedCareers = [];

// ============================================
// DOM Elements
// ============================================

const screens = {
    welcome: document.getElementById("welcome-screen"),
    question: document.getElementById("question-screen"),
    thinking: document.getElementById("thinking-screen"),
    result: document.getElementById("result-screen")
};

const elements = {
    startBtn: document.getElementById("start-btn"),
    questionNumber: document.getElementById("question-number"),
    questionText: document.getElementById("question-text"),
    progressFill: document.getElementById("progress-fill"),
    progressPercent: document.getElementById("progress-percent"),
    confidenceText: document.getElementById("confidence-text"),
    answerContainer: document.getElementById("answer-container"),
    thinkingTitle: document.getElementById("thinking-title"),
    thinkingSubtitle: document.getElementById("thinking-subtitle"),
    confidencePercent: document.getElementById("confidence-percent"),
    careerName: document.getElementById("career-name"),
    careerDescription: document.getElementById("career-description"),
    resultEmoji: document.getElementById("result-emoji"),
    resultCategory: document.getElementById("result-category"),
    resultSalary: document.getElementById("result-salary"),
    resultGrowth: document.getElementById("result-growth"),
    roadmapTimeline: document.getElementById("roadmap-timeline"),
    playAgainBtn: document.getElementById("play-again-btn"),
    confetti: document.getElementById("confetti"),
    otherCareers: document.getElementById("other-careers"),
    alternativesSection: document.getElementById("alternatives-section")
};

// ============================================
// Initialize
// ============================================

function init() {
    bindEvents();
}

function bindEvents() {
    elements.startBtn.addEventListener("click", startGame);
    elements.playAgainBtn.addEventListener("click", resetGame);

    const answerBtns = elements.answerContainer.querySelectorAll('.btn-answer');
    answerBtns.forEach(btn => {
        btn.addEventListener('click', () => handleAnswer(btn.dataset.answer));
    });
}

// ============================================
// Screen Management
// ============================================

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove("active"));
    screens[screenName].classList.add("active");
}

// ============================================
// API Calls
// ============================================

async function apiCall(endpoint, method = 'GET', body = null) {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(`${API_BASE}${endpoint}`, options);
    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }
    return response.json();
}

// ============================================
// Game Flow
// ============================================

async function startGame() {
    showScreen("thinking");
    elements.thinkingTitle.textContent = "Starting your career journey...";
    elements.thinkingSubtitle.textContent = "AI is preparing your first question";

    try {
        const data = await apiCall('/start', 'POST');
        sessionId = data.sessionId;

        showScreen("question");
        displayQuestion(data);
    } catch (error) {
        console.error('Failed to start game:', error);
        elements.thinkingTitle.textContent = "Connection Error";
        elements.thinkingSubtitle.textContent = "Make sure the server is running (npm start)";
    }
}

function displayQuestion(data) {
    // Update progress
    const progress = data.progress || ((data.questionNumber / 20) * 100);
    elements.progressFill.style.width = progress + "%";
    elements.progressPercent.textContent = Math.round(progress) + "%";
    elements.questionNumber.textContent = `${data.questionNumber} of ${data.totalQuestions || 20}`;

    // Update question
    elements.questionText.textContent = data.question;

    // Update hint if provided
    if (data.hint && data.questionNumber > 5) {
        elements.confidenceText.textContent = data.hint;
    } else {
        elements.confidenceText.textContent = "";
    }

    currentQuestion = data;
}

async function handleAnswer(answerId) {
    // Map answer IDs to human-readable text
    const answerText = {
        'yes': 'Yes',
        'probably': 'Probably',
        'maybe': 'Maybe',
        'probably_not': 'Probably not',
        'no': 'No'
    };

    // Show loading state
    elements.questionText.textContent = "Thinking...";
    elements.confidenceText.textContent = "AI is analyzing your response";

    try {
        const data = await apiCall('/answer', 'POST', {
            sessionId,
            answer: answerText[answerId]
        });

        if (data.type === 'prediction') {
            showResult(data);
        } else {
            displayQuestion(data);
        }
    } catch (error) {
        console.error('Failed to submit answer:', error);
        elements.questionText.textContent = "Connection error. Please try again.";
    }
}

function showResult(data) {
    console.log('showResult called with:', data);

    showScreen("thinking");
    elements.thinkingTitle.textContent = "I think I know your ideal career!";
    elements.thinkingSubtitle.textContent = "Preparing your personalized result...";

    setTimeout(() => {
        try {
            // Display prediction
            elements.confidencePercent.textContent = `${data.confidence || 75}% match`;
            elements.careerName.textContent = data.career || 'Your Ideal Career';
            elements.careerDescription.textContent = data.description || 'Based on your answers, this career suits you well.';

            // Use LLM-generated emoji (fallback to sparkles)
            elements.resultEmoji.textContent = data.emoji || '✨';

            // Use LLM-generated category, salary, growth (all from AI)
            if (elements.resultCategory) elements.resultCategory.textContent = data.category || "Professional";
            if (elements.resultSalary) elements.resultSalary.textContent = data.salary || "Varies by experience";
            if (elements.resultGrowth) elements.resultGrowth.textContent = data.growth || "Industry dependent";

            // Build roadmap from LLM response
            const roadmap = data.roadmap || ['Start learning', 'Build skills', 'Get experience', 'Launch career'];
            elements.roadmapTimeline.innerHTML = roadmap.map((step, index) => `
                <div class="roadmap-step">
                    <div class="step-number">${index + 1}</div>
                    <div class="step-content">
                        <h4>Step ${index + 1}</h4>
                        <p>${step}</p>
                    </div>
                </div>
            `).join("");

            // Show alternatives
            if (elements.otherCareers && data.alternatives && data.alternatives.length > 0) {
                elements.otherCareers.innerHTML = data.alternatives.slice(0, 3).map(career => {
                    return `
                        <div class="other-career-card">
                            <span>💼</span>
                            <span>${career}</span>
                        </div>
                    `;
                }).join('');
                if (elements.alternativesSection) {
                    elements.alternativesSection.style.display = 'block';
                }
            }

            showScreen("result");
            launchConfetti();
        } catch (err) {
            console.error('Error displaying result:', err);
            elements.thinkingTitle.textContent = "Error displaying result";
            elements.thinkingSubtitle.textContent = err.message;
        }
    }, 1500);
}

// ============================================
// Confetti
// ============================================

function launchConfetti() {
    elements.confetti.innerHTML = "";
    const colors = ["#6366f1", "#818cf8", "#22c55e", "#a78bfa"];

    for (let i = 0; i < 40; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";
        piece.style.left = Math.random() * 100 + "%";
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.width = (4 + Math.random() * 6) + "px";
        piece.style.height = (4 + Math.random() * 6) + "px";
        piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
        piece.style.animationDelay = Math.random() * 0.3 + "s";
        piece.style.animationDuration = (2 + Math.random()) + "s";
        elements.confetti.appendChild(piece);
    }

    setTimeout(() => { elements.confetti.innerHTML = ""; }, 3000);
}

// ============================================
// Reset
// ============================================

function resetGame() {
    sessionId = null;
    currentQuestion = null;
    matchedCareers = [];
    elements.progressFill.style.width = "0%";
    elements.progressPercent.textContent = "0%";
    elements.confidenceText.textContent = "";
    showScreen("welcome");
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
