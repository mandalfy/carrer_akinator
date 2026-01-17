/**
 * Career Akinator - Clean Minimal Controller
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
    scoringEngine = new ScoringEngine();
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
    elements.progressPercent.textContent = Math.round(progress) + "%";
    elements.questionNumber.textContent = `${questionData.number} of ${questionData.total}`;

    // Update question
    elements.questionText.textContent = questionData.question;

    // Update hint based on progress
    if (questionData.number > 10) {
        const topCareer = scoringEngine.getTopCareers(1)[0];
        if (topCareer && careerDatabase[topCareer.id]) {
            elements.confidenceText.textContent = `Leading match: ${careerDatabase[topCareer.id].name}`;
        }
    } else {
        elements.confidenceText.textContent = "";
    }
}

function handleAnswer(answerId) {
    scoringEngine.answerQuestion(answerId);

    if (scoringEngine.isComplete()) {
        showThinkingScreen();
    } else {
        displayQuestion();
    }
}

function showThinkingScreen() {
    showScreen("thinking");
    matchedCareers = scoringEngine.getTopCareers(5).map(c => c.id);

    // Simple loading messages
    const messages = [
        "Analyzing your responses",
        "Finding best matches",
        "Almost ready"
    ];

    let i = 0;
    const interval = setInterval(() => {
        i++;
        if (i < messages.length) {
            elements.thinkingTitle.textContent = messages[i];
        }
    }, 800);

    setTimeout(() => {
        clearInterval(interval);
        showResult();
    }, 2800);
}

function showResult() {
    const primaryCareerKey = matchedCareers[0];
    const career = careerDatabase[primaryCareerKey];

    if (!career) {
        matchedCareers = ['software_developer'];
        showResult();
        return;
    }

    const confidence = scoringEngine.getConfidence();
    elements.confidencePercent.textContent = `${confidence}% match`;
    elements.careerName.textContent = career.name;
    elements.careerDescription.textContent = career.description;
    elements.resultEmoji.textContent = career.emoji;

    if (elements.resultCategory) elements.resultCategory.textContent = career.category;
    if (elements.resultSalary) elements.resultSalary.textContent = career.salary;
    if (elements.resultGrowth) elements.resultGrowth.textContent = career.growth;

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

    // Other careers
    if (elements.otherCareers && matchedCareers.length > 1) {
        elements.otherCareers.innerHTML = matchedCareers.slice(1, 4).map(key => {
            const c = careerDatabase[key];
            if (!c) return '';
            return `
                <div class="other-career-card" onclick="showCareerDetail('${key}')">
                    <span>${c.emoji}</span>
                    <span>${c.name}</span>
                </div>
            `;
        }).join('');
        elements.alternativesSection.style.display = 'block';
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
// Confetti - Subtle version
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
    scoringEngine.reset();
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
