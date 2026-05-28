import { Service, Project, Testimonial, NavItem, SectionId, TechDomain, ProcessStep } from './types';

export const COMPANY_NAME = "OITS Dhaka";
export const TAGLINE = "Digital Mastery Engineered for Performance";
export const CONTACT_EMAIL = "info@oitsdhaka.com";
export const PHONE = "+880 1886 452 906";
export const ADDRESS = "House # 42, Road # 2/A, Block # Z, Dhaka 1209, Bangladesh";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'Our Services', 
    href: '/services',
    children: [
      { label: 'Services Overview', href: '/services' },
      { label: 'Agile Workflow', href: '/workflow' },
    ]
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'select',
    number: '01',
    title: 'Select a Project',
    description: 'Tell us what you need. Whether it\'s a custom application, system integration, or support service, we begin by understanding your goals.',
    icon: 'Search',
  },
  {
    id: 'analysis',
    number: '02',
    title: 'Project Analysis',
    description: 'Our team analyses the scope, requirements, and technical challenges to propose the best approach within your timeline and budget.',
    icon: 'Layers',
  },
  {
    id: 'execute',
    number: '03',
    title: 'Plan & Execute',
    description: 'We prepare a detailed roadmap and get to work. Our agile teams deliver fast iterations with transparent updates and collaboration.',
    icon: 'Code',
  },
  {
    id: 'deliver',
    number: '04',
    title: 'Deliver Results',
    description: 'On time, on budget, and fully tested. We deliver solutions that work — and support you beyond launch.',
    icon: 'Rocket',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'dedicated-teams',
    title: 'On-demand Dev Team',
    description: 'Expand your engineering capacity with our highly skilled full-time developers and designers.',
    category: 'DEV-SUPPORT',
    icon: 'Users',
    features: ['Staff Augmentation', 'Project Management', 'Agile Setup'],
    detailedFeatures: [
      'Workflow Automation Engines',
      'Architecture & Design Audits',
      'Legacy Core Migration',
      'Strategic Technology Roadmaps'
    ],
    advantages: [
      'Instant Resource scale-up/scale-down',
      'Continuous feedback reporting loops',
      'Sprint velocity guarantee'
    ],
    caseStudy: {
      client: 'Logii Logistics Solutions',
      quote: 'Working with OITS felt like adding a fully mature, battle-tested elite engineering core to our in-house systems overnight.',
      impact: '90%+ Agile velocity improvement'
    },
    documentationUrl: '/docs/consulting-methodology'
  },
  {
    id: 'cloud',
    title: 'Cross-Platform',
    description: 'Robust AWS/GCP infrastructure with automated CI/CD pipelines and high availability.',
    category: 'CLOUD SERVICES',
    icon: 'Cloud',
    features: ['AWS / GCP / Azure', 'DevOps Automation', 'Cybersecurity'],
    detailedFeatures: [
      'SaaS Multi-tenant Control',
      'Zero-Downtime Pipeline Workflows',
      'Enterprise Risk Mitigations',
      'Identity Access Token Governance'
    ],
    advantages: [
      'Auto-healing dynamic replicas',
      'Complete ISO/HIPAA compliant configurations',
      'Container-level Isolation standards'
    ],
    caseStudy: {
      client: 'Nexus Retail Systems',
      quote: 'The infrastructure upgrade ensured zero transactional packet losses during the massive Black Friday peak traffic.',
      impact: 'Maintained 99.99% operational uptime'
    },
    documentationUrl: '/docs/infrastructure'
  },
  {
    id: 'tech-frontiers',
    title: 'Enterprise Management (ERP/MIS)',
    description: 'Custom Enterprise Resource Planning (ERP) and Management Information Systems (MIS) tailored for your workflow.',
    category: 'ERP/MIS',
    icon: 'Globe',
    features: ['Inventory & HRIS integration', 'Financial Analytics', 'Modular Business Logic'],
    detailedFeatures: [
      'Integrated Inventory Control systems',
      'Custom Human Resources Information Systems',
      'Audit Trail Logs Compliance trackers',
      'High-capacity secure transaction ledgers'
    ],
    advantages: [
      'Centralized data single-source of truth',
      'Granular permission role access controls',
      'Custom localized reporting pipelines'
    ],
    caseStudy: {
      client: 'AeroGroup Aviation',
      quote: 'Their modular ERP system synchronized our nationwide distribution and reporting workflows instantly.',
      impact: 'Reduced internal operations cycle times by 30%'
    },
    documentationUrl: '/docs/erp-mis'
  },
  {
    id: 'ir4-ir5',
    title: 'IR4.0 / IR5.0 Engineering',
    description: 'Pioneering intelligent edge systems, AI-driven automation, industrial IoT networks, and Web-3 ledgers.',
    category: 'IR4/IR5',
    icon: 'Terminal',
    features: ['Edge AI Predictive Models', 'IoT Telemetry Sensors', 'Blockchain dApps'],
    detailedFeatures: [
      'Edge AI/ML Predictive Analytics',
      'High-throughput FinTech Distributed Ledgers',
      'Industrial IoT Telemetry Processing',
      'Autonomous System Automation pipelines'
    ],
    advantages: [
      'Real-time edge decisions with millisecond latency',
      'Decentralized immutable security protocols',
      'Unified industrial SCADA / IoT telemetry displays'
    ],
    caseStudy: {
      client: 'Apex Intelligent Grid',
      quote: 'The IR4.0 telemetry sensor pipelines reduced our physical warehouse anomalies by 42% over a single quarter.',
      impact: '42%+ anomaly rate reduction'
    },
    documentationUrl: '/docs/ir4-ir5'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'LABAID GPT Clinical Engine',
    category: 'Healthcare & AI',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
    description: 'Multimodal clinical decision support & second-opinion SaaS platform fine-tuned on oncology EMR datasets.',
    fullDescription: 'A comprehensive medical intelligence system featuring GPT-4V medical image interpretation, custom Vision Transformer OCR for handwritten prescriptions, drug-to-drug interaction checks, and BERT-powered clinical triage.',
    problemStatement: 'Radiologists faced a 35% administrative workload bottleneck, while underserved regional clinics suffered from a 65% oncologist shortage, delaying patient pre-screening timelines by up to six weeks.',
    technicalApproach: 'We built a secure, containerized multimodal pipeline. Handwritten prescription images are processed with domain-specific Bangla-English transformers, diagnostic images are labeled via vision embeddings, and structured outputs sync with legacy EHR/PACS repositories via secure HL7/FHIR endpoints.',
    results: 'Drove a 35% reduction in radiologist administrative load and successfully reduced oncology pre-screening turnaround times from three weeks down to under 24 hours.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'GPT-4V', 'FHIR APIs'],
    demoVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    captionsUrl: 'https://gist.githubusercontent.com/samdutton/ca37f3adaf4e23679950b80847045b3d/raw/e37bfb9d10e6f530f1d63d6998ff69094f71a47f/subtitle_en.vtt',
    duration: '6-8 Months',
    status: 'Completed'
  },
  {
    id: '2',
    title: 'PrimeOCR Banking ICR',
    category: 'Document Intelligence',
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
    description: 'On-premises enterprise form intelligence and multi-engine printed/handwritten document OCR/ICR platform.',
    fullDescription: 'An enterprise-grade secure document processing core designed for regional banking operations, handling mixed printed and handwritten forms in both English and Bangla using confidence-based routing.',
    problemStatement: 'Manual data entry for account opening documents consumed 15 to 20 minutes per application with high error rates, introducing compliance risks and operational bottlenecks.',
    technicalApproach: 'Constructed an asynchronous data processing pipe using LLaMA Vision and Tesseract OCR. Implemented a robust maker-checker verification queue with split-screen review and automated confidence scores.',
    results: 'Delivered 95% English and 85% Bangla handwritten OCR accuracy, accelerating overall back-office document processing workflows by 75% in complete compliance with central bank security standards.',
    technologies: ['Angular', 'NestJS', 'Tesseract OCR', 'LLaMA Vision', 'Docker'],
    demoVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    captionsUrl: 'https://gist.githubusercontent.com/samdutton/ca37f3adaf4e23679950b80847045b3d/raw/e37bfb9d10e6f530f1d63d6998ff69094f71a47f/subtitle_en.vtt',
    duration: '4-5 Months',
    status: 'In Progress'
  },
  {
    id: '3',
    title: 'HelloKhata SME Retail Copilot',
    category: 'Enterprise Software',
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc',
    description: 'Bangla-first SME retail OS featuring voice AI dictation, stock auditing, and deterministic state guardrails.',
    fullDescription: 'An intuitive voice-enabled inventory and financial ledger OS crafted specifically for micro-retailers in low-connectivity environments.',
    problemStatement: 'Traditional retail ERPs introduced excessive keyboard friction for shop owners, while standard conversational LLMs posed severe data corruption risks through ledger entry hallucination.',
    technicalApproach: 'Designed a deterministic tool-calling executor backed by Zod-validated schemas. Employs local Web Speech API voice capture, fuzzy search product mapping, and draft-verify-commit transaction semantics to ensure zero-variance accounting.',
    results: 'Enabled seamless ledger and invoice creation via native voice commands, reducing transaction recording times by 90% with zero structural state corruption.',
    technologies: ['Next.js', 'Zustand', 'Web Speech API', 'Zod', 'PostgreSQL'],
    demoVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    captionsUrl: 'https://gist.githubusercontent.com/samdutton/ca37f3adaf4e23679950b80847045b3d/raw/e37bfb9d10e6f530f1d63d6998ff69094f71a47f/subtitle_en.vtt',
    duration: '4 Months',
    status: 'Completed'
  },
  {
    id: '4',
    title: 'Project Eugenia PropTech ML',
    category: 'IoT & Smart Infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    description: 'System-agnostic real estate decision support engine for energy and predictive facilities maintenance.',
    fullDescription: 'A cloud-native ML analytics platform that aggregates utility telemetry, facilities maintenance requests, and tenant surveys into prioritized action recommendations.',
    problemStatement: 'Property managers operated blindly with fragmented data scattered across 7+ disconnected legacy applications, causing high energy volatility and slow, reactive maintenance.',
    technicalApproach: 'Built a secure data lakehouse on Azure Synapse. We trained XGBoost models to establish precise energy consumption baselines, Isolation Forests for real-time anomaly alerts, and survival analysis models for HVAC failure planning.',
    results: 'Delivered an 8-12% energy consumption reduction, projected 15% operational cost savings, and boosted overall tenant satisfaction ratings by over 5%.',
    technologies: ['Azure Synapse', 'Python', 'XGBoost', 'Databricks', 'React'],
    duration: '6 Months',
    status: 'In Progress'
  },
  {
    id: '5',
    title: 'AR/VR Medical LMS & AI Tutor',
    category: 'AR/VR & EdTech',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    description: 'AR/VR immersive medical learning platform with haptic diagnostics and eye-gaze tracking analysis.',
    fullDescription: 'A collaborative, immersive learning environment featuring 3D layered human dissection, dynamic physiology simulation, surgical haptic scoring, and predictive student tutoring.',
    problemStatement: 'Medical schools faced severe shortages of physical cadavers and high laboratory overhead costs, while standard 2D teaching tools failed to convey spatial anatomical relationships.',
    technicalApproach: 'Developed a collaborative virtual reality core using Unity. We integrated eye-gaze tracking telemetry to detect clinical diagnostic hesitation and mapped semantic NLP models to an on-demand AI tutor.',
    results: 'Improved anatomical knowledge retention metrics by 78% and reduced per-student training overhead costs by 60% compared to traditional labs.',
    technologies: ['Unity', 'C#', 'NLP', 'AR/VR', 'Python'],
    duration: '5-6 Months',
    status: 'Completed'
  },
  {
    id: '6',
    title: 'Jotax BI Enterprise Analytics',
    category: 'Business Intelligence',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    description: 'Bilingual enterprise semantic modeling, financial reporting dashboards, and Power BI automation pipelines.',
    fullDescription: 'A complex data analytics solution consolidating read-only transactional databases with custom calendars and Finnish Week 53 calculations.',
    problemStatement: 'The finance and accounting team lost hours manually consolidating weekly reports from multiple Excel worksheets, experiencing regular variance and reporting delays.',
    technicalApproach: 'Constructed an end-to-end semantic layer in Power BI using 89 optimized DAX measures, virtual relationships, and secure Power Automate data relays.',
    results: 'Reduced weekly reporting cycles by 80% and completely eliminated calculation errors, resolving a regular €42k quarterly financial variance.',
    technologies: ['Power BI', 'DAX', 'Power Automate', 'Oracle DB'],
    duration: '3 Months',
    status: 'Completed'
  },
  {
    id: '7',
    title: 'LUNA Multilingual Voice Agent',
    category: 'Conversational AI',
    imageUrl: 'https://images.unsplash.com/photo-1590608897129-79da98d15969',
    description: 'Omni-channel multilingual text/voice reasoning agent serving retail, banking, and healthcare.',
    fullDescription: 'A reusable conversational agent shell capable of voice biometrics, transaction entity extraction, and multi-turn logic in English, Bangla, and Banglish.',
    problemStatement: 'Rule-based customer chatbots failed to resolve complex inquiries, raising human agent costs and leading to high cart abandonment rates.',
    technicalApproach: 'Built using LangChain orchestration, Groq Llama 3.2, and Whisper STT for low-latency voice capture, packaged as an easily embeddable React web component.',
    results: 'Drove a 22% conversion lift in commerce voice sessions, reduced manual agent handoffs by 70%, and supported an 18-point NPS increase.',
    technologies: ['LangChain', 'Llama 3.2', 'Whisper STT', 'React', 'Google TTS'],
    duration: '3-4 Months',
    status: 'Completed'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'David Fernandes',
    role: 'CEO',
    company: 'Anaton',
    content: "OITS Dhaka delivered beyond expectations. Their secure, scalable development approach and transparent communication made them our trusted global partner from day one.",
    avatar: 'https://i.pravatar.cc/150?u=david_fernandes',
  },
  {
    id: 't2',
    name: 'Jackline Techie',
    role: 'CEO',
    company: 'Kormola',
    content: "From MVP scoping to production launch, the OITS team brought world-class engineering discipline and speed. Our product shipped on time and within budget — a rare feat.",
    avatar: 'https://i.pravatar.cc/150?u=jackline_techie',
  },
  {
    id: 't3',
    name: 'Abraham Khalil',
    role: 'CEO',
    company: 'Anatora',
    content: "The technical depth OITS brings to complex integrations is unmatched. They modernised our entire legacy stack without disrupting our operations for a single day.",
    avatar: 'https://i.pravatar.cc/150?u=abraham_khalil',
  },
  {
    id: 't4',
    name: 'Md Sumon Mia',
    role: 'CEO',
    company: 'Rimasu',
    content: "OITS understood our local market nuances while delivering solutions built to international standards. The quality and reliability of their work is genuinely world-class.",
    avatar: 'https://i.pravatar.cc/150?u=sumon_mia',
  },
];

export const TECH_STACK = [
  "React", "Next.js", "Node.js", "TypeScript", "Python", "AWS", "Docker", "Flutter", "PostgreSQL", "Rust", "Kubernetes"
];

export const TECH_DOMAINS: TechDomain[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'Vue.js',
      'TypeScript',
      'Tailwind CSS',
      'Three.js'
    ]
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      'Node.js',
      'Python',
      'Rust',
      'NestJS',
      'PostgreSQL',
      'GraphQL'
    ]
  },
  {
    id: 'cloud',
    label: 'Infrastructure',
    skills: [
      'AWS',
      'Google Cloud (GCP)',
      'Docker',
      'Kubernetes',
      'Terraform',
      'CI/CD'
    ]
  },
  {
    id: 'specialized',
    label: 'Specialized',
    skills: [
      'AI & Machine Learning',
      'Internet of Things (IoT)',
      'AR & VR Solutions',
      'Blockchain, Web-3 & DApp',
      'Intelligent Features Augmentation',
      'Cross-Platform Solutions',
      'Progressive Web Apps (PWA)'
    ]
  }
];
