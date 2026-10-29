/**
 * Central, editable content for the portfolio.
 * Update values here to change text across the site. Items marked PENDING need your input.
 */

export const profile = {
  name: 'Smartdevs',
  logoInitials: 'SD',
  role: 'Software Developer & Aspiring Software Engineer',
  tagline: 'Building practical, reliable, and meaningful digital solutions.',
  email: 'smartsavage28@gmail.com',
  github: 'https://github.com/smartdevs01/smartdevs-portfolio.git',
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Education', to: '/education' },
  { label: 'Contact', to: '/contact' },
];

export const hero = {
  headline: 'Software Developer & Aspiring Software Engineer',
  subtext:
    "I'm Smartdevs, a passionate learner building my skills in software development, Java programming, and problem-solving. My goal is to create practical, reliable, and meaningful digital solutions while growing into a skilled software engineer.",
  primaryCta: { label: 'View My Projects', to: '/projects' },
  secondaryCta: { label: 'About Me', to: '/about' },
};

export const PENDING = 'PENDING';

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
  interests: [
    'Java and object-oriented program design',
    'Algorithms and structured problem-solving',
    'Web development with HTML, CSS, and JavaScript',
    'Practical tools that solve everyday problems',
  ],
  goals: [
    'Grow into a skilled software engineer',
    'Build practical, reliable, and meaningful digital solutions',
    'Keep learning through consistent practice and finished projects',
  ],
  experience: PENDING,
};

export type SkillStatus = 'learning' | 'foundational';
export type SkillCategory = 'Programming' | 'Web' | 'Tools';

export const skills: {
  name: string;
  status: SkillStatus;
  category: SkillCategory;
  blurb: string;
}[] = [
  { name: 'Java', status: 'learning', category: 'Programming', blurb: 'Building console applications; practicing syntax, control flow, and the core libraries.' },
  { name: 'Object-Oriented Programming', status: 'learning', category: 'Programming', blurb: 'Classes, inheritance, encapsulation, and designing clean program structure.' },
  { name: 'Algorithms', status: 'learning', category: 'Programming', blurb: 'Studying sorting, searching, and common patterns to think more efficiently.' },
  { name: 'Problem-Solving', status: 'foundational', category: 'Programming', blurb: 'Breaking problems down, debugging patiently, and reasoning through edge cases.' },
  { name: 'HTML', status: 'learning', category: 'Web', blurb: 'Structuring web pages semantically and accessibly.' },
  { name: 'CSS', status: 'learning', category: 'Web', blurb: 'Styling, responsive layouts, and modern visual design fundamentals.' },
  { name: 'JavaScript', status: 'learning', category: 'Web', blurb: 'Adding interactivity and logic to web pages.' },
  { name: 'Git', status: 'learning', category: 'Tools', blurb: 'Version control basics: commits, history, and tracking changes.' },
  { name: 'GitHub', status: 'learning', category: 'Tools', blurb: 'Remote repositories, branches, and collaboration workflows.' },
];

export type ProjectStatus = 'wip' | 'planned';

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  image: { src: string; alt: string };
  demoUrl?: string;
  repoUrl?: string;
  challenges: string;
  lessons: string;
};

export const projects: Project[] = [
  {
    slug: 'age-calculator',
    title: 'Smart Age Calculator',
    status: 'wip',
    description:
      "A program designed to calculate a person's age accurately using their date of birth.",
    problem:
      'Working out an exact age by hand, especially across months, days, and leap years, is easy to get wrong.',
    solution:
      'A Java program that takes a date of birth, validates the input, and calculates the age in years, months, and days.',
    features: [
      'Years, months, and days calculation',
      'Input validation',
      'Leap-year handling',
      'Clear results',
    ],
    tech: ['Java', 'Conditional statements', 'Date calculations', 'Input validation'],
    image: {
      src: 'https://images.pexels.com/photos/6345291/pexels-photo-6345291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Hand writing in a notebook beside a calculator and laptop',
    },
    challenges: PENDING,
    lessons: PENDING,
  },
  {
    slug: 'loan-calculator',
    title: 'Loan Calculator',
    status: 'wip',
    description:
      'A Java learning project that works out loan repayments from the amount borrowed, the interest rate, and the repayment term.',
    problem:
      'Working out loan repayments by hand, including how much interest is paid over time, is tedious and easy to get wrong.',
    solution:
      'A Java program that takes the loan details and calculates the repayment amount and the total cost of the loan.',
    features: [
      'Repayment amount calculation (PENDING)',
      'Total interest summary (PENDING)',
    ],
    tech: ['Java', 'Apache NetBeans IDE 25', 'Arithmetic and formulas'],
    image: {
      src: 'https://images.pexels.com/photos/8292895/pexels-photo-8292895.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Hands analysing mortgage rate documents with a pen and calculator',
    },
    challenges: PENDING,
    lessons: PENDING,
  },
  {
    slug: 'smart-multifunction-calculator',
    title: 'Smart Multifunction Calculator',
    status: 'wip',
    description:
      'A Java calculator designed to perform common mathematical operations with clear results and error handling.',
    problem:
      'Everyday calculations need clear results, and a calculator should respond sensibly when the input is invalid.',
    solution:
      'A Java console calculator that organizes its operations into methods, handles percentages and arithmetic, and reports errors through exception handling.',
    features: [
      'Arithmetic operations',
      'Percentages',
      'Additional supported calculations (PENDING)',
    ],
    tech: ['Java', 'Methods', 'Conditional statements', 'Exception handling', 'Scanner input'],
    image: {
      src: 'https://images.pexels.com/photos/5877591/pexels-photo-5877591.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Hands using a calculator while writing equations in a notebook',
    },
    challenges: PENDING,
    lessons: PENDING,
  },
  {
    slug: 'smart-expense-tracker',
    title: 'Smart Expense Tracker',
    status: 'planned',
    description:
      'A planned application for tracking income, expenses, and personal balances.',
    problem:
      'Without a clear record of income and spending, it is hard to see where money goes each month.',
    solution:
      'A planned Java application that will record transactions, categorize expenses, calculate balances, and summarize spending.',
    features: [
      'Add transactions',
      'Categorize expenses',
      'Calculate balances',
      'Summarize spending',
    ],
    tech: ['Java', 'Appropriate data structures'],
    image: {
      src: 'https://images.pexels.com/photos/5900184/pexels-photo-5900184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Person writing in a planner while using a calculator for budgeting',
    },
    challenges: PENDING,
    lessons: PENDING,
  },
];

export type ExperienceCategory = 'employment' | 'internship' | 'freelance' | 'independent';

export type ExperienceEntry = {
  category: ExperienceCategory;
  title: string;
  organization: string;
  start: string;
  end?: string;
  description: string;
  technologies: string[];
  link?: string;
};

export const experienceCategories: { value: ExperienceCategory; label: string; empty: string }[] = [
  { value: 'employment', label: 'Employment', empty: 'No verified employment history has been added yet.' },
  { value: 'internship', label: 'Internships', empty: 'No internships have been added yet.' },
  { value: 'freelance', label: 'Freelance Work', empty: 'No freelance client work has been added yet.' },
  { value: 'independent', label: 'Independent Projects', empty: 'No independent projects have been added yet.' },
];

// Add verified entries here. Learning exercises belong in education, not employment.
export const experience: ExperienceEntry[] = [];

export type EducationStatus = 'completed' | 'ongoing';

export type EducationEntry = {
  institution: string;
  qualification: string;
  subject: string;
  start: string;
  end?: string;
  status: EducationStatus;
  certificateUrl?: string;
};

// Only verified qualifications should be listed as completed.
export const education: EducationEntry[] = [
  {
    institution: 'Self-directed study',
    qualification: 'Independent learning',
    subject: 'Java programming using Apache NetBeans IDE 25',
    start: PENDING,
    status: 'ongoing',
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
      'Building a foundation in programming concepts, logical thinking, and the habits needed to write understandable code.',
  },
  {
    phase: 'Step 02',
    title: 'Practising Java & OOP',
    description:
      'Developing Java skills through regular practice with object-oriented programming, methods, control flow, and structured code.',
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
      'Exploring HTML, CSS, and JavaScript while creating this portfolio and learning how to present digital work on the web.',
  },
  {
    phase: 'Step 05',
    title: 'Toward Software Engineering',
    description:
      'Continuing to grow toward a full software engineering role — deeper architecture, real collaboration, and larger systems.',
  },
];
