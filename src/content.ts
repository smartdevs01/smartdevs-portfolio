/**
 * Central, editable content for the portfolio.
 * Update values here to change text across the site — no code digging needed.
 */

export const profile = {
  name: 'Smartdevs',
  logoInitials: 'SD',
  role: 'Software Developer & Aspiring Software Engineer',
  tagline: 'Building practical, reliable, and meaningful digital solutions.',
  email: 'smartsavage28@gmail.com',
  githubAvailable: true,
  github: 'https://github.com/smartdevs01/smartdevs-portfolio.git',
  linkedinAvailable: false,
  linkedin: '',
  social: [
    { label: 'Email', href: 'mailto:smartsavage28@gmail.com', icon: 'mail' as const },
  ],
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  headline: 'Software Developer & Aspiring Software Engineer',
  subtext:
    "I'm Smartdevs, a passionate learner building my skills in software development, Java programming, and problem-solving. My goal is to create practical, reliable, and meaningful digital solutions while growing into a skilled software engineer.",
  primaryCta: { label: 'Explore My Projects', href: '#projects' },
  secondaryCta: { label: 'Contact Me', href: '#contact' },
};

export const about = {
  paragraphs: [
    "I'm Smartdevs — an aspiring software engineer learning programming one step at a time. My journey started with curiosity about how the apps and tools we use every day actually work, and that curiosity has grown into a real commitment to building useful software.",
    "Right now I'm focused on the fundamentals: Java programming, object-oriented design, algorithms, and problem-solving. I practice deliberately, write code I can understand and revisit, and treat every project as a chance to learn something concrete.",
    "I'm honest about where I am — early in my journey, still developing my craft, and excited to keep growing. I care about building practical, reliable, and meaningful solutions, and I believe steady, consistent practice is what turns a beginner into a confident engineer.",
  ],
  highlights: [
    { title: 'Problem-Solving First', body: 'I enjoy breaking complex problems into smaller, solvable pieces.' },
    { title: 'Learning by Building', body: 'Every project is a chance to learn something new and concrete.' },
    { title: 'Honest & Growing', body: "I'm upfront that I'm early in my journey — and committed to growing." },
  ],
};

export type SkillStatus = 'learning' | 'foundational';

export const skills: { name: string; status: SkillStatus; blurb: string }[] = [
  { name: 'Java', status: 'learning', blurb: 'Building console applications; practicing syntax, control flow, and the core libraries.' },
  { name: 'Object-Oriented Programming', status: 'learning', blurb: 'Classes, inheritance, encapsulation, and designing clean program structure.' },
  { name: 'Algorithms', status: 'learning', blurb: 'Studying sorting, searching, and common patterns to think more efficiently.' },
  { name: 'Problem-Solving', status: 'foundational', blurb: 'Breaking problems down, debugging patiently, and reasoning through edge cases.' },
  { name: 'HTML', status: 'learning', blurb: 'Structuring web pages semantically and accessibly.' },
  { name: 'CSS', status: 'learning', blurb: 'Styling, responsive layouts, and modern visual design fundamentals.' },
  { name: 'JavaScript', status: 'learning', blurb: 'Adding interactivity and logic to web pages.' },
  { name: 'Git', status: 'learning', blurb: 'Version control basics: commits, history, and tracking changes.' },
  { name: 'GitHub', status: 'learning', blurb: 'Remote repositories, branches, and collaboration workflows.' },
];

export type ProjectStatus = 'wip' | 'planned';

export const projects: {
  title: string;
  status: ProjectStatus;
  description: string;
  features: string[];
  tech: string[];
  liveUrl?: string;
  sourceUrl?: string;
}[] = [
  {
    title: 'Smart Age Calculator',
    status: 'wip',
    description:
      "A program designed to calculate a person's age accurately using their date of birth.",
    features: [
      'Years, months, and days calculation',
      'Input validation',
      'Leap-year handling',
      'Clear results',
    ],
    tech: ['Java', 'Conditional statements', 'Date calculations', 'Input validation'],
  },
  {
    title: 'Smart Multifunction Calculator',
    status: 'wip',
    description:
      'A Java calculator designed to perform common mathematical operations with clear results and error handling.',
    features: [
      'Arithmetic operations',
      'Percentages',
      'Supported calculations as development continues',
    ],
    tech: ['Java', 'Methods', 'Conditional statements', 'Exception handling', 'Scanner input'],
  },
  {
    title: 'Smart Expense Tracker',
    status: 'planned',
    description:
      'A planned application for tracking income, expenses, and personal balances.',
    features: [
      'Add transactions',
      'Categorize expenses',
      'Calculate balances',
      'Summarize spending',
    ],
    tech: ['Java', 'Appropriate data structures'],
  },
];

export const services: {
  title: string;
  description: string;
  icon: 'code' | 'sparkles' | 'globe' | 'puzzle';
}[] = [
  {
    title: 'Java Applications',
    description:
      'Developing beginner-level Java applications and programming projects while strengthening object-oriented design and core coding fundamentals.',
    icon: 'code',
  },
  {
    title: 'Website Development',
    description:
      'Creating responsive, thoughtful websites with HTML, CSS, JavaScript, and React while continuing to build strong web development fundamentals.',
    icon: 'sparkles',
  },
  {
    title: 'Software Prototyping',
    description:
      'Exploring basic software problem-solving and application prototypes that turn ideas into clear, practical starting points.',
    icon: 'globe',
  },
  {
    title: 'Portfolio & Digital Projects',
    description:
      'Developing personal portfolios and digital projects as a way to practise design, implementation, and presenting work clearly.',
    icon: 'puzzle',
  },
];

export const journey: { phase: string; title: string; description: string }[] = [
  {
    phase: 'Step 01',
    title: 'Learning Programming Fundamentals',
    description:
      'Building a foundation in programming concepts, logical thinking, and the habits needed to write understandable code.'
  },
  {
    phase: 'Step 02',
    title: 'Practising Java & OOP',
    description:
      'Developing Java skills through regular practice with object-oriented programming, methods, control flow, and structured code.'
  },
  {
    phase: 'Step 03',
    title: 'Building Practical Projects',
    description:
      "Applying what I've learned to projects such as calculators and an age calculator, turning concepts into useful practice.",
  },
  {
    phase: 'Step 04',
    title: 'Learning Web Development',
    description:
      'Exploring HTML, CSS, and JavaScript while creating this portfolio and learning how to present digital work on the web.'
  },
  {
    phase: 'Step 05',
    title: 'Toward Software Engineering',
    description:
      'Continuing to grow toward a full software engineering role — deeper architecture, real collaboration, and larger systems.',
  },
];
