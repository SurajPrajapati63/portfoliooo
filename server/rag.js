import dotenv from 'dotenv';
import Groq from 'groq-sdk';
import { portfolioData } from './portfolioData.js';

dotenv.config();

const groq = process.env.GROQ_API_KEY ? new Groq({ apiKey: process.env.GROQ_API_KEY }) : null;
const groqModel = process.env.GROQ_MODEL || 'openai/gpt-oss-20b';

const portfolioDocuments = [
  {
    id: 'profile-about',
    source: 'portfolio',
    type: 'profile',
    title: 'Profile',
    content: `Name: ${portfolioData.profile.name}. Location: ${portfolioData.profile.location}. ${portfolioData.profile.about}. Education: ${portfolioData.profile.education}. Experience: ${portfolioData.profile.experience}. Email: ${portfolioData.profile.email}. GitHub: ${portfolioData.profile.github}. LinkedIn: ${portfolioData.profile.linkedin}.`,
    metadata: { source: 'portfolio', type: 'profile', title: 'Profile', url: portfolioData.profile.linkedin }
  },
  {
    id: 'skills-summary',
    source: 'portfolio',
    type: 'skills',
    title: 'Skills Summary',
    content: portfolioData.skills.summary,
    metadata: { source: 'portfolio', type: 'skills', title: 'Skills Summary' }
  },
  ...Object.entries(portfolioData.skills.categories).map(([key, values]) => ({
    id: `skills-${key}`,
    source: 'portfolio',
    type: 'skills',
    title: key,
    content: `${key}: ${values.join(', ')}.`,
    metadata: { source: 'portfolio', type: 'skills', title: key }
  })),
  ...portfolioData.projects.map((project, index) => ({
    id: `project-${index}`,
    source: 'portfolio',
    type: 'project',
    title: project.name,
    content: `${project.name} (${project.category}): ${project.description}. Technologies: ${project.technologies.join(', ')}. ${project.github ? `GitHub: ${project.github}.` : ''} ${project.liveUrl ? `Live URL: ${project.liveUrl}.` : ''}`,
    metadata: {
      source: 'portfolio',
      type: 'project',
      title: project.name,
      url: project.github || project.liveUrl || '',
    }
  })),
  {
    id: 'github-profile',
    source: 'github',
    type: 'profile',
    title: 'GitHub Profile',
    content: `GitHub profile: ${portfolioData.profile.github}.`,
    metadata: { source: 'github', type: 'profile', title: 'GitHub Profile', url: portfolioData.profile.github }
  },
  {
    id: 'linkedin-profile',
    source: 'linkedin',
    type: 'profile',
    title: 'LinkedIn Profile',
    content: `LinkedIn profile: ${portfolioData.profile.linkedin}.`,
    metadata: { source: 'linkedin', type: 'profile', title: 'LinkedIn Profile', url: portfolioData.profile.linkedin }
  },
  {
    id: 'resume-summary',
    source: 'resume',
    type: 'resume',
    title: 'Resume Summary',
    content: 'Suraj Prajapati is a Software Development Engineer Intern and full-stack developer based in Noida, India. His location is Noida, India. He has experience with Generative AI, LLM-based APIs, scalable backend services, React, Node.js, REST APIs, CI/CD, and the MERN stack.',
    metadata: { source: 'resume', type: 'resume', title: 'Resume Summary' }
  },
  {
    id: 'resume-tranzita',
    source: 'resume',
    type: 'experience',
    title: 'Tranzita Systems Experience',
    content: 'At Tranzita Systems, Suraj worked as an SDE Intern from May 2026 to August 2026. He integrated Generative AI and LLM-based APIs into workflows to automate report generation, collaborated with senior engineers on scalable backend services, built and optimized React, Node.js, and REST API features that improved performance by 25%, and set up CI/CD pipelines for automated testing and deployment.',
    metadata: { source: 'resume', type: 'experience', title: 'Tranzita Systems Experience' }
  },
  {
    id: 'resume-zidio',
    source: 'resume',
    type: 'experience',
    title: 'Zidio Development Experience',
    content: 'At Zidio Development, Suraj worked as a Web Developer from August 2024 to October 2024. He designed and implemented RESTful APIs that improved data handling efficiency by 20%, debugged, tested, and deployed features with the team, and developed full-stack web applications using the MERN stack: MongoDB, Express.js, React, and Node.js.',
    metadata: { source: 'resume', type: 'experience', title: 'Zidio Development Experience' }
  },
  {
    id: 'resume-education',
    source: 'resume',
    type: 'education',
    title: 'Resume Education',
    content: 'Suraj studied Bachelor of Technology in Computer Science and Engineering at Babu Banarasi Das University from July 2022 to June 2026. His expected graduation year is 2026, and he earned an 8.13 GPA.',
    metadata: { source: 'resume', type: 'education', title: 'Resume Education' }
  },
  {
    id: 'resume-job-listing',
    source: 'resume',
    type: 'project',
    title: 'Resume Project: Job Listing Portal',
    content: 'From August 2024 to September 2024, Suraj built a full-stack Job Listing Portal using Node.js, Express, and React. It enabled job seekers to browse and apply to listings, included job listing and application management for employers and candidates, used CORS-enabled REST APIs, and supported resume and document uploads with Multer.',
    metadata: { source: 'resume', type: 'project', title: 'Resume Project: Job Listing Portal' }
  },
  {
    id: 'resume-hospital',
    source: 'resume',
    type: 'project',
    title: 'Resume Project: AI Integrated Hospital Management',
    content: 'From December 2025 to January 2026, Suraj built an AI medical assistant using RAG and LLM APIs (Grok) for query handling and report summarization. He also built a full-stack hospital platform with FastAPI and Streamlit for records, appointments, and billing; implemented JWT authentication with RBAC and bcrypt hashing for 4 or more user roles; and designed a real-time dashboard that reduced manual reporting time by 30%.',
    metadata: { source: 'resume', type: 'project', title: 'Resume Project: AI Integrated Hospital Management' }
  },
  {
    id: 'resume-nomnom',
    source: 'resume',
    type: 'project',
    title: 'Resume Project: Nomnom Food Ordering and Delivery App',
    content: 'From February 2026 to March 2026, Suraj built a full-stack food delivery platform using the MERN stack with customer and admin interfaces. It included a real-time admin dashboard for order and delivery management, REST APIs for order placement, cart management, and order tracking, and search and filter functionality for menu items by cuisine, price, and ratings.',
    metadata: { source: 'resume', type: 'project', title: 'Resume Project: Nomnom Food Ordering and Delivery App' }
  },
  {
    id: 'resume-certifications',
    source: 'resume',
    type: 'certification',
    title: 'Resume Certifications',
    content: 'Suraj lists these certifications: Full Stack Generative and Agentic AI with Python from Udemy, AWS Training Certificate from Grastech, and Data Security Fundamentals from Udemy.',
    metadata: { source: 'resume', type: 'certification', title: 'Resume Certifications' }
  }
];

const normalize = (value = '') => value.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();

const stopWords = new Set(['about', 'are', 'does', 'for', 'give', 'has', 'his', 'how', 'is', 'me', 'of', 'tell', 'the', 'what', 'when', 'where', 'who', 'with', 'year']);

const expandQuery = (question) => {
  const normalizedQuestion = normalize(question);
  const expandedTerms = new Set(normalizedQuestion.split(' ').filter((token) => token.length > 2 && !stopWords.has(token)));

  if (/location|located|based|live|lives|city|place/.test(normalizedQuestion)) {
    ['location', 'located', 'based', 'noida', 'india'].forEach((term) => expandedTerms.add(term));
  }
  if (/graduat|education|degree|college|university|study|studied/.test(normalizedQuestion)) {
    ['graduation', 'graduate', 'education', 'degree', 'university', '2026'].forEach((term) => expandedTerms.add(term));
  }
  if (/certif|course|training/.test(normalizedQuestion)) {
    ['certification', 'certificate', 'course', 'training'].forEach((term) => expandedTerms.add(term));
  }
  if (/work|worked|job|employ|company|intern|experience/.test(normalizedQuestion)) {
    ['work', 'worked', 'employment', 'company', 'intern', 'experience'].forEach((term) => expandedTerms.add(term));
  }

  return { normalizedQuestion, terms: [...expandedTerms] };
};

const getRelevantDocuments = (question) => {
  const { normalizedQuestion, terms } = expandQuery(question);
  const tokens = terms;

  const scored = portfolioDocuments
    .map((doc) => {
      const haystack = normalize(`${doc.title} ${doc.content} ${doc.metadata?.title || ''}`);
      let score = 0;

      tokens.forEach((token) => {
        if (!token || token.length < 2) return;
        if (haystack.includes(token)) score += 3;
        if (doc.content.toLowerCase().includes(token) || doc.title.toLowerCase().includes(token)) score += 2;
      });

      if (normalizedQuestion.includes('skill') && doc.type === 'skills') score += 8;
      if (normalizedQuestion.includes('project') && doc.type === 'project') score += 8;
      if (normalizedQuestion.includes('github') && doc.metadata?.source === 'github') score += 9;
      if (normalizedQuestion.includes('linkedin') && doc.metadata?.source === 'linkedin') score += 9;
      if (normalizedQuestion.includes('experience') && (doc.type === 'profile' || doc.type === 'experience')) score += 5;
      if (normalizedQuestion.includes('education') && doc.type === 'education') score += 7;
      if (normalizedQuestion.includes('certif') && doc.type === 'certification') score += 9;
      if (normalizedQuestion.includes('resume') && doc.source === 'resume') score += 9;
      if (normalizedQuestion.includes('about') && doc.type === 'profile') score += 5;
      if ((normalizedQuestion.includes('react') || normalizedQuestion.includes('python')) && doc.content.toLowerCase().includes(normalizedQuestion)) score += 5;

      return { doc, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  const topK = normalizedQuestion.includes('skill') || normalizedQuestion.includes('project') || normalizedQuestion.includes('experience') || normalizedQuestion.includes('list') ? 10 : 6;
  return scored.slice(0, topK);
};

const buildContext = (question) => {
  const scoredDocuments = getRelevantDocuments(question);
  const relevantDocuments = scoredDocuments.map((entry) => entry.doc);
  const context = relevantDocuments
    .map((doc) => `[${doc.metadata?.source || doc.source}] ${doc.title}: ${doc.content}`)
    .join('\n\n');

  return {
    relevantDocuments,
    scoredDocuments,
    context,
  };
};

const makeGroundedAnswer = async (question) => {
  const { context, relevantDocuments, scoredDocuments } = buildContext(question);

  console.log('RAG USER QUESTION:', question);
  console.log('RAG RETRIEVED CHUNKS:', relevantDocuments.map((doc) => doc.title));
  console.log('RAG SIMILARITY SCORES:', scoredDocuments.map(({ doc, score }) => ({ title: doc.title, score })));
  console.log('RAG FINAL CONTEXT:', context);

  if (!relevantDocuments.length) {
    return {
      answer: "I couldn't find that information in Suraj's portfolio.",
      debug: { question, retrievedChunks: [], scores: [], finalContext: '' },
    };
  }

  const systemPrompt = `You are Suraj Prajapati's personal portfolio assistant. Your ONLY source of truth is the PORTFOLIO CONTEXT provided below. Answer questions using only explicitly supported information. Do not use outside knowledge or invent facts. If the information is not supported by the context, reply exactly: I couldn't find that information in Suraj's portfolio. Keep your answer concise, professional, and natural.\n\nPORTFOLIO CONTEXT:\n${context}\n\nUSER QUESTION:\n${question}\n\nANSWER:`;

  try {
    if (!groq) {
      console.error('Groq error: GROQ_API_KEY is not configured.');
      return {
        answer: 'The portfolio assistant is not configured yet. Add GROQ_API_KEY to the server environment.',
        debug: { question, retrievedChunks: scoredDocuments.map(({ doc, score }) => ({ title: doc.title, source: doc.metadata?.source || doc.source, score })), scores: [], finalContext: context },
      };
    }

    const completion = await groq.chat.completions.create({
      model: groqModel,
      temperature: 0,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: question },
      ],
    });

    const answer = completion.choices?.[0]?.message?.content?.trim() || "I couldn't find that information in Suraj's portfolio.";

    return {
      answer,
      debug: {
        question,
        retrievedChunks: scoredDocuments.map(({ doc, score }) => ({ title: doc.title, source: doc.metadata?.source || doc.source, score })),
        scores: scoredDocuments.map(({ doc, score }) => ({ title: doc.title, source: doc.metadata?.source || doc.source, score })),
        finalContext: context,
      },
    };
  } catch (error) {
    console.error('Groq error:', error);
    return {
      answer: "I couldn't answer that right now. Please try again in a moment.",
      debug: { question, retrievedChunks: relevantDocuments.map((doc) => doc.title), scores: [], finalContext: context },
    };
  }
};

export { buildContext, makeGroundedAnswer, portfolioDocuments };
