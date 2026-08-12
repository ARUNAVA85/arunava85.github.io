/**
 * Projects data structure
 * Type-safe project definitions for the portfolio
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'test-automation-framework',
    title: 'Test Automation Framework',
    description:
      'Comprehensive automation testing framework built with Playwright for API, UI, and integration testing. Integrated with Azure DevOps for CI/CD.',
    technologies: ['Playwright', 'JavaScript', 'Azure DevOps', 'Tricentis Tosca'],
    links: {
      github: 'https://github.com/YOUR_USERNAME/test-automation-framework',
      demo: 'https://github.com/YOUR_USERNAME/test-automation-framework#readme',
    },
    featured: true,
  },
  {
    id: 'agentic-testing-system',
    title: 'Agentic Testing System',
    description:
      'Experimental system using autonomous agents for intelligent test case generation and execution. Demonstrates advanced testing patterns.',
    technologies: ['Python', 'LangChain', 'Claude API', 'Playwright'],
    links: {
      github: 'https://github.com/YOUR_USERNAME/agentic-testing',
      demo: 'https://medium.com/@YOUR_USERNAME/agentic-testing-post',
    },
    featured: true,
  },
  {
    id: 'dsa-solutions',
    title: 'DSA Problem Solutions',
    description:
      'Comprehensive solutions to data structures and algorithms problems. Building problem-solving skills for development roles.',
    technologies: ['TypeScript', 'JavaScript', 'Algorithms'],
    links: {
      github: 'https://github.com/YOUR_USERNAME/dsa-solutions',
    },
  },
  {
    id: 'api-performance-monitor',
    title: 'API Performance Monitor',
    description:
      'Real-time monitoring tool for API performance metrics. Built during transition to understand backend systems.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
    links: {
      github: 'https://github.com/YOUR_USERNAME/api-monitor',
    },
  },
];

// Filter featured projects (typically shown first)
export const featuredProjects = projects.filter((p) => p.featured);

// All projects
export const allProjects = projects;
