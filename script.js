/**
 * Career Akinator - Main Game Controller
 * Scoring-based system with Akinator-style answers
 */

// ============================================
// Game State
// ============================================

let scoringEngine;
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
    questionCard: document.getElementById("question-card"),
    questionOwl: document.getElementById("question-owl"),
    thoughtBubble: document.getElementById("thought-bubble"),
    progressFill: document.getElementById("progress-fill"),
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

// Thought bubble emojis for variety
const thoughtEmojis = ['🤔', '💭', '🧐', '✨', '🔮', '💡', '🎯', '📊'];
let thoughtIndex = 0;

// ============================================
// Initialize
// ============================================

function init() {
    scoringEngine = new ScoringEngine();
    bindEvents();
}

function bindEvents() {
    elements.startBtn.addEventListener("click", startGame);
    elements.playAgainBtn.addEventListener("click", resetGame);

    // Bind answer buttons
    const answerBtns = elements.answerContainer.querySelectorAll('.btn-answer');
    answerBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const answer = btn.dataset.answer;
            handleAnswer(answer);
        });
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
// Game Flow
// ============================================

function startGame() {
    scoringEngine.reset();
    matchedCareers = [];
    showScreen("question");
    displayQuestion();
}

function displayQuestion() {
    const questionData = scoringEngine.getNextQuestion();

    if (!questionData || scoringEngine.isComplete()) {
        showThinkingScreen();
        return;
    }

    // Update progress
    const progress = scoringEngine.getProgress();
    elements.progressFill.style.width = progress + "%";

    // Update question number
    elements.questionNumber.textContent = `Question ${questionData.number} of ${questionData.total}`;

    // Update confidence indicator
    const topCareers = scoringEngine.getTopCareers(1);
    if (topCareers.length > 0 && questionData.number > 3) {
        const career = careerDatabase[topCareers[0].id];
        if (career) {
            elements.confidenceText.textContent = `Thinking: ${career.name}?`;
        }
    } else {
        elements.confidenceText.textContent = "Analyzing...";
    }

    // Update question text with animation
    elements.questionText.textContent = questionData.question;

    // Animate card
    elements.questionCard.style.animation = "none";
    setTimeout(() => {
        elements.questionCard.style.animation = "card-slide 0.4s ease";
    }, 10);

    // Update thought bubble
    thoughtIndex = (thoughtIndex + 1) % thoughtEmojis.length;
    elements.thoughtBubble.innerHTML = `<span>${thoughtEmojis[thoughtIndex]}</span>`;
    elements.thoughtBubble.style.animation = "none";
    setTimeout(() => {
        elements.thoughtBubble.style.animation = "bubble-pop 0.3s ease";
    }, 10);
}

function handleAnswer(answerId) {
    // Animate owl thinking
    elements.questionOwl.classList.add('thinking');
    setTimeout(() => {
        elements.questionOwl.classList.remove('thinking');
    }, 500);

    // Process answer
    scoringEngine.answerQuestion(answerId);

    // Check if we should continue or show results
    if (scoringEngine.isComplete()) {
        showThinkingScreen();
    } else {
        // Small delay for animation
        setTimeout(() => {
            displayQuestion();
        }, 200);
    }
}

function showThinkingScreen() {
    showScreen("thinking");

    // Get top careers for display
    matchedCareers = scoringEngine.getTopCareers(5).map(c => c.id);

    // Update thinking messages
    const messages = [
        "Analyzing your answers...",
        "Comparing with 50+ careers...",
        "Finding the best match...",
        "Almost there..."
    ];

    let msgIndex = 0;
    const messageInterval = setInterval(() => {
        msgIndex++;
        if (msgIndex < messages.length) {
            elements.thinkingTitle.textContent = messages[msgIndex];
        }
    }, 700);

    // Show result after animation
    setTimeout(() => {
        clearInterval(messageInterval);
        showResult();
    }, 3000);
}

function showResult() {
    const primaryCareerKey = matchedCareers[0];
    const career = careerDatabase[primaryCareerKey];

    if (!career) {
        console.error('Career not found:', primaryCareerKey);
        // Fallback to software developer
        matchedCareers = ['software_developer'];
        showResult();
        return;
    }

    // Calculate confidence
    const confidence = scoringEngine.getConfidence();
    elements.confidencePercent.textContent = confidence + "%";

    // Update result elements
    elements.careerName.textContent = career.name;
    elements.careerDescription.textContent = career.description;
    elements.resultEmoji.textContent = career.emoji;

    if (elements.resultCategory) {
        elements.resultCategory.textContent = career.category;
    }
    if (elements.resultSalary) {
        elements.resultSalary.textContent = career.salary;
    }
    if (elements.resultGrowth) {
        elements.resultGrowth.textContent = career.growth;
    }

    // Build roadmap
    elements.roadmapTimeline.innerHTML = career.roadmap.map((step, index) => `
        <div class="roadmap-step">
            <div class="step-number">${index + 1}</div>
            <div class="step-content">
                <h4>${step.title}</h4>
                <p>${step.desc}</p>
            </div>
        </div>
    `).join("");

    // Show other matching careers
    if (elements.otherCareers && matchedCareers.length > 1) {
        const otherCareersHtml = matchedCareers.slice(1, 4).map(key => {
            const c = careerDatabase[key];
            if (!c) return '';
            return `
                <div class="other-career-card" onclick="showCareerDetail('${key}')">
                    <span class="other-emoji">${c.emoji}</span>
                    <span class="other-name">${c.name}</span>
                </div>
            `;
        }).join('');

        elements.otherCareers.innerHTML = otherCareersHtml;
        if (elements.alternativesSection) {
            elements.alternativesSection.style.display = matchedCareers.length > 1 ? 'block' : 'none';
        }
    }

    showScreen("result");
    launchConfetti();
}

function showCareerDetail(careerKey) {
    matchedCareers = [careerKey, ...matchedCareers.filter(k => k !== careerKey)];
    showResult();
}
window.showCareerDetail = showCareerDetail;

// ============================================
// Confetti Effect
// ============================================

function launchConfetti() {
    elements.confetti.innerHTML = "";
    const colors = ["#8b5cf6", "#ec4899", "#22c55e", "#f59e0b", "#06b6d4", "#ef4444"];

    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement("div");
        confettiPiece.className = "confetti-piece";
        confettiPiece.style.left = Math.random() * 100 + "%";
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiPiece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
        confettiPiece.style.animationDelay = Math.random() * 0.5 + "s";
        confettiPiece.style.animationDuration = 2 + Math.random() * 1.5 + "s";
        confettiPiece.style.width = (4 + Math.random() * 8) + "px";
        confettiPiece.style.height = (4 + Math.random() * 8) + "px";
        elements.confetti.appendChild(confettiPiece);
    }

    setTimeout(() => {
        elements.confetti.innerHTML = "";
    }, 4000);
}

// ============================================
// Reset Game
// ============================================

function resetGame() {
    scoringEngine.reset();
    matchedCareers = [];
    elements.progressFill.style.width = "0%";
    elements.confidenceText.textContent = "Analyzing...";
    showScreen("welcome");
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
