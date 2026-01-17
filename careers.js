/**
 * Career Akinator - Comprehensive Career Database
 * 50+ careers with detailed roadmaps organized by category
 */

const careerDatabase = {
    // ============================================
    // TECHNOLOGY & SOFTWARE
    // ============================================

    software_developer: {
        name: "Software Developer",
        emoji: "💻",
        category: "Technology",
        description: "Building the digital future, one line of code at a time. You love solving problems with elegant code.",
        traits: ["analytical", "creative", "patient", "detail-oriented"],
        salary: "$80k - $150k+",
        growth: "22% (Much faster than average)",
        roadmap: [
            { title: "Learn Programming Fundamentals", desc: "Start with Python or JavaScript, understand logic and syntax" },
            { title: "Master Data Structures & Algorithms", desc: "Arrays, trees, graphs, sorting - the foundation of CS" },
            { title: "Build Real Projects", desc: "Create apps, websites, or tools - learn by doing" },
            { title: "Learn Version Control & Collaboration", desc: "Git, GitHub, code reviews, and team workflows" },
            { title: "Choose Your Specialization", desc: "Web, mobile, systems, cloud, or embedded development" },
            { title: "Continuous Learning", desc: "Tech evolves - stay current with new frameworks and languages" }
        ]
    },

    frontend_developer: {
        name: "Frontend Developer",
        emoji: "🎨",
        category: "Technology",
        description: "You make the web beautiful and interactive. CSS animations and pixel-perfect UIs are your jam!",
        traits: ["creative", "visual", "detail-oriented", "user-focused"],
        salary: "$70k - $140k",
        growth: "23% (Much faster than average)",
        roadmap: [
            { title: "HTML & CSS Mastery", desc: "Semantic HTML, Flexbox, Grid, animations" },
            { title: "JavaScript Deep Dive", desc: "ES6+, DOM manipulation, async programming" },
            { title: "Modern Frameworks", desc: "React, Vue, or Angular - pick one and master it" },
            { title: "Responsive & Accessible Design", desc: "Mobile-first, WCAG guidelines, cross-browser compatibility" },
            { title: "Build a Portfolio", desc: "Showcase stunning projects that demonstrate your skills" },
            { title: "Performance Optimization", desc: "Core Web Vitals, lazy loading, bundle optimization" }
        ]
    },

    backend_developer: {
        name: "Backend Developer",
        emoji: "⚙️",
        category: "Technology",
        description: "The engine room of applications! You build APIs, databases, and the logic that powers everything.",
        traits: ["logical", "systematic", "problem-solver", "security-minded"],
        salary: "$85k - $160k",
        growth: "22% (Much faster than average)",
        roadmap: [
            { title: "Server-Side Language", desc: "Python, Node.js, Java, Go, or Rust" },
            { title: "Database Mastery", desc: "SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis)" },
            { title: "API Design", desc: "REST, GraphQL, authentication, rate limiting" },
            { title: "Cloud & DevOps Basics", desc: "AWS/GCP/Azure, Docker, CI/CD pipelines" },
            { title: "Security Best Practices", desc: "OWASP, encryption, secure coding" },
            { title: "System Design", desc: "Scalability, microservices, distributed systems" }
        ]
    },

    data_scientist: {
        name: "Data Scientist",
        emoji: "📊",
        category: "Technology",
        description: "Numbers tell stories to you! You find patterns in data and turn them into actionable insights.",
        traits: ["analytical", "curious", "statistical", "communicator"],
        salary: "$95k - $180k",
        growth: "35% (Much faster than average)",
        roadmap: [
            { title: "Statistics & Probability", desc: "Hypothesis testing, distributions, Bayesian thinking" },
            { title: "Python & R Programming", desc: "Pandas, NumPy, scikit-learn, tidyverse" },
            { title: "Machine Learning", desc: "Supervised, unsupervised, deep learning fundamentals" },
            { title: "Data Visualization", desc: "Matplotlib, Seaborn, Tableau, storytelling with data" },
            { title: "SQL & Big Data Tools", desc: "Complex queries, Spark, data warehouses" },
            { title: "Domain Expertise", desc: "Apply skills to healthcare, finance, or your passion" }
        ]
    },

    ml_engineer: {
        name: "Machine Learning Engineer",
        emoji: "🤖",
        category: "Technology",
        description: "You build AI systems that learn and improve! Deploying models at scale is your specialty.",
        traits: ["mathematical", "engineering-minded", "innovative", "detail-oriented"],
        salary: "$110k - $200k+",
        growth: "40% (Explosive growth)",
        roadmap: [
            { title: "Strong Programming Foundation", desc: "Python, C++, software engineering principles" },
            { title: "Deep Learning Frameworks", desc: "TensorFlow, PyTorch, model architectures" },
            { title: "MLOps & Deployment", desc: "Model serving, monitoring, A/B testing, MLflow" },
            { title: "Distributed Computing", desc: "Training at scale, GPU clusters, optimization" },
            { title: "Research Papers", desc: "Read and implement latest ML research" },
            { title: "End-to-End Projects", desc: "From data to production, solve real problems" }
        ]
    },

    devops_engineer: {
        name: "DevOps Engineer",
        emoji: "🔧",
        category: "Technology",
        description: "You bridge development and operations! Automation, CI/CD, and infrastructure are your playground.",
        traits: ["systematic", "automation-lover", "problem-solver", "collaborative"],
        salary: "$90k - $170k",
        growth: "25% (Much faster than average)",
        roadmap: [
            { title: "Linux & Scripting", desc: "Bash, Python, system administration" },
            { title: "Cloud Platforms", desc: "AWS, GCP, or Azure - get certified" },
            { title: "Containers & Orchestration", desc: "Docker, Kubernetes, container security" },
            { title: "Infrastructure as Code", desc: "Terraform, Ansible, CloudFormation" },
            { title: "CI/CD Pipelines", desc: "Jenkins, GitHub Actions, GitLab CI" },
            { title: "Monitoring & Observability", desc: "Prometheus, Grafana, logging, alerting" }
        ]
    },

    cybersecurity_analyst: {
        name: "Cybersecurity Analyst",
        emoji: "🔐",
        category: "Technology",
        description: "You're the guardian of digital assets! Protecting systems from hackers is your mission.",
        traits: ["vigilant", "analytical", "ethical", "detail-oriented"],
        salary: "$85k - $160k",
        growth: "32% (Much faster than average)",
        roadmap: [
            { title: "Networking Fundamentals", desc: "TCP/IP, firewalls, VPNs, network security" },
            { title: "Security Certifications", desc: "CompTIA Security+, CEH, CISSP" },
            { title: "Threat Analysis", desc: "Vulnerability assessment, penetration testing" },
            { title: "Incident Response", desc: "Forensics, malware analysis, breach handling" },
            { title: "Security Tools", desc: "SIEM, IDS/IPS, endpoint protection" },
            { title: "Compliance & Governance", desc: "GDPR, HIPAA, SOC 2, security frameworks" }
        ]
    },

    ui_ux_designer: {
        name: "UI/UX Designer",
        emoji: "✨",
        category: "Technology",
        description: "You make technology beautiful AND usable. Design is how it works, not just how it looks!",
        traits: ["creative", "empathetic", "visual", "user-advocate"],
        salary: "$70k - $140k",
        growth: "16% (Faster than average)",
        roadmap: [
            { title: "Design Principles", desc: "Color theory, typography, layout, visual hierarchy" },
            { title: "Design Tools", desc: "Figma, Sketch, Adobe XD - master your toolkit" },
            { title: "UX Research Methods", desc: "User interviews, usability testing, personas, journey maps" },
            { title: "Prototyping & Testing", desc: "Interactive prototypes, A/B testing, iteration" },
            { title: "Design Systems", desc: "Component libraries, style guides, consistency at scale" },
            { title: "Portfolio Development", desc: "Case studies showing your full design process" }
        ]
    },

    game_developer: {
        name: "Game Developer",
        emoji: "🎮",
        category: "Technology",
        description: "You create worlds and experiences! Games are your canvas for creativity and technical skill.",
        traits: ["creative", "passionate", "detail-oriented", "persistent"],
        salary: "$60k - $130k",
        growth: "10% (As fast as average)",
        roadmap: [
            { title: "Game Engine Mastery", desc: "Unity (C#) or Unreal Engine (C++)" },
            { title: "Programming Fundamentals", desc: "Game loops, physics, AI, optimization" },
            { title: "Game Design Principles", desc: "Mechanics, level design, player psychology" },
            { title: "Graphics & Animation", desc: "Shaders, 2D/3D art pipelines, animation systems" },
            { title: "Ship Games", desc: "Complete projects, game jams, learn from feedback" },
            { title: "Build Community", desc: "Share work, network, join studios or go indie" }
        ]
    },

    mobile_developer: {
        name: "Mobile App Developer",
        emoji: "📱",
        category: "Technology",
        description: "Apps in everyone's pocket! You build for iOS, Android, or both with cross-platform tools.",
        traits: ["user-focused", "detail-oriented", "adaptive", "quality-conscious"],
        salary: "$80k - $150k",
        growth: "24% (Much faster than average)",
        roadmap: [
            { title: "Choose Your Path", desc: "iOS (Swift), Android (Kotlin), or Cross-platform (Flutter/React Native)" },
            { title: "Platform Guidelines", desc: "Human Interface Guidelines, Material Design" },
            { title: "App Architecture", desc: "MVVM, Clean Architecture, state management" },
            { title: "APIs & Backend Integration", desc: "REST, GraphQL, offline-first design" },
            { title: "Testing & Quality", desc: "Unit tests, UI tests, TestFlight/Play Console" },
            { title: "App Store Optimization", desc: "Launch, marketing, user acquisition" }
        ]
    },

    blockchain_developer: {
        name: "Blockchain Developer",
        emoji: "⛓️",
        category: "Technology",
        description: "Decentralized future! You build smart contracts, DApps, and Web3 infrastructure.",
        traits: ["innovative", "security-minded", "mathematical", "early-adopter"],
        salary: "$100k - $200k+",
        growth: "30% (Very fast)",
        roadmap: [
            { title: "Blockchain Fundamentals", desc: "Cryptography, consensus mechanisms, distributed systems" },
            { title: "Smart Contract Development", desc: "Solidity, Rust, security best practices" },
            { title: "Web3 Technologies", desc: "Ethereum, Polygon, or other chains" },
            { title: "DApp Frontend", desc: "Web3.js, ethers.js, wallet integration" },
            { title: "Security & Auditing", desc: "Common vulnerabilities, formal verification" },
            { title: "DeFi/NFT Expertise", desc: "Specialized knowledge in your area of interest" }
        ]
    },

    // ============================================
    // DATA & ANALYTICS
    // ============================================

    data_analyst: {
        name: "Data Analyst",
        emoji: "📈",
        category: "Data & Analytics",
        description: "You turn raw data into business insights! Excel, SQL, and visualization are your tools.",
        traits: ["analytical", "detail-oriented", "communicator", "curious"],
        salary: "$55k - $95k",
        growth: "23% (Much faster than average)",
        roadmap: [
            { title: "Excel & Spreadsheets", desc: "Advanced formulas, pivot tables, data cleaning" },
            { title: "SQL Proficiency", desc: "Queries, joins, aggregations, window functions" },
            { title: "Data Visualization", desc: "Tableau, Power BI, or Looker" },
            { title: "Statistics Basics", desc: "Descriptive stats, correlation, basic modeling" },
            { title: "Business Acumen", desc: "Understand KPIs, metrics, business context" },
            { title: "Storytelling with Data", desc: "Present findings clearly to stakeholders" }
        ]
    },

    business_intelligence_analyst: {
        name: "Business Intelligence Analyst",
        emoji: "📉",
        category: "Data & Analytics",
        description: "You build dashboards and reporting systems that drive business decisions!",
        traits: ["analytical", "strategic", "detail-oriented", "communicator"],
        salary: "$70k - $120k",
        growth: "20% (Faster than average)",
        roadmap: [
            { title: "BI Tools Mastery", desc: "Tableau, Power BI, Looker, or Metabase" },
            { title: "SQL & Data Modeling", desc: "Complex queries, star schemas, ETL basics" },
            { title: "Dashboard Design", desc: "Best practices, user experience, performance" },
            { title: "Business Understanding", desc: "Industry knowledge, KPIs, strategic thinking" },
            { title: "Data Warehousing", desc: "Snowflake, BigQuery, Redshift concepts" },
            { title: "Automation & Self-Service", desc: "Empower business users with self-serve analytics" }
        ]
    },

    data_engineer: {
        name: "Data Engineer",
        emoji: "🔀",
        category: "Data & Analytics",
        description: "You build the pipelines that make data flow! Infrastructure for analytics is your domain.",
        traits: ["systematic", "problem-solver", "detail-oriented", "scalability-minded"],
        salary: "$95k - $170k",
        growth: "28% (Much faster than average)",
        roadmap: [
            { title: "Python & SQL Mastery", desc: "Advanced programming, complex queries" },
            { title: "ETL/ELT Pipelines", desc: "Apache Airflow, dbt, data transformation" },
            { title: "Big Data Technologies", desc: "Spark, Kafka, distributed processing" },
            { title: "Cloud Data Platforms", desc: "Snowflake, BigQuery, Databricks" },
            { title: "Data Modeling", desc: "Dimensional modeling, data vault, best practices" },
            { title: "Observability & Quality", desc: "Data testing, monitoring, lineage" }
        ]
    },

    quantitative_analyst: {
        name: "Quantitative Analyst (Quant)",
        emoji: "🧮",
        category: "Data & Analytics",
        description: "Math meets finance! You build models for trading, risk, and investment strategies.",
        traits: ["mathematical", "analytical", "precise", "innovative"],
        salary: "$120k - $300k+",
        growth: "15% (Faster than average)",
        roadmap: [
            { title: "Advanced Mathematics", desc: "Calculus, linear algebra, stochastic processes" },
            { title: "Programming Skills", desc: "Python, C++, R for quantitative work" },
            { title: "Financial Theory", desc: "Derivatives, options pricing, risk models" },
            { title: "Statistical Modeling", desc: "Time series, Monte Carlo, machine learning" },
            { title: "Advanced Degree", desc: "MS/PhD in Math, Physics, CS, or Financial Engineering" },
            { title: "Industry Experience", desc: "Trading, hedge funds, or buy-side firms" }
        ]
    },

    // ============================================
    // BUSINESS & MANAGEMENT
    // ============================================

    product_manager: {
        name: "Product Manager",
        emoji: "🎯",
        category: "Business",
        description: "The CEO of the product! You bridge users, tech, and business to build amazing things.",
        traits: ["strategic", "empathetic", "communicator", "decisive"],
        salary: "$100k - $180k",
        growth: "12% (Faster than average)",
        roadmap: [
            { title: "Product Fundamentals", desc: "Product lifecycle, roadmapping, prioritization" },
            { title: "User Research", desc: "Interviews, surveys, personas, journey mapping" },
            { title: "Technical Literacy", desc: "Understand how software is built (not coding)" },
            { title: "Agile & Scrum", desc: "Sprint planning, stakeholder management" },
            { title: "Metrics & Analytics", desc: "KPIs, A/B testing, data-driven decisions" },
            { title: "Ship Products", desc: "Lead products from idea to launch" }
        ]
    },

    project_manager: {
        name: "Project Manager",
        emoji: "📋",
        category: "Business",
        description: "You keep projects on track! Timelines, resources, and stakeholders are your world.",
        traits: ["organized", "communicator", "leader", "problem-solver"],
        salary: "$70k - $130k",
        growth: "7% (As fast as average)",
        roadmap: [
            { title: "PM Fundamentals", desc: "Scope, schedule, budget, quality management" },
            { title: "Certification", desc: "PMP, PRINCE2, or Agile certifications" },
            { title: "Tools Mastery", desc: "Jira, Asana, MS Project, Gantt charts" },
            { title: "Agile Methodologies", desc: "Scrum, Kanban, SAFe frameworks" },
            { title: "Stakeholder Management", desc: "Communication, negotiation, conflict resolution" },
            { title: "Risk Management", desc: "Identify, assess, and mitigate project risks" }
        ]
    },

    business_analyst: {
        name: "Business Analyst",
        emoji: "🔍",
        category: "Business",
        description: "You bridge business needs and technical solutions. Clarity is your superpower!",
        traits: ["analytical", "communicator", "detail-oriented", "problem-solver"],
        salary: "$65k - $110k",
        growth: "11% (Faster than average)",
        roadmap: [
            { title: "Business Analysis Basics", desc: "Requirements gathering, documentation" },
            { title: "Technical Skills", desc: "SQL, Excel, basic data analysis" },
            { title: "Process Modeling", desc: "BPMN, flowcharts, use cases, user stories" },
            { title: "Domain Knowledge", desc: "Specialize in finance, healthcare, or tech" },
            { title: "Certification", desc: "CBAP, PMI-PBA, or Agile BA" },
            { title: "Stakeholder Management", desc: "Facilitate workshops, manage expectations" }
        ]
    },

    management_consultant: {
        name: "Management Consultant",
        emoji: "💼",
        category: "Business",
        description: "You solve complex business problems for top companies! Strategy is your game.",
        traits: ["strategic", "analytical", "adaptable", "communicator"],
        salary: "$90k - $200k+",
        growth: "11% (Faster than average)",
        roadmap: [
            { title: "Strong Academics", desc: "Top university, MBA often preferred" },
            { title: "Case Interview Prep", desc: "Problem-solving frameworks, mental math" },
            { title: "Industry Knowledge", desc: "Deep expertise in 1-2 industries" },
            { title: "PowerPoint & Excel", desc: "Consulting-grade deliverables" },
            { title: "Join a Firm", desc: "MBB, Big 4, or boutique consulting" },
            { title: "Build Expertise", desc: "Specialization and client relationships" }
        ]
    },

    operations_manager: {
        name: "Operations Manager",
        emoji: "⚡",
        category: "Business",
        description: "You make organizations run smoothly! Efficiency and processes are your obsession.",
        traits: ["organized", "analytical", "leader", "detail-oriented"],
        salary: "$70k - $130k",
        growth: "6% (As fast as average)",
        roadmap: [
            { title: "Operations Fundamentals", desc: "Supply chain, logistics, process management" },
            { title: "Lean & Six Sigma", desc: "Process improvement methodologies" },
            { title: "Data Analysis", desc: "Metrics, KPIs, operational analytics" },
            { title: "Leadership Skills", desc: "Team management, conflict resolution" },
            { title: "Technology Fluency", desc: "ERP systems, automation tools" },
            { title: "Industry Expertise", desc: "Deepen knowledge in your sector" }
        ]
    },

    entrepreneur: {
        name: "Entrepreneur / Startup Founder",
        emoji: "🚀",
        category: "Business",
        description: "You build companies from scratch! Risk, vision, and hustle define your path.",
        traits: ["risk-taker", "visionary", "resilient", "versatile"],
        salary: "$0 - Unlimited (High variance!)",
        growth: "N/A",
        roadmap: [
            { title: "Find Your Problem", desc: "Identify a real pain point worth solving" },
            { title: "Validate Ideas", desc: "Customer interviews, MVPs, rapid iteration" },
            { title: "Build Skills", desc: "Learn sales, product, marketing - be versatile" },
            { title: "Fundraising", desc: "Pitch decks, VCs, angel investors, bootstrapping" },
            { title: "Build a Team", desc: "Hire well, create culture, delegate" },
            { title: "Scale or Exit", desc: "Grow the business or find the right outcome" }
        ]
    },

    // ============================================
    // MARKETING & COMMUNICATIONS
    // ============================================

    marketing_manager: {
        name: "Marketing Manager",
        emoji: "📢",
        category: "Marketing",
        description: "Brands, campaigns, and storytelling—you know how to capture attention and drive growth!",
        traits: ["creative", "strategic", "data-driven", "communicator"],
        salary: "$70k - $140k",
        growth: "10% (As fast as average)",
        roadmap: [
            { title: "Marketing Fundamentals", desc: "Branding, consumer behavior, market research" },
            { title: "Digital Marketing", desc: "SEO, SEM, social media, email marketing" },
            { title: "Analytics & Metrics", desc: "Google Analytics, attribution, ROI measurement" },
            { title: "Content Strategy", desc: "Storytelling, content creation, brand voice" },
            { title: "Campaign Management", desc: "Plan, execute, and optimize marketing campaigns" },
            { title: "Leadership & Budget", desc: "Manage teams and marketing budgets" }
        ]
    },

    content_strategist: {
        name: "Content Strategist",
        emoji: "✍️",
        category: "Marketing",
        description: "Words are your weapon! You plan and create content that engages and converts.",
        traits: ["creative", "strategic", "empathetic", "organized"],
        salary: "$60k - $110k",
        growth: "12% (Faster than average)",
        roadmap: [
            { title: "Writing Excellence", desc: "Copywriting, editing, brand voice" },
            { title: "SEO Knowledge", desc: "Keyword research, on-page optimization" },
            { title: "Content Planning", desc: "Editorial calendars, content audits" },
            { title: "Analytics", desc: "Content performance, engagement metrics" },
            { title: "Multi-Channel", desc: "Blog, social, video, podcast strategies" },
            { title: "Team Leadership", desc: "Manage writers, freelancers, production" }
        ]
    },

    social_media_manager: {
        name: "Social Media Manager",
        emoji: "📲",
        category: "Marketing",
        description: "You build brands on social platforms! Engagement, trends, and community are your focus.",
        traits: ["creative", "trendy", "responsive", "analytical"],
        salary: "$45k - $85k",
        growth: "10% (As fast as average)",
        roadmap: [
            { title: "Platform Mastery", desc: "Instagram, TikTok, LinkedIn, X, emerging platforms" },
            { title: "Content Creation", desc: "Graphics, video, copywriting, trends" },
            { title: "Community Management", desc: "Engagement, customer service, crisis handling" },
            { title: "Analytics & Reporting", desc: "Platform insights, growth metrics" },
            { title: "Paid Social", desc: "Advertising, targeting, budget optimization" },
            { title: "Strategy Development", desc: "Audience growth, brand building" }
        ]
    },

    seo_specialist: {
        name: "SEO Specialist",
        emoji: "🔎",
        category: "Marketing",
        description: "You make websites rank higher in Google! Technical and content optimization is your art.",
        traits: ["analytical", "technical", "patient", "detail-oriented"],
        salary: "$50k - $100k",
        growth: "15% (Faster than average)",
        roadmap: [
            { title: "SEO Fundamentals", desc: "On-page, off-page, technical SEO basics" },
            { title: "Keyword Research", desc: "Search intent, competition analysis" },
            { title: "Technical SEO", desc: "Site speed, crawlability, structured data" },
            { title: "Content Optimization", desc: "Content strategy, E-E-A-T, link building" },
            { title: "Analytics & Tools", desc: "Google Search Console, Ahrefs, SEMrush" },
            { title: "Stay Current", desc: "Algorithm updates, AI search, evolving landscape" }
        ]
    },

    public_relations_specialist: {
        name: "Public Relations Specialist",
        emoji: "🎤",
        category: "Marketing",
        description: "You shape public perception! Media relations, crisis management, and reputation are your domain.",
        traits: ["communicator", "strategic", "relationship-builder", "calm-under-pressure"],
        salary: "$50k - $100k",
        growth: "6% (As fast as average)",
        roadmap: [
            { title: "Communications Degree", desc: "PR, journalism, or communications background" },
            { title: "Writing Skills", desc: "Press releases, pitches, speeches" },
            { title: "Media Relations", desc: "Build relationships with journalists" },
            { title: "Crisis Management", desc: "Prepare for and handle PR crises" },
            { title: "Social & Digital PR", desc: "Online reputation, influencer relations" },
            { title: "Measurement", desc: "PR metrics, media monitoring, reporting" }
        ]
    },

    // ============================================
    // HEALTHCARE & MEDICINE
    // ============================================

    doctor: {
        name: "Doctor / Physician",
        emoji: "🩺",
        category: "Healthcare",
        description: "Healing bodies and minds, you're drawn to making a direct impact on people's health.",
        traits: ["compassionate", "analytical", "dedicated", "detail-oriented"],
        salary: "$200k - $400k+",
        growth: "3% (As fast as average)",
        roadmap: [
            { title: "Pre-Med Foundation", desc: "Biology, Chemistry, Physics, MCAT preparation" },
            { title: "Medical School", desc: "4 years of rigorous medical education (MD/DO)" },
            { title: "Residency Training", desc: "3-7 years of specialized hands-on training" },
            { title: "Board Certification", desc: "Pass medical board exams" },
            { title: "Fellowship (Optional)", desc: "Sub-specialization training" },
            { title: "Continuous Learning", desc: "CME, research, staying current" }
        ]
    },

    nurse: {
        name: "Registered Nurse",
        emoji: "💉",
        category: "Healthcare",
        description: "The heart of healthcare! You provide direct patient care with compassion and skill.",
        traits: ["compassionate", "resilient", "detail-oriented", "team-player"],
        salary: "$60k - $120k",
        growth: "6% (As fast as average)",
        roadmap: [
            { title: "Nursing Degree", desc: "ADN or BSN from accredited program" },
            { title: "NCLEX Exam", desc: "Pass the national licensing exam" },
            { title: "Clinical Experience", desc: "Start in hospital, clinic, or specialty" },
            { title: "Specialization", desc: "ICU, ER, pediatrics, oncology, etc." },
            { title: "Advanced Practice", desc: "Consider NP, CRNA, or CNS roles" },
            { title: "Leadership", desc: "Charge nurse, management, education" }
        ]
    },

    pharmacist: {
        name: "Pharmacist",
        emoji: "💊",
        category: "Healthcare",
        description: "Medication expert! You ensure safe and effective drug therapy for patients.",
        traits: ["detail-oriented", "analytical", "patient", "communicator"],
        salary: "$120k - $150k",
        growth: "-2% (Declining)",
        roadmap: [
            { title: "Pre-Pharmacy", desc: "Biology, Chemistry, prerequisites" },
            { title: "Pharmacy School", desc: "4-year Doctor of Pharmacy (PharmD) program" },
            { title: "Clinical Rotations", desc: "Hospital, retail, specialty pharmacy" },
            { title: "Licensing", desc: "NAPLEX and state exams" },
            { title: "Specialization", desc: "Clinical pharmacy, oncology, compounding" },
            { title: "Career Path", desc: "Retail, hospital, industry, or research" }
        ]
    },

    physical_therapist: {
        name: "Physical Therapist",
        emoji: "🏃",
        category: "Healthcare",
        description: "You help people move better and live without pain! Rehabilitation is your specialty.",
        traits: ["patient", "motivating", "analytical", "hands-on"],
        salary: "$80k - $110k",
        growth: "15% (Much faster than average)",
        roadmap: [
            { title: "Pre-PT Requirements", desc: "Anatomy, physiology, kinesiology" },
            { title: "Doctor of Physical Therapy", desc: "3-year DPT program" },
            { title: "Clinical Rotations", desc: "Various settings and populations" },
            { title: "National Exam", desc: "Pass the NPTE licensing exam" },
            { title: "Specialization", desc: "Orthopedics, neuro, sports, pediatrics" },
            { title: "Residency/Fellowship", desc: "Advanced specialty training" }
        ]
    },

    psychologist: {
        name: "Psychologist",
        emoji: "🧠",
        category: "Healthcare",
        description: "You understand the human mind! Therapy, research, or assessments are your tools.",
        traits: ["empathetic", "analytical", "patient", "curious"],
        salary: "$80k - $140k",
        growth: "6% (As fast as average)",
        roadmap: [
            { title: "Psychology Degree", desc: "Bachelor's in psychology or related field" },
            { title: "Graduate School", desc: "Master's or Doctoral program (PhD/PsyD)" },
            { title: "Supervised Practice", desc: "Internship and post-doctoral hours" },
            { title: "Licensing", desc: "State licensure exam" },
            { title: "Specialization", desc: "Clinical, counseling, neuropsych, etc." },
            { title: "Practice Building", desc: "Private practice, clinic, or research" }
        ]
    },

    dentist: {
        name: "Dentist",
        emoji: "🦷",
        category: "Healthcare",
        description: "Keeping smiles healthy! You prevent and treat oral health issues.",
        traits: ["detail-oriented", "steady-handed", "patient", "business-minded"],
        salary: "$150k - $200k+",
        growth: "4% (As fast as average)",
        roadmap: [
            { title: "Pre-Dental", desc: "Biology, Chemistry, DAT preparation" },
            { title: "Dental School", desc: "4-year Doctor of Dental Surgery/Medicine" },
            { title: "Clinical Training", desc: "Hands-on patient care in school" },
            { title: "Licensing", desc: "National and state board exams" },
            { title: "Specialization", desc: "Orthodontics, oral surgery, pediatrics" },
            { title: "Practice Ownership", desc: "Many dentists own their practice" }
        ]
    },

    // ============================================
    // EDUCATION & TRAINING
    // ============================================

    teacher: {
        name: "Teacher (K-12)",
        emoji: "📚",
        category: "Education",
        description: "Shaping minds and inspiring the next generation—education is your superpower!",
        traits: ["patient", "creative", "compassionate", "resilient"],
        salary: "$45k - $80k",
        growth: "1% (Slower than average)",
        roadmap: [
            { title: "Bachelor's Degree", desc: "Education or subject area degree" },
            { title: "Teacher Certification", desc: "State teaching license, Praxis exams" },
            { title: "Student Teaching", desc: "Supervised classroom experience" },
            { title: "First Position", desc: "Start teaching, learn classroom management" },
            { title: "Professional Development", desc: "Workshops, advanced degrees" },
            { title: "Specialization", desc: "Special ed, ESL, gifted, administration" }
        ]
    },

    professor: {
        name: "University Professor",
        emoji: "🎓",
        category: "Education",
        description: "You teach at the highest level and advance human knowledge through research!",
        traits: ["intellectual", "curious", "patient", "dedicated"],
        salary: "$60k - $150k+",
        growth: "8% (As fast as average)",
        roadmap: [
            { title: "Bachelor's Degree", desc: "Strong foundation in your field" },
            { title: "Graduate School", desc: "Master's and PhD in your discipline" },
            { title: "Dissertation", desc: "Original research contribution" },
            { title: "Post-Doctoral Work", desc: "Research position before faculty job" },
            { title: "Tenure Track", desc: "Assistant Professor, publishing, grants" },
            { title: "Tenure & Beyond", desc: "Associate, Full Professor, leadership" }
        ]
    },

    corporate_trainer: {
        name: "Corporate Trainer",
        emoji: "🎯",
        category: "Education",
        description: "You develop employee skills! Training programs and workshops are your specialty.",
        traits: ["engaging", "organized", "patient", "adaptable"],
        salary: "$55k - $100k",
        growth: "11% (Faster than average)",
        roadmap: [
            { title: "Education Background", desc: "Training, education, or HR degree" },
            { title: "Subject Matter Expertise", desc: "Deep knowledge in training area" },
            { title: "Instructional Design", desc: "ADDIE model, learning objectives" },
            { title: "Facilitation Skills", desc: "Engaging presentations, workshops" },
            { title: "Technology", desc: "LMS, e-learning tools, virtual training" },
            { title: "Measurement", desc: "Training effectiveness, ROI" }
        ]
    },

    // ============================================
    // FINANCE & ACCOUNTING
    // ============================================

    financial_analyst: {
        name: "Financial Analyst",
        emoji: "💹",
        category: "Finance",
        description: "Money talks, and you know how to listen! You analyze markets and guide decisions.",
        traits: ["analytical", "detail-oriented", "strategic", "numbers-focused"],
        salary: "$65k - $130k",
        growth: "9% (As fast as average)",
        roadmap: [
            { title: "Finance/Economics Degree", desc: "Strong foundation in financial concepts" },
            { title: "Excel & Financial Modeling", desc: "DCF, LBO, comparable analysis" },
            { title: "Accounting Knowledge", desc: "Financial statements, ratios" },
            { title: "CFA Certification", desc: "Gold standard for investment analysts" },
            { title: "Industry Specialization", desc: "Investment banking, equity research, corporate" },
            { title: "Career Progression", desc: "Senior analyst, portfolio manager, director" }
        ]
    },

    accountant: {
        name: "Accountant / CPA",
        emoji: "🧾",
        category: "Finance",
        description: "Numbers are your language! You keep financial records accurate and organizations compliant.",
        traits: ["detail-oriented", "organized", "ethical", "analytical"],
        salary: "$55k - $100k",
        growth: "4% (As fast as average)",
        roadmap: [
            { title: "Accounting Degree", desc: "Bachelor's in accounting (150 credits for CPA)" },
            { title: "CPA Exam", desc: "4 sections, rigorous preparation" },
            { title: "Work Experience", desc: "Public accounting or corporate" },
            { title: "Specialization", desc: "Tax, audit, forensic, management" },
            { title: "Advanced Certifications", desc: "CMA, CIA, CFE" },
            { title: "Career Path", desc: "Manager, controller, CFO" }
        ]
    },

    investment_banker: {
        name: "Investment Banker",
        emoji: "🏦",
        category: "Finance",
        description: "High stakes deals! You advise on M&A, IPOs, and raise capital for major companies.",
        traits: ["driven", "analytical", "resilient", "networker"],
        salary: "$150k - $500k+",
        growth: "7% (As fast as average)",
        roadmap: [
            { title: "Top University", desc: "Target school, high GPA, relevant major" },
            { title: "Internships", desc: "Summer analyst positions are crucial" },
            { title: "Technical Skills", desc: "Financial modeling, valuations, Excel" },
            { title: "Full-Time Analyst", desc: "2-3 years of intense work, learning" },
            { title: "MBA (Optional)", desc: "For career switchers or acceleration" },
            { title: "Associate & Beyond", desc: "VP, Director, Managing Director" }
        ]
    },

    financial_planner: {
        name: "Financial Planner / Advisor",
        emoji: "📊",
        category: "Finance",
        description: "You help people achieve financial goals! Retirement, investments, and estate planning.",
        traits: ["empathetic", "trustworthy", "analytical", "communicator"],
        salary: "$60k - $150k+",
        growth: "15% (Much faster than average)",
        roadmap: [
            { title: "Finance/Business Degree", desc: "Foundation in financial concepts" },
            { title: "CFP Certification", desc: "Gold standard for financial planners" },
            { title: "Licensing", desc: "Series 7, 66, insurance licenses" },
            { title: "Client Acquisition", desc: "Build your book of business" },
            { title: "Specialization", desc: "Retirement, tax, estate, investments" },
            { title: "Practice Growth", desc: "Team building, assets under management" }
        ]
    },

    // ============================================
    // LAW & POLICY
    // ============================================

    lawyer: {
        name: "Lawyer / Attorney",
        emoji: "⚖️",
        category: "Law",
        description: "Justice is your calling! You navigate complex laws to advocate for clients.",
        traits: ["analytical", "persuasive", "ethical", "detail-oriented"],
        salary: "$80k - $200k+",
        growth: "8% (As fast as average)",
        roadmap: [
            { title: "Pre-Law Education", desc: "Any major with strong writing/critical thinking" },
            { title: "LSAT Preparation", desc: "Score well on the law school entrance exam" },
            { title: "Law School", desc: "3-year Juris Doctor program" },
            { title: "Bar Exam", desc: "Pass your state's bar examination" },
            { title: "Practice Area", desc: "Corporate, litigation, IP, family, criminal" },
            { title: "Career Building", desc: "Associate, partner, in-house, or public interest" }
        ]
    },

    paralegal: {
        name: "Paralegal",
        emoji: "📑",
        category: "Law",
        description: "Legal support professional! You assist attorneys with research, drafting, and case prep.",
        traits: ["organized", "detail-oriented", "analytical", "efficient"],
        salary: "$45k - $75k",
        growth: "4% (As fast as average)",
        roadmap: [
            { title: "Paralegal Certificate/Degree", desc: "ABA-approved program preferred" },
            { title: "Legal Research Skills", desc: "Westlaw, LexisNexis, case research" },
            { title: "Legal Writing", desc: "Document drafting, briefs, correspondence" },
            { title: "Specialization", desc: "Litigation, corporate, IP, immigration" },
            { title: "Technology Skills", desc: "E-discovery, legal software proficiency" },
            { title: "Experience Building", desc: "Senior paralegal, management roles" }
        ]
    },

    policy_analyst: {
        name: "Policy Analyst",
        emoji: "🏛️",
        category: "Law",
        description: "You shape public policy through research and analysis! Government and think tanks await.",
        traits: ["analytical", "research-oriented", "communicator", "civic-minded"],
        salary: "$55k - $100k",
        growth: "10% (As fast as average)",
        roadmap: [
            { title: "Relevant Degree", desc: "Political science, public policy, economics" },
            { title: "Graduate Education", desc: "MPP, MPA, or related master's" },
            { title: "Research Methods", desc: "Quantitative and qualitative analysis" },
            { title: "Policy Writing", desc: "Briefs, memos, reports for decision-makers" },
            { title: "Network Building", desc: "Government, think tanks, advocacy orgs" },
            { title: "Specialization", desc: "Healthcare, education, environment, tech policy" }
        ]
    },

    // ============================================
    // CREATIVE & ARTS
    // ============================================

    graphic_designer: {
        name: "Graphic Designer",
        emoji: "🖌️",
        category: "Creative",
        description: "Visual communication is your art! Logos, branding, and beautiful designs are your output.",
        traits: ["creative", "visual", "detail-oriented", "adaptable"],
        salary: "$45k - $85k",
        growth: "3% (As fast as average)",
        roadmap: [
            { title: "Design Fundamentals", desc: "Color, typography, composition, principles" },
            { title: "Tool Mastery", desc: "Adobe Creative Suite - Photoshop, Illustrator, InDesign" },
            { title: "Portfolio Building", desc: "Create diverse, polished work samples" },
            { title: "Specialization", desc: "Branding, print, digital, motion graphics" },
            { title: "Client Work", desc: "Freelance or agency experience" },
            { title: "Art Direction", desc: "Lead creative projects and teams" }
        ]
    },

    video_producer: {
        name: "Video Producer / Editor",
        emoji: "🎬",
        category: "Creative",
        description: "Stories through motion! You create compelling video content from concept to final cut.",
        traits: ["creative", "storyteller", "technical", "collaborative"],
        salary: "$50k - $100k",
        growth: "16% (Much faster than average)",
        roadmap: [
            { title: "Video Production Basics", desc: "Shooting, lighting, audio" },
            { title: "Editing Software", desc: "Premiere Pro, DaVinci Resolve, Final Cut" },
            { title: "Storytelling", desc: "Narrative structure, pacing, emotion" },
            { title: "Motion Graphics", desc: "After Effects, animation basics" },
            { title: "Portfolio/Reel", desc: "Showcase your best work" },
            { title: "Specialization", desc: "Corporate, documentary, commercial, social" }
        ]
    },

    photographer: {
        name: "Photographer",
        emoji: "📷",
        category: "Creative",
        description: "You capture moments and tell stories through images! Art meets technical skill.",
        traits: ["creative", "patient", "detail-oriented", "entrepreneurial"],
        salary: "$40k - $80k",
        growth: "4% (As fast as average)",
        roadmap: [
            { title: "Camera Mastery", desc: "Exposure, composition, lighting" },
            { title: "Post-Processing", desc: "Lightroom, Photoshop, color grading" },
            { title: "Niche Selection", desc: "Weddings, portraits, commercial, editorial" },
            { title: "Portfolio Building", desc: "Curated collection of your best work" },
            { title: "Business Skills", desc: "Marketing, client management, pricing" },
            { title: "Brand Development", desc: "Build your reputation and client base" }
        ]
    },

    writer_author: {
        name: "Writer / Author",
        emoji: "📝",
        category: "Creative",
        description: "Words are your medium! You create content, stories, or knowledge for readers.",
        traits: ["creative", "patient", "curious", "self-motivated"],
        salary: "$40k - $100k",
        growth: "4% (As fast as average)",
        roadmap: [
            { title: "Writing Practice", desc: "Write daily, develop your voice" },
            { title: "Genre/Niche Focus", desc: "Fiction, nonfiction, tech writing, journalism" },
            { title: "Editing Skills", desc: "Self-editing, working with editors" },
            { title: "Publishing Path", desc: "Traditional, self-publishing, or freelance" },
            { title: "Platform Building", desc: "Blog, social media, newsletter" },
            { title: "Monetization", desc: "Books, articles, content writing, ghostwriting" }
        ]
    },

    // ============================================
    // HUMAN RESOURCES & PEOPLE
    // ============================================

    hr_manager: {
        name: "HR Manager",
        emoji: "👥",
        category: "Human Resources",
        description: "The people champion! You build great teams and nurture workplace culture.",
        traits: ["empathetic", "communicator", "organized", "fair"],
        salary: "$70k - $130k",
        growth: "5% (As fast as average)",
        roadmap: [
            { title: "HR Foundation", desc: "Business or HR degree" },
            { title: "HR Generalist Role", desc: "Learn all HR functions hands-on" },
            { title: "Employment Law", desc: "Compliance, policies, legal requirements" },
            { title: "Certification", desc: "SHRM-CP, PHR credentials" },
            { title: "Specialization", desc: "Talent acquisition, L&D, compensation, HRBP" },
            { title: "Leadership", desc: "HR director, VP of People, CHRO" }
        ]
    },

    recruiter: {
        name: "Recruiter / Talent Acquisition",
        emoji: "🎯",
        category: "Human Resources",
        description: "You find the right people for the right roles! Matching talent with opportunity.",
        traits: ["networker", "persuasive", "organized", "persistent"],
        salary: "$50k - $100k+",
        growth: "8% (As fast as average)",
        roadmap: [
            { title: "Recruiting Basics", desc: "Sourcing, screening, interviewing" },
            { title: "Industry Knowledge", desc: "Understand the roles you're filling" },
            { title: "Tools & Technology", desc: "ATS, LinkedIn Recruiter, sourcing tools" },
            { title: "Relationship Building", desc: "Candidates, hiring managers, vendors" },
            { title: "Metrics & Analytics", desc: "Time-to-hire, quality of hire, funnel metrics" },
            { title: "Specialization", desc: "Tech, executive, agency, or in-house" }
        ]
    },

    // ============================================
    // SCIENCE & RESEARCH
    // ============================================

    research_scientist: {
        name: "Research Scientist",
        emoji: "🔬",
        category: "Science",
        description: "You push the boundaries of human knowledge! Labs, experiments, and discovery await.",
        traits: ["curious", "analytical", "patient", "detail-oriented"],
        salary: "$70k - $150k",
        growth: "8% (As fast as average)",
        roadmap: [
            { title: "Bachelor's in Science", desc: "Biology, Chemistry, Physics, etc." },
            { title: "Graduate School", desc: "PhD for independent research positions" },
            { title: "Research Experience", desc: "Lab work, publications, conferences" },
            { title: "Post-Doctoral Training", desc: "Specialized research before faculty/industry" },
            { title: "Grant Writing", desc: "Funding your research programs" },
            { title: "Career Path", desc: "Academia, industry R&D, government labs" }
        ]
    },

    environmental_scientist: {
        name: "Environmental Scientist",
        emoji: "🌍",
        category: "Science",
        description: "You protect our planet! Research, policy, and conservation are your tools.",
        traits: ["passionate", "analytical", "outdoorsy", "systems-thinker"],
        salary: "$60k - $100k",
        growth: "6% (As fast as average)",
        roadmap: [
            { title: "Environmental Science Degree", desc: "Ecology, environmental studies, or related" },
            { title: "Field Experience", desc: "Data collection, fieldwork, GIS" },
            { title: "Specialization", desc: "Climate, conservation, pollution, sustainability" },
            { title: "Technical Skills", desc: "Data analysis, modeling, regulatory knowledge" },
            { title: "Graduate Degree", desc: "Often required for advancement" },
            { title: "Career Options", desc: "Consulting, government, nonprofits, corporate" }
        ]
    },

    // ============================================
    // ENGINEERING
    // ============================================

    mechanical_engineer: {
        name: "Mechanical Engineer",
        emoji: "⚙️",
        category: "Engineering",
        description: "You design and build mechanical systems! From cars to robots to HVAC.",
        traits: ["analytical", "practical", "creative", "detail-oriented"],
        salary: "$70k - $120k",
        growth: "2% (Slower than average)",
        roadmap: [
            { title: "Engineering Degree", desc: "ABET-accredited mechanical engineering" },
            { title: "CAD Proficiency", desc: "SolidWorks, AutoCAD, CATIA" },
            { title: "Fundamentals of Engineering", desc: "FE exam for EIT certification" },
            { title: "Industry Experience", desc: "Manufacturing, automotive, aerospace, etc." },
            { title: "PE License", desc: "Professional Engineer for career advancement" },
            { title: "Specialization", desc: "Design, thermal, fluids, robotics" }
        ]
    },

    electrical_engineer: {
        name: "Electrical Engineer",
        emoji: "⚡",
        category: "Engineering",
        description: "Power, electronics, and circuits! You design electrical systems and devices.",
        traits: ["analytical", "technical", "problem-solver", "detail-oriented"],
        salary: "$75k - $130k",
        growth: "3% (As fast as average)",
        roadmap: [
            { title: "EE Degree", desc: "ABET-accredited electrical engineering" },
            { title: "Core Competencies", desc: "Circuits, signals, power systems" },
            { title: "Lab Skills", desc: "Testing, prototyping, instrumentation" },
            { title: "Industry Focus", desc: "Power, electronics, telecom, semiconductors" },
            { title: "Certifications", desc: "FE/PE for certain roles" },
            { title: "Career Growth", desc: "Senior engineer, tech lead, management" }
        ]
    },

    civil_engineer: {
        name: "Civil Engineer",
        emoji: "🌉",
        category: "Engineering",
        description: "You build infrastructure! Bridges, roads, buildings, and water systems.",
        traits: ["practical", "safety-conscious", "detail-oriented", "collaborative"],
        salary: "$70k - $110k",
        growth: "5% (As fast as average)",
        roadmap: [
            { title: "Civil Engineering Degree", desc: "ABET-accredited program" },
            { title: "Technical Skills", desc: "AutoCAD, Civil 3D, structural analysis" },
            { title: "FE Exam", desc: "Fundamentals of Engineering certification" },
            { title: "Field Experience", desc: "Construction sites, project management" },
            { title: "PE License", desc: "Required for signing off on projects" },
            { title: "Specialization", desc: "Structural, transportation, environmental, geotech" }
        ]
    },

    aerospace_engineer: {
        name: "Aerospace Engineer",
        emoji: "🚀",
        category: "Engineering",
        description: "You design aircraft and spacecraft! The sky is literally not the limit.",
        traits: ["innovative", "analytical", "precise", "visionary"],
        salary: "$85k - $150k",
        growth: "6% (As fast as average)",
        roadmap: [
            { title: "Aerospace Engineering Degree", desc: "Focus on aeronautics or astronautics" },
            { title: "Fundamentals", desc: "Aerodynamics, propulsion, structures, controls" },
            { title: "Simulation Tools", desc: "MATLAB, CFD, FEA software" },
            { title: "Industry Entry", desc: "Defense, commercial aviation, space companies" },
            { title: "Security Clearance", desc: "Often required in aerospace" },
            { title: "Specialization", desc: "Aircraft, satellites, rockets, UAVs" }
        ]
    },

    // ============================================
    // TRADES & SKILLED LABOR
    // ============================================

    electrician: {
        name: "Electrician",
        emoji: "🔌",
        category: "Trades",
        description: "You power the world! Installing and maintaining electrical systems.",
        traits: ["practical", "detail-oriented", "safety-conscious", "problem-solver"],
        salary: "$50k - $90k",
        growth: "6% (As fast as average)",
        roadmap: [
            { title: "Trade School/Apprenticeship", desc: "4-5 year electrical apprenticeship" },
            { title: "Journeyman License", desc: "Pass exam after apprenticeship" },
            { title: "On-the-Job Learning", desc: "Residential, commercial, or industrial" },
            { title: "Master Electrician", desc: "Advanced license with experience" },
            { title: "Specialization", desc: "Solar, automation, high voltage" },
            { title: "Business Ownership", desc: "Start your own electrical company" }
        ]
    },

    plumber: {
        name: "Plumber",
        emoji: "🔧",
        category: "Trades",
        description: "Essential infrastructure expert! Water, gas, and drainage systems.",
        traits: ["practical", "problem-solver", "physical", "detail-oriented"],
        salary: "$50k - $90k",
        growth: "2% (Slower than average)",
        roadmap: [
            { title: "Apprenticeship", desc: "4-5 years learning the trade" },
            { title: "Licensing", desc: "Journeyman plumber certification" },
            { title: "Code Knowledge", desc: "Local and national plumbing codes" },
            { title: "Specialization", desc: "Residential, commercial, industrial" },
            { title: "Master Plumber", desc: "Advanced certification and experience" },
            { title: "Entrepreneurship", desc: "Start your own plumbing business" }
        ]
    },

    chef: {
        name: "Chef / Culinary Professional",
        emoji: "👨‍🍳",
        category: "Trades",
        description: "Food is your art and science! Creating culinary experiences for others.",
        traits: ["creative", "passionate", "resilient", "leader"],
        salary: "$40k - $90k+",
        growth: "5% (As fast as average)",
        roadmap: [
            { title: "Culinary Foundation", desc: "Culinary school or kitchen apprenticeship" },
            { title: "Line Cook Experience", desc: "Learn stations, speed, precision" },
            { title: "Technique Mastery", desc: "Expand your culinary repertoire" },
            { title: "Sous Chef", desc: "Kitchen management, menu planning" },
            { title: "Executive Chef", desc: "Lead the kitchen, create menus" },
            { title: "Restaurant Ownership", desc: "Open your own establishment" }
        ]
    },

    // ============================================
    // SOCIAL SERVICES
    // ============================================

    social_worker: {
        name: "Social Worker",
        emoji: "❤️",
        category: "Social Services",
        description: "You help individuals and communities overcome challenges and thrive!",
        traits: ["empathetic", "patient", "advocate", "resilient"],
        salary: "$45k - $80k",
        growth: "7% (As fast as average)",
        roadmap: [
            { title: "Bachelor's in Social Work", desc: "BSW from accredited program" },
            { title: "Master's Degree", desc: "MSW for clinical or advanced roles" },
            { title: "Field Experience", desc: "Supervised practicum hours" },
            { title: "Licensure", desc: "LCSW or state equivalent" },
            { title: "Specialization", desc: "Child welfare, mental health, medical, school" },
            { title: "Clinical Practice", desc: "Private practice or agency leadership" }
        ]
    },

    counselor: {
        name: "Counselor / Therapist",
        emoji: "💬",
        category: "Social Services",
        description: "You guide people through life's challenges with therapeutic techniques.",
        traits: ["empathetic", "patient", "listener", "intuitive"],
        salary: "$45k - $85k",
        growth: "18% (Much faster than average)",
        roadmap: [
            { title: "Psychology/Counseling Degree", desc: "Bachelor's as foundation" },
            { title: "Master's in Counseling", desc: "Required for licensure" },
            { title: "Supervised Hours", desc: "2,000-4,000 clinical hours typical" },
            { title: "Licensure", desc: "LPC, LMFT, or state equivalent" },
            { title: "Modality Training", desc: "CBT, DBT, EMDR, family therapy" },
            { title: "Practice Development", desc: "Agency, clinic, or private practice" }
        ]
    },

    // ============================================
    // ADDITIONAL CAREERS - EXPANDED DATABASE
    // ============================================

    architect: {
        name: "Architect",
        emoji: "🏛️",
        category: "Design & Engineering",
        description: "You design buildings that shape how people live and work. Art meets engineering!",
        traits: ["creative", "technical", "visionary", "detail-oriented"],
        salary: "$70k - $140k",
        growth: "5% (As fast as average)",
        roadmap: [
            { title: "Architecture Degree", desc: "5-year B.Arch or M.Arch program" },
            { title: "Intern Development Program", desc: "3+ years of supervised experience" },
            { title: "ARE Exams", desc: "Architect Registration Examination" },
            { title: "Licensure", desc: "State architect license" },
            { title: "Specialization", desc: "Residential, commercial, sustainable design" },
            { title: "Principal/Partner", desc: "Lead projects or start your firm" }
        ]
    },

    veterinarian: {
        name: "Veterinarian",
        emoji: "🐕",
        category: "Healthcare",
        description: "You heal animals and support pet owners. Medicine meets animal love!",
        traits: ["compassionate", "analytical", "patient", "hands-on"],
        salary: "$95k - $150k",
        growth: "19% (Much faster than average)",
        roadmap: [
            { title: "Pre-Vet Education", desc: "Biology, chemistry, animal experience" },
            { title: "Veterinary School", desc: "4-year Doctor of Veterinary Medicine" },
            { title: "Clinical Rotations", desc: "Various animal types and specialties" },
            { title: "NAVLE Exam", desc: "National licensing exam" },
            { title: "Practice Experience", desc: "Small animal, large animal, or exotic" },
            { title: "Specialization", desc: "Surgery, oncology, emergency, or practice ownership" }
        ]
    },

    pilot: {
        name: "Commercial Pilot",
        emoji: "✈️",
        category: "Transportation",
        description: "You fly aircraft and transport passengers safely around the world!",
        traits: ["calm", "precise", "disciplined", "quick-thinking"],
        salary: "$80k - $200k+",
        growth: "6% (As fast as average)",
        roadmap: [
            { title: "Private Pilot License", desc: "Learn to fly, 40+ hours" },
            { title: "Instrument Rating", desc: "Fly in all weather conditions" },
            { title: "Commercial License", desc: "250+ hours, advanced training" },
            { title: "Flight Hours", desc: "Build 1,500+ hours for ATP" },
            { title: "Airline Transport Pilot", desc: "ATP certificate for airline jobs" },
            { title: "Captain Upgrade", desc: "First Officer to Captain progression" }
        ]
    },

    journalist: {
        name: "Journalist / Reporter",
        emoji: "📰",
        category: "Media",
        description: "You uncover stories and inform the public. Truth-seeking is your mission!",
        traits: ["curious", "persistent", "ethical", "communicator"],
        salary: "$40k - $80k",
        growth: "-9% (Declining)",
        roadmap: [
            { title: "Journalism Degree", desc: "Or strong writing portfolio" },
            { title: "Internships", desc: "Newsrooms, publications, media outlets" },
            { title: "Beat Coverage", desc: "Specialize in topic area" },
            { title: "Portfolio Building", desc: "Published clips and investigations" },
            { title: "Digital Skills", desc: "Multimedia, social media, data journalism" },
            { title: "Senior Roles", desc: "Editor, correspondent, investigative reporter" }
        ]
    },

    real_estate_agent: {
        name: "Real Estate Agent",
        emoji: "🏠",
        category: "Sales",
        description: "You help people buy and sell properties. Relationships and deals are your specialty!",
        traits: ["persuasive", "networker", "self-motivated", "persistent"],
        salary: "$30k - $150k+ (Commission)",
        growth: "5% (As fast as average)",
        roadmap: [
            { title: "Pre-Licensing Course", desc: "State-required education hours" },
            { title: "Real Estate Exam", desc: "Pass state licensing exam" },
            { title: "Join a Brokerage", desc: "Work under experienced broker" },
            { title: "Build Network", desc: "Marketing, leads, referrals" },
            { title: "Broker License", desc: "Advanced certification" },
            { title: "Team or Brokerage", desc: "Lead agents or open own brokerage" }
        ]
    },

    actuary: {
        name: "Actuary",
        emoji: "📐",
        category: "Finance",
        description: "You use math to assess risk. Insurance and pensions rely on your analysis!",
        traits: ["mathematical", "analytical", "precise", "problem-solver"],
        salary: "$100k - $200k",
        growth: "21% (Much faster than average)",
        roadmap: [
            { title: "Math/Stats Degree", desc: "Strong quantitative foundation" },
            { title: "Actuarial Exams", desc: "Pass preliminary exams (P, FM)" },
            { title: "Entry-Level Position", desc: "Actuarial analyst role" },
            { title: "More Exams", desc: "Continue exam progression (5-10 exams)" },
            { title: "Associateship", desc: "ASA designation" },
            { title: "Fellowship", desc: "FSA - fully credentialed actuary" }
        ]
    },

    interior_designer: {
        name: "Interior Designer",
        emoji: "🛋️",
        category: "Design",
        description: "You create beautiful, functional interior spaces. Style meets practicality!",
        traits: ["creative", "visual", "client-focused", "detail-oriented"],
        salary: "$45k - $90k",
        growth: "4% (As fast as average)",
        roadmap: [
            { title: "Interior Design Degree", desc: "Bachelor's from CIDA-accredited program" },
            { title: "Software Skills", desc: "AutoCAD, SketchUp, 3D rendering" },
            { title: "Experience", desc: "Work at design firm" },
            { title: "NCIDQ Exam", desc: "For professional certification" },
            { title: "Portfolio Development", desc: "Showcase your best projects" },
            { title: "Specialization", desc: "Residential, commercial, hospitality" }
        ]
    },

    sports_coach: {
        name: "Sports Coach / Athletic Trainer",
        emoji: "🏆",
        category: "Sports",
        description: "You develop athletes and teams to reach peak performance!",
        traits: ["motivating", "strategic", "patient", "athletic"],
        salary: "$35k - $100k+",
        growth: "11% (Faster than average)",
        roadmap: [
            { title: "Sports Background", desc: "Playing experience in your sport" },
            { title: "Coaching Education", desc: "Degree or certification programs" },
            { title: "Certifications", desc: "Sport-specific coaching credentials" },
            { title: "Entry-Level Coaching", desc: "Assistant coach, youth sports" },
            { title: "Head Coach", desc: "Lead programs, develop strategy" },
            { title: "Professional Level", desc: "College or professional sports" }
        ]
    },

    pharmacologist: {
        name: "Pharmacologist / Drug Researcher",
        emoji: "🧪",
        category: "Science",
        description: "You research how drugs work and develop new medications!",
        traits: ["scientific", "meticulous", "curious", "patient"],
        salary: "$90k - $150k",
        growth: "10% (As fast as average)",
        roadmap: [
            { title: "Science Degree", desc: "Pharmacology, biology, chemistry" },
            { title: "Graduate School", desc: "PhD in pharmacology or related" },
            { title: "Research Experience", desc: "Lab work, publications" },
            { title: "Post-Doc", desc: "Advanced research training" },
            { title: "Industry or Academia", desc: "Pharma company or university" },
            { title: "Principal Investigator", desc: "Lead your own research program" }
        ]
    },

    radiologist: {
        name: "Radiologist",
        emoji: "🩻",
        category: "Healthcare",
        description: "You interpret medical images to diagnose diseases!",
        traits: ["analytical", "detail-oriented", "technical", "decisive"],
        salary: "$350k - $500k+",
        growth: "7% (As fast as average)",
        roadmap: [
            { title: "Pre-Med & Medical School", desc: "8 years of medical education" },
            { title: "Radiology Residency", desc: "5-year specialized training" },
            { title: "Board Certification", desc: "ABR certification" },
            { title: "Fellowship", desc: "Sub-specialty (interventional, neuro, etc.)" },
            { title: "Practice", desc: "Hospital, private practice, or teleradiology" },
            { title: "AI Integration", desc: "Stay current with imaging technology" }
        ]
    },

    urban_planner: {
        name: "Urban Planner",
        emoji: "🌆",
        category: "Public Service",
        description: "You design communities and cities for better living!",
        traits: ["visionary", "analytical", "community-minded", "collaborative"],
        salary: "$55k - $100k",
        growth: "7% (As fast as average)",
        roadmap: [
            { title: "Urban Planning Degree", desc: "Bachelor's or Master's in planning" },
            { title: "Internship", desc: "Local government or planning firm" },
            { title: "AICP Certification", desc: "Professional planner certification" },
            { title: "GIS Skills", desc: "Geographic information systems" },
            { title: "Specialization", desc: "Transportation, housing, environmental" },
            { title: "Senior Planner", desc: "Lead major planning initiatives" }
        ]
    },

    occupational_therapist: {
        name: "Occupational Therapist",
        emoji: "🤲",
        category: "Healthcare",
        description: "You help people perform daily activities after injury or disability!",
        traits: ["patient", "creative", "empathetic", "problem-solver"],
        salary: "$75k - $100k",
        growth: "14% (Much faster than average)",
        roadmap: [
            { title: "Bachelor's Degree", desc: "Prerequisites for OT program" },
            { title: "OT Program", desc: "Master's or Doctorate in OT" },
            { title: "Fieldwork", desc: "Clinical rotations and experience" },
            { title: "NBCOT Exam", desc: "National certification exam" },
            { title: "State License", desc: "Practice in your state" },
            { title: "Specialization", desc: "Pediatrics, hand therapy, mental health" }
        ]
    },

    speech_pathologist: {
        name: "Speech-Language Pathologist",
        emoji: "🗣️",
        category: "Healthcare",
        description: "You help people with speech, language, and swallowing disorders!",
        traits: ["patient", "analytical", "empathetic", "creative"],
        salary: "$70k - $100k",
        growth: "19% (Much faster than average)",
        roadmap: [
            { title: "Bachelor's Degree", desc: "Communication sciences or related" },
            { title: "Master's in SLP", desc: "Required for licensure" },
            { title: "Clinical Fellowship", desc: "Supervised professional experience" },
            { title: "ASHA Certification", desc: "CCC-SLP certification" },
            { title: "State License", desc: "Practice credentials" },
            { title: "Setting Choice", desc: "Schools, hospitals, private practice" }
        ]
    },

    economist: {
        name: "Economist",
        emoji: "📉",
        category: "Research",
        description: "You analyze economic data and forecast trends!",
        traits: ["analytical", "mathematical", "research-oriented", "communicator"],
        salary: "$80k - $150k",
        growth: "6% (As fast as average)",
        roadmap: [
            { title: "Economics Degree", desc: "Bachelor's with strong math" },
            { title: "Graduate School", desc: "Master's or PhD for advanced roles" },
            { title: "Econometrics", desc: "Statistical and quantitative skills" },
            { title: "Research Experience", desc: "Publications and analysis" },
            { title: "Specialization", desc: "Macro, micro, labor, development" },
            { title: "Career Path", desc: "Academia, government, private sector" }
        ]
    },

    museum_curator: {
        name: "Museum Curator",
        emoji: "🏺",
        category: "Arts & Culture",
        description: "You preserve and present art, history, and culture to the public!",
        traits: ["knowledgeable", "detail-oriented", "passionate", "organized"],
        salary: "$45k - $90k",
        growth: "12% (Faster than average)",
        roadmap: [
            { title: "Art/History Degree", desc: "Bachelor's in relevant field" },
            { title: "Graduate Education", desc: "Master's in museum studies or specialty" },
            { title: "Internships", desc: "Museum experience essential" },
            { title: "Collections Work", desc: "Cataloging, research, conservation" },
            { title: "Exhibition Development", desc: "Create engaging public displays" },
            { title: "Senior Curator", desc: "Lead departments or institutions" }
        ]
    },

    event_planner: {
        name: "Event Planner",
        emoji: "🎉",
        category: "Hospitality",
        description: "You create memorable experiences through perfectly executed events!",
        traits: ["organized", "creative", "detail-oriented", "stress-resistant"],
        salary: "$45k - $85k",
        growth: "8% (As fast as average)",
        roadmap: [
            { title: "Hospitality Degree", desc: "Or related business degree" },
            { title: "Entry-Level Events", desc: "Coordinator or assistant roles" },
            { title: "Vendor Relationships", desc: "Build network of partners" },
            { title: "CMP Certification", desc: "Certified Meeting Professional" },
            { title: "Specialization", desc: "Weddings, corporate, nonprofit" },
            { title: "Own Business", desc: "Start your event planning company" }
        ]
    },

    nutritionist: {
        name: "Nutritionist / Dietitian",
        emoji: "🥗",
        category: "Healthcare",
        description: "You help people improve health through diet and nutrition!",
        traits: ["health-focused", "scientific", "empathetic", "communicator"],
        salary: "$55k - $85k",
        growth: "7% (As fast as average)",
        roadmap: [
            { title: "Nutrition Degree", desc: "Bachelor's in dietetics or nutrition" },
            { title: "Supervised Practice", desc: "Dietetic internship (1,200+ hours)" },
            { title: "RD Exam", desc: "Registered Dietitian certification" },
            { title: "State License", desc: "If required in your state" },
            { title: "Specialization", desc: "Sports, clinical, pediatric nutrition" },
            { title: "Private Practice", desc: "Or hospital/corporate roles" }
        ]
    },

    sound_engineer: {
        name: "Sound Engineer / Audio Producer",
        emoji: "🎚️",
        category: "Media",
        description: "You create and mix audio for music, film, and media!",
        traits: ["technical", "creative", "detail-oriented", "musical"],
        salary: "$45k - $100k+",
        growth: "5% (As fast as average)",
        roadmap: [
            { title: "Audio Education", desc: "Degree or technical training" },
            { title: "DAW Mastery", desc: "Pro Tools, Logic, Ableton" },
            { title: "Internship", desc: "Studio or production company" },
            { title: "Portfolio", desc: "Build sample work and credits" },
            { title: "Specialization", desc: "Music, film, live sound, podcast" },
            { title: "Studio or Freelance", desc: "Staff engineer or independent" }
        ]
    },

    fashion_designer: {
        name: "Fashion Designer",
        emoji: "👗",
        category: "Design",
        description: "You create clothing and accessories that define style!",
        traits: ["creative", "trendy", "artistic", "business-minded"],
        salary: "$50k - $150k+",
        growth: "0% (Little to no change)",
        roadmap: [
            { title: "Fashion Degree", desc: "Or strong portfolio and skills" },
            { title: "Technical Skills", desc: "Sketching, CAD, pattern making" },
            { title: "Internship", desc: "Work with established designers" },
            { title: "Portfolio", desc: "Develop your signature style" },
            { title: "Launch Collection", desc: "Show your work to the industry" },
            { title: "Brand Building", desc: "Own label or design house role" }
        ]
    },

    environmental_consultant: {
        name: "Environmental Consultant",
        emoji: "🌱",
        category: "Environment",
        description: "You help organizations minimize environmental impact and comply with regulations!",
        traits: ["analytical", "eco-conscious", "detail-oriented", "problem-solver"],
        salary: "$55k - $100k",
        growth: "8% (As fast as average)",
        roadmap: [
            { title: "Environmental Science Degree", desc: "Or related science field" },
            { title: "Technical Skills", desc: "EIA, GIS, regulatory knowledge" },
            { title: "Certifications", desc: "PE, PG, or environmental certifications" },
            { title: "Consulting Experience", desc: "Environmental firm work" },
            { title: "Project Management", desc: "Lead environmental assessments" },
            { title: "Senior Consultant", desc: "Business development and leadership" }
        ]
    },

    translator: {
        name: "Translator / Interpreter",
        emoji: "🌐",
        category: "Language",
        description: "You bridge language gaps and enable global communication!",
        traits: ["multilingual", "cultural", "precise", "communicator"],
        salary: "$40k - $80k",
        growth: "4% (As fast as average)",
        roadmap: [
            { title: "Language Fluency", desc: "Native-level in 2+ languages" },
            { title: "Translation Training", desc: "Degree or certificate program" },
            { title: "Specialization", desc: "Legal, medical, technical, literary" },
            { title: "Certification", desc: "ATA certification or court interpreter" },
            { title: "Experience Building", desc: "Agency or freelance work" },
            { title: "Senior Translator", desc: "Complex projects, interpretation" }
        ]
    },

    biomedical_engineer: {
        name: "Biomedical Engineer",
        emoji: "🩺",
        category: "Engineering",
        description: "You design medical devices and equipment that save lives!",
        traits: ["innovative", "technical", "analytical", "healthcare-focused"],
        salary: "$70k - $130k",
        growth: "5% (As fast as average)",
        roadmap: [
            { title: "Biomedical Engineering Degree", desc: "Bachelor's or Master's" },
            { title: "Technical Skills", desc: "CAD, programming, lab work" },
            { title: "Industry Experience", desc: "Medical device company" },
            { title: "Regulatory Knowledge", desc: "FDA, CE marking, quality systems" },
            { title: "Specialization", desc: "Imaging, prosthetics, implants" },
            { title: "R&D or Management", desc: "Lead product development" }
        ]
    },

    fitness_instructor: {
        name: "Fitness Instructor / Personal Trainer",
        emoji: "🏋️",
        category: "Fitness",
        description: "You help people achieve their fitness goals through exercise!",
        traits: ["energetic", "motivating", "health-focused", "patient"],
        salary: "$30k - $70k",
        growth: "19% (Much faster than average)",
        roadmap: [
            { title: "Fitness Background", desc: "Personal exercise experience" },
            { title: "Certification", desc: "NASM, ACE, ACSM, or similar" },
            { title: "CPR/First Aid", desc: "Safety certifications" },
            { title: "Entry-Level Training", desc: "Gym or studio employment" },
            { title: "Client Building", desc: "Develop loyal client base" },
            { title: "Specialization", desc: "Sports, rehab, nutrition coaching" }
        ]
    },

    optometrist: {
        name: "Optometrist",
        emoji: "👁️",
        category: "Healthcare",
        description: "You examine eyes and prescribe corrective lenses!",
        traits: ["detail-oriented", "patient", "technical", "caring"],
        salary: "$100k - $150k",
        growth: "9% (As fast as average)",
        roadmap: [
            { title: "Pre-Optometry", desc: "Biology, chemistry, OAT exam" },
            { title: "Optometry School", desc: "4-year Doctor of Optometry" },
            { title: "Clinical Rotations", desc: "Patient care experience" },
            { title: "NBEO Exam", desc: "National board certification" },
            { title: "State License", desc: "Practice credentials" },
            { title: "Practice Choice", desc: "Private practice, retail, medical" }
        ]
    },

    data_privacy_officer: {
        name: "Data Privacy Officer",
        emoji: "🔒",
        category: "Compliance",
        description: "You ensure organizations protect personal data and comply with privacy laws!",
        traits: ["detail-oriented", "ethical", "analytical", "communicator"],
        salary: "$90k - $180k",
        growth: "30% (Much faster than average)",
        roadmap: [
            { title: "Legal or IT Background", desc: "Law, cybersecurity, or compliance" },
            { title: "Privacy Certifications", desc: "CIPP, CIPM, CIPT" },
            { title: "Regulatory Knowledge", desc: "GDPR, CCPA, HIPAA" },
            { title: "Compliance Experience", desc: "Privacy program implementation" },
            { title: "DPO Role", desc: "Lead organization's privacy efforts" },
            { title: "Consulting", desc: "Advise multiple organizations" }
        ]
    },

    cloud_architect: {
        name: "Cloud Solutions Architect",
        emoji: "☁️",
        category: "Technology",
        description: "You design scalable cloud infrastructure for organizations!",
        traits: ["technical", "strategic", "problem-solver", "communicator"],
        salary: "$130k - $200k+",
        growth: "25% (Much faster than average)",
        roadmap: [
            { title: "Technical Foundation", desc: "CS degree or equivalent experience" },
            { title: "Cloud Certifications", desc: "AWS, Azure, or GCP professional certs" },
            { title: "Infrastructure Experience", desc: "Hands-on cloud deployment" },
            { title: "Architecture Skills", desc: "Design patterns, best practices" },
            { title: "Solution Design", desc: "Lead cloud transformation projects" },
            { title: "Principal Architect", desc: "Enterprise-level strategy" }
        ]
    },

    technical_writer: {
        name: "Technical Writer",
        emoji: "📝",
        category: "Technology",
        description: "You make complex technical information clear and accessible!",
        traits: ["clear-communicator", "detail-oriented", "technical", "organized"],
        salary: "$60k - $100k",
        growth: "7% (As fast as average)",
        roadmap: [
            { title: "Writing Skills", desc: "Strong technical writing ability" },
            { title: "Technical Knowledge", desc: "Understanding of the subject matter" },
            { title: "Documentation Tools", desc: "Markdown, XML, docs-as-code" },
            { title: "Portfolio", desc: "Sample documentation and guides" },
            { title: "Specialization", desc: "API docs, user guides, developer content" },
            { title: "Senior Roles", desc: "Lead writer, documentation manager" }
        ]
    },

    supply_chain_manager: {
        name: "Supply Chain Manager",
        emoji: "📦",
        category: "Business",
        description: "You optimize the flow of goods from suppliers to customers!",
        traits: ["analytical", "organized", "strategic", "problem-solver"],
        salary: "$80k - $140k",
        growth: "6% (As fast as average)",
        roadmap: [
            { title: "Business/Operations Degree", desc: "Supply chain or logistics focus" },
            { title: "Entry-Level Logistics", desc: "Coordinator or analyst role" },
            { title: "APICS/CSCP Certification", desc: "Professional credentials" },
            { title: "ERP Systems", desc: "SAP, Oracle, or similar" },
            { title: "Management Experience", desc: "Lead supply chain teams" },
            { title: "Director/VP", desc: "Strategic supply chain leadership" }
        ]
    },

    ux_researcher: {
        name: "UX Researcher",
        emoji: "🔬",
        category: "Technology",
        description: "You study user behavior to improve product design!",
        traits: ["empathetic", "analytical", "curious", "communicator"],
        salary: "$80k - $140k",
        growth: "15% (Faster than average)",
        roadmap: [
            { title: "Research Foundation", desc: "Psychology, HCI, or design degree" },
            { title: "Research Methods", desc: "Qualitative and quantitative techniques" },
            { title: "Tools Proficiency", desc: "Survey tools, analytics, usability testing" },
            { title: "Portfolio", desc: "Case studies of research impact" },
            { title: "Senior Researcher", desc: "Lead strategic research initiatives" },
            { title: "Research Leadership", desc: "Build and manage research teams" }
        ]
    }
};

// Export for use in main script
window.careerDatabase = careerDatabase;

