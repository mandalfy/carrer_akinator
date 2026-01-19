/**
 * Career Akinator - Scoring-Based Question Engine
 * Uses weighted scoring like Akinator with Yes/No/Maybe answers
 */

// Answer weights for scoring
const ANSWER_WEIGHTS = {
    yes: 2,
    probably: 1,
    maybe: 0,
    probably_not: -1,
    no: -2
};

// Career traits and their questions
const careerTraits = {
    // TECHNOLOGY TRAITS
    likes_coding: {
        question: "Do you enjoy writing code or solving programming puzzles?",
        careers: {
            software_developer: 3, frontend_developer: 3, backend_developer: 3,
            data_scientist: 2, ml_engineer: 3, game_developer: 3, mobile_developer: 3,
            blockchain_developer: 3, devops_engineer: 2, data_engineer: 2
        }
    },
    likes_math: {
        question: "Are you comfortable with mathematics and statistics?",
        careers: {
            data_scientist: 3, quantitative_analyst: 3, ml_engineer: 2,
            financial_analyst: 2, accountant: 2, research_scientist: 2,
            aerospace_engineer: 2, electrical_engineer: 2
        }
    },
    likes_visual_design: {
        question: "Do you have an eye for visual aesthetics and design?",
        careers: {
            ui_ux_designer: 3, graphic_designer: 3, frontend_developer: 2,
            photographer: 3, video_producer: 2, game_developer: 2
        }
    },
    likes_problem_solving: {
        question: "Do you enjoy breaking down complex problems into smaller pieces?",
        careers: {
            software_developer: 2, data_scientist: 2, management_consultant: 3,
            business_analyst: 2, lawyer: 2, doctor: 2, research_scientist: 2
        }
    },

    // PEOPLE TRAITS
    likes_helping_others: {
        question: "Do you find fulfillment in directly helping other people?",
        careers: {
            doctor: 3, nurse: 3, teacher: 3, counselor: 3, social_worker: 3,
            physical_therapist: 3, psychologist: 3, hr_manager: 2
        }
    },
    likes_teaching: {
        question: "Do you enjoy explaining concepts and watching others learn?",
        careers: {
            teacher: 3, professor: 3, corporate_trainer: 3,
            content_strategist: 2, mentor: 2
        }
    },
    likes_leading_teams: {
        question: "Do you naturally take charge and enjoy leading groups?",
        careers: {
            product_manager: 3, project_manager: 2, operations_manager: 3,
            entrepreneur: 3, marketing_manager: 2, hr_manager: 2
        }
    },
    likes_persuading: {
        question: "Are you good at convincing others and selling ideas?",
        careers: {
            marketing_manager: 3, public_relations_specialist: 3, lawyer: 2,
            recruiter: 2, entrepreneur: 2, management_consultant: 2
        }
    },

    // WORK STYLE TRAITS
    likes_working_alone: {
        question: "Do you prefer working independently rather than in teams?",
        careers: {
            writer_author: 3, photographer: 2, research_scientist: 2,
            data_analyst: 2, accountant: 2, software_developer: 1
        }
    },
    likes_fast_paced: {
        question: "Do you thrive in fast-paced, high-pressure environments?",
        careers: {
            nurse: 2, investment_banker: 3, entrepreneur: 2,
            public_relations_specialist: 2, chef: 2
        }
    },
    likes_routine: {
        question: "Do you prefer predictable routines over constant change?",
        careers: {
            accountant: 2, teacher: 1, paralegal: 2,
            business_intelligence_analyst: 1
        }
    },
    comfortable_with_risk: {
        question: "Are you comfortable with uncertainty and taking risks?",
        careers: {
            entrepreneur: 3, investment_banker: 2, quantitative_analyst: 2,
            lawyer: 1
        }
    },

    // DOMAIN TRAITS
    interested_in_health: {
        question: "Are you interested in healthcare and medicine?",
        careers: {
            doctor: 3, nurse: 3, pharmacist: 3, physical_therapist: 3,
            dentist: 3, psychologist: 2
        }
    },
    interested_in_finance: {
        question: "Are you interested in money, markets, and investments?",
        careers: {
            financial_analyst: 3, accountant: 3, investment_banker: 3,
            financial_planner: 3, quantitative_analyst: 3
        }
    },
    interested_in_law: {
        question: "Are you interested in law, justice, and legal systems?",
        careers: {
            lawyer: 3, paralegal: 3, policy_analyst: 2
        }
    },
    interested_in_science: {
        question: "Are you fascinated by scientific discovery and research?",
        careers: {
            research_scientist: 3, environmental_scientist: 3,
            data_scientist: 2, doctor: 2
        }
    },
    interested_in_technology: {
        question: "Are you excited by new technology and innovation?",
        careers: {
            software_developer: 2, ml_engineer: 3, blockchain_developer: 3,
            devops_engineer: 2, product_manager: 2
        }
    },
    interested_in_arts: {
        question: "Do you have a passion for art, music, or creative expression?",
        careers: {
            graphic_designer: 3, photographer: 3, video_producer: 3,
            writer_author: 2, game_developer: 2
        }
    },

    // EDUCATION & LIFESTYLE
    willing_long_education: {
        question: "Are you willing to pursue many years of education (6+ years)?",
        careers: {
            doctor: 3, lawyer: 3, professor: 3, psychologist: 3,
            dentist: 3, pharmacist: 2
        }
    },
    wants_high_salary: {
        question: "Is earning a high salary a top priority for you?",
        careers: {
            investment_banker: 3, doctor: 2, lawyer: 2,
            quantitative_analyst: 3, software_developer: 2, ml_engineer: 2
        }
    },
    wants_work_life_balance: {
        question: "Is work-life balance extremely important to you?",
        careers: {
            teacher: 2, data_analyst: 2, ui_ux_designer: 1,
            graphic_designer: 1
        }
    },
    wants_remote_work: {
        question: "Would you prefer a job that allows remote work?",
        careers: {
            software_developer: 2, data_scientist: 2, content_strategist: 2,
            writer_author: 3, ui_ux_designer: 2, graphic_designer: 2
        }
    },

    // SPECIFIC SKILLS
    good_with_hands: {
        question: "Are you skilled at working with your hands?",
        careers: {
            electrician: 3, plumber: 3, chef: 3, dentist: 2,
            mechanical_engineer: 2, physical_therapist: 2
        }
    },
    good_at_writing: {
        question: "Do you express yourself well through writing?",
        careers: {
            writer_author: 3, content_strategist: 3, lawyer: 2,
            public_relations_specialist: 2, policy_analyst: 2, journalist: 3
        }
    },
    good_at_public_speaking: {
        question: "Are you comfortable speaking in front of groups?",
        careers: {
            teacher: 2, professor: 2, lawyer: 3,
            public_relations_specialist: 3, corporate_trainer: 3,
            marketing_manager: 2
        }
    },
    detail_oriented: {
        question: "Would you describe yourself as extremely detail-oriented?",
        careers: {
            accountant: 3, paralegal: 2, pharmacist: 3,
            data_analyst: 2, cybersecurity_analyst: 3
        }
    },

    // MOTIVATION TRAITS  
    wants_to_build_things: {
        question: "Do you get satisfaction from building or creating things?",
        careers: {
            software_developer: 3, mechanical_engineer: 3, civil_engineer: 3,
            architect: 3, entrepreneur: 2, game_developer: 3
        }
    },
    wants_to_analyze: {
        question: "Do you enjoy analyzing data and finding patterns?",
        careers: {
            data_scientist: 3, data_analyst: 3, business_intelligence_analyst: 3,
            financial_analyst: 2, quantitative_analyst: 3, research_scientist: 2
        }
    },
    wants_to_heal: {
        question: "Do you feel called to heal and care for others' wellbeing?",
        careers: {
            doctor: 3, nurse: 3, physical_therapist: 3,
            psychologist: 3, counselor: 3
        }
    },
    wants_to_protect: {
        question: "Do you want to protect people, systems, or information?",
        careers: {
            cybersecurity_analyst: 3, lawyer: 2, policy_analyst: 2
        }
    },
    wants_creative_freedom: {
        question: "Is having creative freedom in your work essential to you?",
        careers: {
            graphic_designer: 3, writer_author: 3, photographer: 3,
            entrepreneur: 2, video_producer: 3, game_developer: 2
        }
    },

    // ENVIRONMENT PREFERENCES
    likes_office_work: {
        question: "Do you prefer working in an office environment?",
        careers: {
            accountant: 2, financial_analyst: 2, business_analyst: 2,
            hr_manager: 2, marketing_manager: 2
        }
    },
    likes_outdoor_work: {
        question: "Would you prefer spending time outdoors for work?",
        careers: {
            environmental_scientist: 3, civil_engineer: 2,
            photographer: 2, electrician: 1
        }
    },
    likes_hospital_environment: {
        question: "Are you comfortable working in hospitals or clinical settings?",
        careers: {
            doctor: 3, nurse: 3, pharmacist: 2, physical_therapist: 2
        }
    },

    // ADDITIONAL QUESTIONS FOR DEPTH
    enjoys_learning_new_tech: {
        question: "Do you enjoy constantly learning new technologies?",
        careers: {
            software_developer: 2, devops_engineer: 2, ml_engineer: 2,
            data_engineer: 2, cybersecurity_analyst: 2
        }
    },
    patient_with_people: {
        question: "Are you patient when dealing with difficult people?",
        careers: {
            teacher: 3, counselor: 3, social_worker: 3,
            hr_manager: 2, customer_service: 3
        }
    },
    likes_strategy: {
        question: "Do you enjoy thinking about long-term strategy and planning?",
        careers: {
            management_consultant: 3, product_manager: 3,
            entrepreneur: 2, marketing_manager: 2, operations_manager: 2
        }
    },
    comfortable_with_blood: {
        question: "Are you comfortable around blood and medical procedures?",
        careers: {
            doctor: 3, nurse: 3, dentist: 2, physical_therapist: 1
        }
    },
    likes_mentoring: {
        question: "Do you enjoy mentoring and developing others?",
        careers: {
            teacher: 3, professor: 2, hr_manager: 2,
            corporate_trainer: 3, manager: 2
        }
    },
    entrepreneurial_mindset: {
        question: "Do you dream of starting your own business someday?",
        careers: {
            entrepreneur: 3, freelance: 2, consultant: 2
        }
    },
    likes_debugging: {
        question: "Do you enjoy finding and fixing errors or bugs?",
        careers: {
            software_developer: 3, devops_engineer: 2,
            cybersecurity_analyst: 2, data_engineer: 2
        }
    },
    good_at_negotiation: {
        question: "Are you skilled at negotiating and making deals?",
        careers: {
            lawyer: 3, investment_banker: 2, recruiter: 2,
            entrepreneur: 2, real_estate_agent: 3
        }
    },

    // NEW TRAITS FOR EXPANDED CAREERS
    loves_animals: {
        question: "Do you have a passion for working with animals?",
        careers: {
            veterinarian: 3
        }
    },
    loves_flying: {
        question: "Are you fascinated by aviation and flying?",
        careers: {
            pilot: 3
        }
    },
    loves_architecture: {
        question: "Are you interested in designing buildings and spaces?",
        careers: {
            architect: 3, interior_designer: 2, urban_planner: 2
        }
    },
    loves_sports: {
        question: "Are you passionate about sports and athletics?",
        careers: {
            sports_coach: 3, fitness_instructor: 3
        }
    },
    loves_food: {
        question: "Do you have a passion for cooking and culinary arts?",
        careers: {
            chef: 3, nutritionist: 2
        }
    },
    loves_languages: {
        question: "Are you passionate about learning languages and cultures?",
        careers: {
            translator: 3
        }
    },
    loves_art_history: {
        question: "Are you fascinated by art, history, and culture?",
        careers: {
            museum_curator: 3
        }
    },
    loves_events: {
        question: "Do you enjoy organizing and coordinating events?",
        careers: {
            event_planner: 3, marketing_manager: 2
        }
    },
    loves_fashion: {
        question: "Are you passionate about fashion and style?",
        careers: {
            fashion_designer: 3
        }
    },
    cares_about_environment: {
        question: "Is environmental protection and sustainability important to you?",
        careers: {
            environmental_consultant: 3, environmental_scientist: 3, urban_planner: 2
        }
    },
    interested_in_cloud: {
        question: "Are you interested in cloud computing and infrastructure?",
        careers: {
            cloud_architect: 3, devops_engineer: 2
        }
    },
    interested_in_privacy: {
        question: "Do you care about data privacy and compliance?",
        careers: {
            data_privacy_officer: 3, cybersecurity_analyst: 2
        }
    },
    likes_documentation: {
        question: "Do you enjoy writing documentation and explanations?",
        careers: {
            technical_writer: 3, content_strategist: 2
        }
    },
    interested_in_logistics: {
        question: "Are you interested in logistics and supply chains?",
        careers: {
            supply_chain_manager: 3, operations_manager: 2
        }
    },
    likes_user_research: {
        question: "Do you enjoy understanding how people use products?",
        careers: {
            ux_researcher: 3, ui_ux_designer: 2, product_manager: 2
        }
    },
    interested_in_eyes: {
        question: "Are you interested in eye health and vision?",
        careers: {
            optometrist: 3
        }
    },
    interested_in_imaging: {
        question: "Are you fascinated by medical imaging technology?",
        careers: {
            radiologist: 3
        }
    },
    interested_in_rehab: {
        question: "Do you want to help people recover and rehabilitate?",
        careers: {
            physical_therapist: 3, occupational_therapist: 3, speech_pathologist: 2
        }
    },
    interested_in_drugs: {
        question: "Are you interested in how medications and drugs work?",
        careers: {
            pharmacist: 3, pharmacologist: 3
        }
    },
    interested_in_economics: {
        question: "Are you interested in economics and market trends?",
        careers: {
            economist: 3, financial_analyst: 2, policy_analyst: 2
        }
    },
    interested_in_insurance: {
        question: "Are you interested in risk assessment and insurance?",
        careers: {
            actuary: 3, financial_planner: 2
        }
    },
    likes_audio: {
        question: "Are you passionate about music and sound production?",
        careers: {
            sound_engineer: 3
        }
    },
    interested_in_medical_devices: {
        question: "Are you interested in medical technology and devices?",
        careers: {
            biomedical_engineer: 3
        }
    },
    likes_journalism: {
        question: "Do you want to investigate and report on stories?",
        careers: {
            journalist: 3, writer_author: 2
        }
    },
    interested_in_real_estate: {
        question: "Are you interested in real estate and property markets?",
        careers: {
            real_estate_agent: 3
        }
    },
    likes_city_planning: {
        question: "Are you interested in how cities and communities are designed?",
        careers: {
            urban_planner: 3, architect: 2
        }
    },
    interested_in_speech: {
        question: "Are you interested in speech and communication disorders?",
        careers: {
            speech_pathologist: 3
        }
    }
};


// Get all trait IDs as an array for question selection
const allTraitIds = Object.keys(careerTraits);

/**
 * Bayesian Career Inference Engine
 * 
 * Uses proper probabilistic inference with Bayes' theorem:
 *   P(career | answer) ∝ P(answer | career) × P(career)
 * 
 * Question selection uses Information Gain (entropy reduction):
 *   IG(question) = H(current) - E[H(after_answer)]
 */
class ScoringEngine {
    constructor() {
        // Configuration
        this.LIKELIHOOD_SCALE = 0.8;  // Scaling factor for sigmoid likelihood
        this.PRIOR_SMOOTHING = 0.001; // Laplace smoothing for priors
        this.reset();
    }

    reset() {
        // Collect all unique careers from trait definitions
        this.allCareers = new Set();
        for (const traitId in careerTraits) {
            const trait = careerTraits[traitId];
            for (const career in trait.careers) {
                this.allCareers.add(career);
            }
        }
        this.allCareers = Array.from(this.allCareers);

        // Initialize uniform prior probabilities: P(career) = 1/N
        this.posteriors = {};
        const uniformProb = 1.0 / this.allCareers.length;
        for (const career of this.allCareers) {
            this.posteriors[career] = uniformProb;
        }

        this.askedQuestions = new Set();
        this.questionCount = 0;
        this.maxQuestions = 20;
        this.currentTraitId = null;
    }

    /**
     * Sigmoid function: maps trait weight to probability
     * Higher trait weight → higher probability of positive answer
     */
    sigmoid(x) {
        return 1.0 / (1.0 + Math.exp(-x));
    }

    /**
     * Calculate P(answer | career, trait)
     * Models likelihood of a user with a given career answering a certain way
     */
    getLikelihood(careerId, traitId, answerId) {
        const trait = careerTraits[traitId];
        const traitWeight = trait.careers[careerId] || 0;

        // Convert trait weight to base probability using sigmoid
        // trait_weight: 0 → 0.5, 3 → ~0.92, -3 → ~0.08
        const baseProb = this.sigmoid(traitWeight * this.LIKELIHOOD_SCALE);

        // Map answer to expected alignment
        // yes=1.0, probably=0.75, maybe=0.5, probably_not=0.25, no=0.0
        const answerAlignment = {
            yes: 1.0,
            probably: 0.75,
            maybe: 0.5,
            probably_not: 0.25,
            no: 0.0
        };

        const alignment = answerAlignment[answerId];

        // Likelihood: how well does the answer match expected probability?
        // Using a soft matching function based on distance
        // P(answer | career) = 1 - |baseProb - alignment| × damping
        const distance = Math.abs(baseProb - alignment);
        const likelihood = Math.exp(-2 * distance * distance); // Gaussian-like

        return Math.max(likelihood, 0.01); // Floor to prevent zero likelihood
    }

    /**
     * Calculate entropy of probability distribution
     * H(X) = -Σ P(x) log₂ P(x)
     */
    calculateEntropy(probabilities) {
        let entropy = 0;
        for (const career in probabilities) {
            const p = probabilities[career];
            if (p > 0) {
                entropy -= p * Math.log2(p);
            }
        }
        return entropy;
    }

    /**
     * Normalize a probability distribution to sum to 1
     */
    normalizeProbabilities(probs) {
        const total = Object.values(probs).reduce((sum, p) => sum + p, 0);
        const normalized = {};
        for (const career in probs) {
            normalized[career] = probs[career] / total;
        }
        return normalized;
    }

    /**
     * Calculate Information Gain for a question
     * IG = H(current) - Expected H(after answering)
     */
    calculateInformationGain(traitId) {
        const currentEntropy = this.calculateEntropy(this.posteriors);
        const answers = Object.keys(ANSWER_WEIGHTS);

        let expectedEntropyAfter = 0;

        for (const answer of answers) {
            // Calculate P(answer) = Σ P(answer | career) × P(career)
            let pAnswer = 0;
            for (const career of this.allCareers) {
                const likelihood = this.getLikelihood(career, traitId, answer);
                pAnswer += likelihood * this.posteriors[career];
            }

            if (pAnswer <= 0) continue;

            // Calculate posterior distribution if this answer is given
            const tempPosteriors = {};
            for (const career of this.allCareers) {
                const likelihood = this.getLikelihood(career, traitId, answer);
                tempPosteriors[career] = likelihood * this.posteriors[career];
            }
            const normalizedPosteriors = this.normalizeProbabilities(tempPosteriors);

            // Calculate entropy of this posterior
            const entropyAfter = this.calculateEntropy(normalizedPosteriors);

            // Weight by probability of this answer occurring
            expectedEntropyAfter += pAnswer * entropyAfter;
        }

        // Information gain = reduction in entropy
        return currentEntropy - expectedEntropyAfter;
    }

    /**
     * Select the next question using Information Gain maximization
     */
    getNextQuestion() {
        const remainingTraits = allTraitIds.filter(id => !this.askedQuestions.has(id));

        if (remainingTraits.length === 0 || this.questionCount >= this.maxQuestions) {
            return null;
        }

        // Early termination if we're very confident
        const topCareer = this.getTopCareers(1)[0];
        if (topCareer && this.posteriors[topCareer.id] > 0.85 && this.questionCount >= 5) {
            return null; // High confidence, can stop early
        }

        // Calculate information gain for each remaining question
        let bestTrait = null;
        let bestIG = -Infinity;

        for (const traitId of remainingTraits) {
            const ig = this.calculateInformationGain(traitId);

            // Add small random tiebreaker for equal IG values
            const igWithTiebreaker = ig + Math.random() * 0.001;

            if (igWithTiebreaker > bestIG) {
                bestIG = igWithTiebreaker;
                bestTrait = traitId;
            }
        }

        // Fallback to random if no good question found
        if (!bestTrait) {
            bestTrait = remainingTraits[Math.floor(Math.random() * remainingTraits.length)];
        }

        this.currentTraitId = bestTrait;
        return {
            id: bestTrait,
            question: careerTraits[bestTrait].question,
            number: this.questionCount + 1,
            total: this.maxQuestions,
            informationGain: bestIG // For debugging/display
        };
    }

    /**
     * Update probabilities using Bayes' theorem after receiving an answer
     */
    answerQuestion(answerId) {
        if (!this.currentTraitId) return;

        // Bayesian update: P(career | answer) ∝ P(answer | career) × P(career)
        const newPosteriors = {};

        for (const career of this.allCareers) {
            const likelihood = this.getLikelihood(career, this.currentTraitId, answerId);
            const prior = this.posteriors[career];
            newPosteriors[career] = likelihood * prior;
        }

        // Normalize to ensure probabilities sum to 1
        this.posteriors = this.normalizeProbabilities(newPosteriors);

        this.askedQuestions.add(this.currentTraitId);
        this.questionCount++;
    }

    /**
     * Get top careers sorted by posterior probability
     */
    getTopCareers(count = 3) {
        const sorted = Object.entries(this.posteriors)
            .sort((a, b) => b[1] - a[1])
            .slice(0, count)
            .map(([id, probability]) => ({
                id,
                score: probability,
                probability: (probability * 100).toFixed(1) + '%'
            }));
        return sorted;
    }

    getProgress() {
        return Math.min((this.questionCount / this.maxQuestions) * 100, 100);
    }

    isComplete() {
        // Complete if max questions reached OR high confidence achieved
        const topCareer = this.getTopCareers(1)[0];
        const highConfidence = topCareer && this.posteriors[topCareer.id] > 0.85;
        return this.questionCount >= this.maxQuestions || (highConfidence && this.questionCount >= 5);
    }

    /**
     * Get confidence as the posterior probability of top career
     * This is a proper probabilistic confidence measure
     */
    getConfidence() {
        const top = this.getTopCareers(1)[0];
        if (!top) return 50;

        // Confidence is the posterior probability of the top career
        // Scale to 0-99 range for display
        const probability = this.posteriors[top.id];
        return Math.min(Math.round(probability * 100), 99);
    }

    /**
     * Get the current entropy (uncertainty) of the distribution
     * Useful for debugging and understanding algorithm state
     */
    getCurrentEntropy() {
        return this.calculateEntropy(this.posteriors);
    }
}

// Export for use in main script
window.ScoringEngine = ScoringEngine;
window.careerTraits = careerTraits;
window.ANSWER_WEIGHTS = ANSWER_WEIGHTS;
