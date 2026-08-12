/**
 * Skills and technology stack data
 * Organized by category for the Skills section
 */

export interface SkillCategory {
  name: string;
  description: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    name: 'Automation Testing',
    description: 'Core expertise in test automation frameworks and tools',
    skills: [
      'Tricentis Tosca',
      'Playwright',
      'Selenium',
      'API Testing',
      'UI Testing',
      'DI Testing',
      'Test Framework Design',
    ],
  },
  {
    name: 'Development',
    description: 'Backend and full-stack development with modern frameworks',
    skills: [
      'JavaScript/TypeScript',
      'Node.js',
      'React',
      'Express.js',
      'Python',
      'SQL',
      'RESTful APIs',
    ],
  },
  {
    name: 'DevOps & Tools',
    description: 'CI/CD pipelines, version control, and infrastructure',
    skills: [
      'Azure DevOps',
      'GitHub',
      'Docker',
      'GitHub Actions',
      'qTest',
      'Git',
      'Linux',
    ],
  },
  {
    name: 'System Design & DSA',
    description: 'Building scalable systems and solving complex problems',
    skills: [
      'System Design',
      'Microservices',
      'Data Structures',
      'Algorithms',
      'Scalability',
      'Database Design',
      'Caching Strategies',
    ],
  },
  {
    name: 'Emerging Technologies',
    description: 'Exploring cutting-edge tools and approaches',
    skills: [
      'Agentic Engineering',
      'AI Integration',
      'Claude API',
      'LangChain',
      'Prompt Engineering',
      'Autonomous Agents',
    ],
  },
];
