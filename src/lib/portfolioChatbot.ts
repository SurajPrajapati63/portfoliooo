export type ChatLink = {
  label: string;
  url: string;
};

export type ChatResponse = {
  text: string;
  links?: ChatLink[];
};

type PortfolioDoc = {
  id: string;
  source: string;
  type: string;
  title: string;
  content: string;
  url?: string;
  keywords: string[];
  aliases?: string[];
};

const portfolioDocuments: PortfolioDoc[] = [
  {
    id: 'about',
    source: 'portfolio',
    type: 'about',
    title: 'About Suraj',
    content:
      'Suraj Prajapati is a dedicated B.Tech Computer Science student with a passion for creating innovative solutions through code. He is based in India and focuses on full stack web development, problem solving, and modern web technologies.',
    keywords: ['suraj', 'prajapati', 'about', 'btech', 'computer science', 'developer', 'full stack', 'web development', 'passion'],
  },
  {
    id: 'education',
    source: 'portfolio',
    type: 'education',
    title: 'Education',
    content:
      'Education: B.Tech Computer Science at Babu Banarasi Das University. Expected graduation: 2026. Focus areas include software development, problem solving, data structures, and algorithms.',
    keywords: ['education', 'btech', 'computer science', 'university', 'graduation', '2026', 'study'],
  },
  {
    id: 'experience',
    source: 'portfolio',
    type: 'experience',
    title: 'Experience',
    content:
      'Suraj has worked on multiple portfolio, web, and AI projects, with a strong emphasis on full stack development, APIs, data engineering, and AI-powered product ideas. He has worked on projects spanning healthcare, hiring platforms, food ordering, certificate verification, and AI assistants.',
    keywords: ['experience', 'internship', 'worked', 'web development', 'ai', 'full stack', 'projects', 'experience'],
  },
  {
    id: 'skills',
    source: 'portfolio',
    type: 'skills',
    title: 'Skills',
    content:
      'Programming languages: C, C++, Python, JavaScript, SQL. Frontend: HTML5, CSS3, React.js, Tailwind CSS, Bootstrap, Responsive Design. Backend: Node.js, Express.js, FastAPI, REST APIs. Databases: MongoDB, MySQL, ChromaDB. Data engineering: Apache Spark (PySpark), Databricks, Azure Databricks, ETL pipelines, NumPy, Pandas, Matplotlib. Cloud and AI: AWS, Azure, Azure Blob Storage, Generative AI, LLMs, RAG, Prompt Engineering. Libraries: Streamlit, LangChain, LangGraph. Tools: Git, GitHub, VS Code, Postman, CI/CD with GitHub Actions.',
    keywords: ['skills', 'technology', 'stack', 'programming', 'react', 'python', 'node', 'mongodb', 'mysql', 'langchain', 'fastapi', 'aws', 'azure', 'llm', 'rag', 'git', 'github'],
  },
  {
    id: 'github',
    source: 'github',
    type: 'profile',
    title: 'GitHub Profile',
    content: 'GitHub profile: SurajPrajapati63. GitHub URL: https://github.com/SurajPrajapati63.',
    url: 'https://github.com/SurajPrajapati63',
    keywords: ['github', 'profile', 'repository', 'repositories', 'code'],
  },
  {
    id: 'linkedin',
    source: 'linkedin',
    type: 'profile',
    title: 'LinkedIn Profile',
    content: 'LinkedIn profile: Suraj Prajapati. LinkedIn URL: https://www.linkedin.com/in/suraj-prajapati-07b076262.',
    url: 'https://www.linkedin.com/in/suraj-prajapati-07b076262',
    keywords: ['linkedin', 'profile', 'connection', 'professional'],
  },
  {
    id: 'contact',
    source: 'portfolio',
    type: 'contact',
    title: 'Contact',
    content:
      'Email: prajapatisuraj88409@gmail.com. LinkedIn: https://www.linkedin.com/in/suraj-prajapati-07b076262. GitHub: https://github.com/SurajPrajapati63.',
    url: 'https://github.com/SurajPrajapati63',
    keywords: ['contact', 'email', 'linkedin', 'github', 'message', 'reach out'],
  },
  {
    id: 'project-job-listing',
    source: 'portfolio',
    type: 'project',
    title: 'Job Listing Portal',
    aliases: ['job listing portal', 'job portal', 'job listing'],
    content:
      'Job Listing Portal is a comprehensive web platform connecting job seekers with recruiters. It includes user authentication, job posting, application tracking, and advanced search functionality. Technologies: React.js, Node.js, Express.js, MongoDB, JWT Authentication. GitHub: https://github.com/SurajPrajapati63/Job-Listening-Portal.',
    url: 'https://github.com/SurajPrajapati63/Job-Listening-Portal',
    keywords: ['job', 'listing', 'portal', 'recruiter', 'authentication', 'react', 'node', 'express', 'mongodb', 'jwt'],
  },
  {
    id: 'project-certificate',
    source: 'portfolio',
    type: 'project',
    title: 'Certificate Verification System',
    aliases: ['certificate verification system', 'certificate verification', 'verification system'],
    content:
      'Certificate Verification System is a secure platform for validating certificates with blockchain-inspired verification, QR code generation, and tamper-proof certificate management. Technologies: React.js, Node.js, MySQL, QR Code API, Crypto. GitHub: https://github.com/SurajPrajapati63/certificate_verification.',
    url: 'https://github.com/SurajPrajapati63/certificate_verification',
    keywords: ['certificate', 'verification', 'security', 'react', 'node', 'mysql', 'qr', 'crypto'],
  },
  {
    id: 'project-ai-image',
    source: 'portfolio',
    type: 'project',
    title: 'AI Image Generator',
    aliases: ['ai image generator', 'image generator'],
    content:
      'AI Image Generator is an AI-powered web tool that generates high-quality images from text prompts. It includes a user-friendly interface and gallery features. Technologies: React.js, AI API Integration, JavaScript, CSS3, REST APIs. GitHub: https://github.com/SurajPrajapati63/AI-Image-Generator.',
    url: 'https://github.com/SurajPrajapati63/AI-Image-Generator',
    keywords: ['ai', 'image', 'generator', 'react', 'javascript', 'css', 'api'],
  },
  {
    id: 'project-nomnom',
    source: 'portfolio',
    type: 'project',
    title: 'Nomnom App',
    aliases: ['nomnom app', 'food app', 'nomnom'],
    content:
      'Nomnom App is a food ordering application for discovering meals and creating a smooth ordering experience. Technologies: React.js, JavaScript, CSS3, REST APIs. GitHub: https://github.com/SurajPrajapati63/Nomnom-app.',
    url: 'https://github.com/SurajPrajapati63/Nomnom-app',
    keywords: ['food', 'ordering', 'nomnom', 'app', 'react', 'javascript', 'css', 'api'],
  },
  {
    id: 'project-ruhi',
    source: 'portfolio',
    type: 'project',
    title: 'Ruhi Agent',
    aliases: ['ruhi agent', 'ai agent', 'ai assistant'],
    content:
      'Ruhi Agent is an AI-powered assistant designed to provide helpful and conversational responses through a focused web experience. Technologies: React.js, AI Integration, JavaScript, Vercel. Live demo: https://ruhi-agent.vercel.app/.',
    url: 'https://ruhi-agent.vercel.app/',
    keywords: ['ruhi', 'agent', 'ai', 'assistant', 'react', 'vercel', 'conversation', 'chatbot'],
  },
  {
    id: 'project-rozgarsetu',
    source: 'portfolio',
    type: 'project',
    title: 'RozgarSetu',
    aliases: ['rozgarsetu', 'employment platform'],
    content:
      'RozgarSetu is a platform connecting job seekers with employment opportunities and helping users discover relevant career options. Technologies: React.js, Node.js, Express.js, MongoDB. GitHub: https://github.com/SurajPrajapati63/RozgarSetu.',
    url: 'https://github.com/SurajPrajapati63/RozgarSetu',
    keywords: ['rozgarsetu', 'employment', 'job seekers', 'career', 'react', 'node', 'express', 'mongodb'],
  },
  {
    id: 'project-hospital',
    source: 'portfolio',
    type: 'project',
    title: 'Hospital Management System',
    aliases: ['hospital management system', 'hospital management'],
    content:
      'Hospital Management System is a management system for organizing hospital workflows, patient records, and day-to-day healthcare operations. Technologies: React.js, Node.js, Express.js, MongoDB. GitHub: https://github.com/SurajPrajapati63/Hospital_management.',
    url: 'https://github.com/SurajPrajapati63/Hospital_management',
    keywords: ['hospital', 'management', 'healthcare', 'patient', 'records', 'react', 'node', 'express', 'mongodb'],
  },
  {
    id: 'project-etl',
    source: 'portfolio',
    type: 'project',
    title: 'ETL Pipeline Monitoring Automation',
    aliases: ['etl pipeline monitoring automation', 'etl pipeline', 'pipeline monitoring'],
    content:
      'ETL Pipeline Monitoring Automation is a data engineering tool for monitoring ETL pipelines, tracking workflow health, and surfacing operational issues. Technologies: Python, ETL, Automation, Data Monitoring. GitHub: https://github.com/SurajPrajapati63/ETL-Pipeline-Monitoring-Automation.',
    url: 'https://github.com/SurajPrajapati63/ETL-Pipeline-Monitoring-Automation',
    keywords: ['etl', 'pipeline', 'monitoring', 'automation', 'data engineering', 'python'],
  },
];

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').replace(/\s+/g, ' ').trim();

const extractKeywords = (value: string) => normalize(value).split(' ').filter(Boolean);

const scoreDocument = (question: string, document: PortfolioDoc) => {
  const base = extractKeywords(question);
  const documentText = `${document.title} ${document.content} ${(document.aliases ?? []).join(' ')}`.toLowerCase();
  const textTokens = new Set(extractKeywords(documentText));

  let score = 0;
  base.forEach((token) => {
    if (!token) return;
    if (token.length <= 2) return;
    if (document.keywords.some((keyword) => keyword.toLowerCase().includes(token) || token.includes(keyword.toLowerCase()))) {
      score += 4;
    }
    if (textTokens.has(token)) {
      score += 3;
    }
  });

  if (question.includes('project') && document.type === 'project') score += 6;
  if (question.includes('skill') && document.type === 'skills') score += 6;
  if (question.includes('github') && document.type === 'profile' && document.source === 'github') score += 8;
  if (question.includes('linkedin') && document.type === 'profile' && document.source === 'linkedin') score += 8;
  if (question.includes('experience') && document.type === 'experience') score += 7;
  if (question.includes('education') && document.type === 'education') score += 7;
  if (question.includes('about') && document.type === 'about') score += 7;

  if (/react/.test(question) && document.content.toLowerCase().includes('react')) score += 5;
  if (/python/.test(question) && document.content.toLowerCase().includes('python')) score += 5;
  if (/langchain/.test(question) && document.content.toLowerCase().includes('langchain')) score += 5;
  if (/ai/.test(question) && document.content.toLowerCase().includes('ai')) score += 4;

  return score;
};

const getProjectList = () =>
  portfolioDocuments
    .filter((doc) => doc.type === 'project')
    .map((doc) => ({
      title: doc.title,
      description: doc.content.split('.').slice(0, 2).join('. ').trim(),
      tech: doc.content.match(/Technologies: ([^.]*)/i)?.[1] ?? 'Portfolio project',
      url: doc.url,
    }));

const buildProjectSummary = (projectTitle: string, question: string): ChatResponse | null => {
  const doc = portfolioDocuments.find((item) => {
    const titleMatch = item.title.toLowerCase() === projectTitle.toLowerCase();
    const aliasMatch = item.aliases?.some((alias) => alias.toLowerCase() === projectTitle.toLowerCase());
    return titleMatch || aliasMatch;
  });

  if (!doc) {
    const projectMatches = portfolioDocuments.filter((item) => item.type === 'project' && item.content.toLowerCase().includes(projectTitle.toLowerCase()));
    if (projectMatches.length > 0) return {
      text: `${projectMatches[0].title}: ${projectMatches[0].content.replace(/\s+/g, ' ').trim()}`,
      links: projectMatches[0].url ? [{ label: `View ${projectMatches[0].title}`, url: projectMatches[0].url }] : undefined,
    };
    return null;
  }

  const text = `${doc.title}: ${doc.content.replace(/\s+/g, ' ').trim()}`;
  return {
    text,
    links: doc.url ? [{ label: `View ${doc.title}`, url: doc.url }] : undefined,
  };
};

const getSkillSummary = () => {
  const skillDoc = portfolioDocuments.find((doc) => doc.type === 'skills');
  if (!skillDoc) return '{NOT_FOUND}';
  return skillDoc.content.replace(/\s+/g, ' ').trim();
};

const isExplicitlySupported = (question: string) => {
  const terms = [
    'suraj', 'prajapati', 'portfolio', 'project', 'projects', 'skills', 'tech', 'technology', 'github', 'linkedin', 'email', 'education', 'experience', 'about', 'react', 'node', 'python', 'ai', 'langchain', 'hospital', 'resume', 'job', 'work', 'experience', 'contact', 'ruhi', 'rozgarsetu', 'nomnom', 'certificate', 'etl'
  ];
  return terms.some((term) => question.includes(term));
};

const isOutOfScope = (question: string) => {
  const forbidden = ['favorite', 'capital of france', 'weather', 'ceo', 'microsoft', 'python program', 'write me', 'today', 'president', 'company', 'stock', 'movie', 'song', 'book'];
  return forbidden.some((phrase) => question.includes(phrase));
};

export const answerPortfolioQuestion = (question: string): ChatResponse => {
  const cleaned = question.trim();
  if (!cleaned) {
    return { text: '{NOT_FOUND}' };
  }

  const normalized = normalize(cleaned);

  if (!isExplicitlySupported(normalized) || isOutOfScope(normalized)) {
    return { text: '{NOT_FOUND}' };
  }

  const topMatches = portfolioDocuments
    .map((document) => ({ document, score: scoreDocument(normalized, document) }))
    .filter((match) => match.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  if (!topMatches.length) {
    return { text: '{NOT_FOUND}' };
  }

  if (/linkedin/.test(normalized)) {
    const linkedInDoc = portfolioDocuments.find((doc) => doc.source === 'linkedin' && doc.type === 'profile');
    if (linkedInDoc?.url) {
      return {
        text: 'You can connect with Suraj on LinkedIn.',
        links: [{ label: 'View LinkedIn Profile', url: linkedInDoc.url }],
      };
    }
    return { text: '{NOT_FOUND}' };
  }

  if (/github/.test(normalized) || /repository/.test(normalized) || /repositories/.test(normalized)) {
    const githubDoc = portfolioDocuments.find((doc) => doc.source === 'github' && doc.type === 'profile');
    if (githubDoc?.url) {
      return {
        text: 'Suraj’s GitHub profile is available here:',
        links: [{ label: 'View GitHub Profile', url: githubDoc.url }],
      };
    }
    return { text: '{NOT_FOUND}' };
  }

  if (/(what projects|show me all projects|project list|projects has suraj|projects.*worked on|projects.*built|list.*projects)/.test(normalized)) {
    const projects = getProjectList();
    const items = projects.map((project) => `• ${project.title}\n  - ${project.tech}`).join('\n');
    return {
      text: `Here are the projects listed in Suraj’s portfolio:\n\n${items}\n\nI can also tell you about the technologies used in any of these projects.`,
      links: projects.filter((project) => project.url).map((project) => ({ label: project.title, url: project.url! })),
    };
  }

  if (/skills|technology|technologies|stack|tools/.test(normalized)) {
    return { text: getSkillSummary() };
  }

  if (/(experience|work|internship|journey)/.test(normalized)) {
    const experienceDoc = portfolioDocuments.find((doc) => doc.type === 'experience');
    if (experienceDoc) {
      return { text: experienceDoc.content.replace(/\s+/g, ' ').trim() };
    }
    return { text: '{NOT_FOUND}' };
  }

  if (/(education|graduat|study|university|btech)/.test(normalized)) {
    const educationDoc = portfolioDocuments.find((doc) => doc.type === 'education');
    if (educationDoc) {
      return { text: educationDoc.content.replace(/\s+/g, ' ').trim() };
    }
    return { text: '{NOT_FOUND}' };
  }

  if (/(about|who is suraj|tell me about suraj|profile)/.test(normalized)) {
    const aboutDoc = portfolioDocuments.find((doc) => doc.type === 'about');
    if (aboutDoc) {
      return { text: aboutDoc.content.replace(/\s+/g, ' ').trim() };
    }
    return { text: '{NOT_FOUND}' };
  }

  if (/react/.test(normalized) && /project|projects|which/.test(normalized)) {
    const matches = portfolioDocuments.filter((doc) => doc.type === 'project' && doc.content.toLowerCase().includes('react'));
    if (matches.length) {
      return {
        text: `Projects using React include:\n${matches.map((doc) => `• ${doc.title}`).join('\n')}`,
        links: matches.filter((doc) => doc.url).map((doc) => ({ label: doc.title, url: doc.url! })),
      };
    }
    return { text: '{NOT_FOUND}' };
  }

  if (/python/.test(normalized) && /project|projects|which/.test(normalized)) {
    const matches = portfolioDocuments.filter((doc) => doc.type === 'project' && doc.content.toLowerCase().includes('python'));
    if (matches.length) {
      return {
        text: `Projects using Python include:\n${matches.map((doc) => `• ${doc.title}`).join('\n')}`,
        links: matches.filter((doc) => doc.url).map((doc) => ({ label: doc.title, url: doc.url! })),
      };
    }
    return { text: '{NOT_FOUND}' };
  }

  if (/langchain/.test(normalized) && /project|projects|which/.test(normalized)) {
    const matches = portfolioDocuments.filter((doc) => doc.type === 'project' && doc.content.toLowerCase().includes('langchain'));
    if (matches.length) {
      return {
        text: `Projects related to LangChain include:\n${matches.map((doc) => `• ${doc.title}`).join('\n')}`,
        links: matches.filter((doc) => doc.url).map((doc) => ({ label: doc.title, url: doc.url! })),
      };
    }
    return { text: '{NOT_FOUND}' };
  }

  if (/ai/.test(normalized) && /(project|projects|repository|repositories)/.test(normalized)) {
    const matches = portfolioDocuments.filter((doc) => doc.type === 'project' && doc.content.toLowerCase().includes('ai'));
    if (matches.length) {
      return {
        text: `AI-related projects in Suraj’s portfolio include:\n${matches.map((doc) => `• ${doc.title}`).join('\n')}`,
        links: matches.filter((doc) => doc.url).map((doc) => ({ label: doc.title, url: doc.url! })),
      };
    }
    return { text: '{NOT_FOUND}' };
  }

  const directProjectName = normalize(cleaned).replace(/(tell me about|what is|show me|give me|suraj|project|projects|his|her|their|about)*/g, '').trim();
  if (directProjectName && directProjectName.length > 2) {
    const projectResponse = buildProjectSummary(directProjectName, normalized);
    if (projectResponse) {
      return projectResponse;
    }
  }

  const candidateDoc = topMatches[0]?.document;
  if (!candidateDoc) {
    return { text: '{NOT_FOUND}' };
  }

  if (candidateDoc.type === 'project') {
    const projectResp = buildProjectSummary(candidateDoc.title, normalized);
    if (projectResp) return projectResp;
  }

  if (candidateDoc.type === 'skills') {
    return { text: getSkillSummary() };
  }

  if (candidateDoc.type === 'about') {
    return { text: candidateDoc.content.replace(/\s+/g, ' ').trim() };
  }

  if (candidateDoc.type === 'education') {
    return { text: candidateDoc.content.replace(/\s+/g, ' ').trim() };
  }

  if (candidateDoc.type === 'experience') {
    return { text: candidateDoc.content.replace(/\s+/g, ' ').trim() };
  }

  if (candidateDoc.type === 'profile') {
    const link = candidateDoc.url;
    if (link) {
      return {
        text: `${candidateDoc.title} is available here:`,
        links: [{ label: candidateDoc.title, url: link }],
      };
    }
  }

  return { text: '{NOT_FOUND}' };
};
