/**
 * Tech blog posts - external Medium links
 * Each entry links to a Medium post; clicking the card opens it in a new tab
 * This keeps content centralized on Medium while showcasing it on the portfolio
 */

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string; // ISO format: YYYY-MM-DD
  tags: string[];
  mediumUrl: string; // Full URL to the Medium post
  coverImage?: string; // Optional: image URL for visual appeal
}

export const blogPosts: BlogPost[] = [
  {
    id: 'transitioning-qa-dev',
    title: 'Transitioning from QA to Product Development: My Journey',
    excerpt:
      'Lessons learned from 5+ years in test automation to stepping into full-stack development. Mistakes to avoid and skills that transfer.',
    date: '2024-08-10',
    tags: ['career', 'QA', 'testing', 'development'],
    mediumUrl: 'https://medium.com/@YOUR_USERNAME/transitioning-qa-dev',
    coverImage:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400',
  },
  {
    id: 'agentic-testing-101',
    title: 'Agentic Engineering in Testing: A Practical Guide',
    excerpt:
      'How autonomous agents can revolutionize test automation. Building intelligent test cases with Claude and LangChain.',
    date: '2024-07-20',
    tags: ['agentic-ai', 'testing', 'automation', 'agents'],
    mediumUrl: 'https://medium.com/@YOUR_USERNAME/agentic-testing-101',
    coverImage:
      'https://images.unsplash.com/photo-1677442d019cecf8d4a1e5b3eae27f1f4?w=800&h=400',
  },
  {
    id: 'playwright-vs-tosca',
    title: 'Playwright vs Tricentis Tosca: Choosing the Right Tool',
    excerpt:
      'Comparison of two powerful test automation tools. When to use each, pros/cons, and my experience migrating between them.',
    date: '2024-06-15',
    tags: ['testing', 'playwright', 'tosca', 'automation'],
    mediumUrl: 'https://medium.com/@YOUR_USERNAME/playwright-vs-tosca',
    coverImage:
      'https://images.unsplash.com/photo-1517694712139-48d2ceaa28c5?w=800&h=400',
  },
  {
    id: 'dsa-interview-prep',
    title: 'DSA Interview Prep: Tips from an Automation Engineer',
    excerpt:
      'Preparing for tech interviews as someone from a QA background. How to approach data structures and algorithms effectively.',
    date: '2024-05-22',
    tags: ['interviews', 'dsa', 'career', 'learning'],
    mediumUrl: 'https://medium.com/@YOUR_USERNAME/dsa-interview-prep',
    coverImage:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400',
  },
];

// Optional: Get posts by tag
export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post) =>
    post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

// Optional: Get latest N posts
export function getLatestPosts(limit: number = 3): BlogPost[] {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
