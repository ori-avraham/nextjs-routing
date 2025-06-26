export const posts = [
  {
    id: 1,
    title: "Getting Started with React in 2025",
    slug: "getting-started-with-react-2025",
    author: "Jane Doe",
    date: "2025-06-20",
    content: `
React continues to dominate the frontend ecosystem in 2025. If you're just getting started, begin by installing Node.js, then set up your first app with Vite or Next.js...
    `,
    tags: ["react", "frontend", "javascript"],
    comments: [
      {
        id: 1,
        author: "devChris",
        date: "2025-06-21",
        text: "Great intro! Would love to see a part 2 with hooks.",
      },
      {
        id: 2,
        author: "lenaCode",
        date: "2025-06-21",
        text: "This helped me set up my first Vite project. Thanks!",
      },
      {
        id: 3,
        author: "franklinJS",
        date: "2025-06-22",
        text: "Can you explain more about component composition?",
      },
    ],
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS: Tips and Tricks",
    slug: "mastering-tailwind-css-tips-and-tricks",
    author: "John Smith",
    date: "2025-06-18",
    content: `
Tailwind CSS offers a utility-first approach to styling, making your design workflow faster and more consistent...
    `,
    tags: ["tailwind", "css", "design"],
    comments: [
      {
        id: 1,
        author: "sassFan",
        date: "2025-06-19",
        text: "Still love Less, but Tailwind is growing on me.",
      },
      {
        id: 2,
        author: "uiNinja",
        date: "2025-06-19",
        text: "Useful tips! Especially the dark mode strategy.",
      },
      {
        id: 3,
        author: "yunaDev",
        date: "2025-06-20",
        text: "Any advice for customizing Tailwind themes?",
      },
      {
        id: 4,
        author: "mrUtility",
        date: "2025-06-20",
        text: "Thanks! Saved me hours of trial and error.",
      },
      {
        id: 5,
        author: "zenon",
        date: "2025-06-21",
        text: "The typography plugin is a game changer.",
      },
      {
        id: 6,
        author: "amyCSS",
        date: "2025-06-22",
        text: "Can you share your favorite Tailwind components?",
      },
      {
        id: 7,
        author: "markdev",
        date: "2025-06-22",
        text: "I wish I found this post earlier!",
      },
      {
        id: 8,
        author: "kateUI",
        date: "2025-06-22",
        text: "The responsive section helped a lot.",
      },
    ],
  },
  {
    id: 3,
    title: "Why TypeScript Is Worth Learning in 2025",
    slug: "why-typescript-is-worth-learning-2025",
    author: "Emily Zhang",
    date: "2025-06-15",
    content: `
TypeScript has become the default for many professional JavaScript projects. It helps catch bugs early...
    `,
    tags: ["typescript", "javascript", "programming"],
    comments: [
      {
        id: 1,
        author: "tsFan",
        date: "2025-06-16",
        text: "After switching to TypeScript, I can’t go back.",
      },
      {
        id: 2,
        author: "devNewbie",
        date: "2025-06-17",
        text: "Is there a steep learning curve from JS?",
      },
      {
        id: 3,
        author: "mentorMike",
        date: "2025-06-17",
        text: "Love this! I show this article to new devs I mentor.",
      },
      {
        id: 4,
        author: "typeStrong",
        date: "2025-06-18",
        text: "Would love a cheat sheet summary of TS types.",
      },
      {
        id: 5,
        author: "dora",
        date: "2025-06-18",
        text: "Is TypeScript useful in small hobby projects too?",
      },
      {
        id: 6,
        author: "carlTheCoder",
        date: "2025-06-18",
        text: "Absolutely agree with every point.",
      },
      {
        id: 7,
        author: "hana",
        date: "2025-06-19",
        text: "Just started learning TS. This was motivating!",
      },
      {
        id: 8,
        author: "feJames",
        date: "2025-06-19",
        text: "Solid post. Should be part of every JS bootcamp.",
      },
      {
        id: 9,
        author: "alina",
        date: "2025-06-20",
        text: "Would you recommend starting a new project with TS right away?",
      },
      {
        id: 10,
        author: "zack",
        date: "2025-06-20",
        text: "Helpful examples. Thank you!",
      },
      {
        id: 11,
        author: "bugHunter",
        date: "2025-06-21",
        text: "TS has saved me so many hours of debugging.",
      },
      {
        id: 12,
        author: "nico",
        date: "2025-06-22",
        text: "Great write-up! Subscribed.",
      },
    ],
  },
  {
    id: 4,
    title: "Building an AI-Powered Blog with Next.js and OpenAI",
    slug: "building-ai-powered-blog-nextjs-openai",
    author: "Alex Kim",
    date: "2025-06-10",
    content: `
Integrating AI into your blog can improve content generation and recommendations...
    `,
    tags: ["ai", "nextjs", "openai", "blog"],
    comments: [
      {
        id: 1,
        author: "gptGuru",
        date: "2025-06-11",
        text: "Can you add code for calling the OpenAI API?",
      },
      {
        id: 2,
        author: "netlifyDev",
        date: "2025-06-11",
        text: "Love this use case. Bookmarked.",
      },
      {
        id: 3,
        author: "sophie",
        date: "2025-06-12",
        text: "More on RSC integration please!",
      },
      {
        id: 4,
        author: "aidanAI",
        date: "2025-06-12",
        text: "I’m building something similar—very helpful.",
      },
      {
        id: 5,
        author: "charlieCode",
        date: "2025-06-13",
        text: "How do you handle rate limits with OpenAI?",
      },
    ],
  },
  {
    id: 5,
    title: "Deploying a Full-Stack App on AWS EC2",
    slug: "deploying-fullstack-app-aws-ec2",
    author: "Nina Patel",
    date: "2025-06-05",
    content: `
Learn how to set up an EC2 instance, configure Nginx, and deploy your full-stack application...
    `,
    tags: ["aws", "deployment", "ec2", "fullstack"],
    comments: [
      {
        id: 1,
        author: "sysAdminSam",
        date: "2025-06-06",
        text: "Excellent checklist for setup. Saved it.",
      },
      {
        id: 2,
        author: "beginnerDev",
        date: "2025-06-07",
        text: "I got stuck on the Nginx config—any tips?",
      },
      {
        id: 3,
        author: "cloudNerd",
        date: "2025-06-07",
        text: "Worked like a charm with Ubuntu 24.04.",
      },
      {
        id: 4,
        author: "ericJS",
        date: "2025-06-08",
        text: "Please cover CI/CD next time!",
      },
      {
        id: 5,
        author: "paulaDev",
        date: "2025-06-08",
        text: "This was so clear and easy to follow. Thank you!",
      },
      {
        id: 6,
        author: "marioOps",
        date: "2025-06-09",
        text: "Don’t forget to secure your instance with a firewall!",
      },
    ],
  },
];
