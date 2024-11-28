import AdobePhotoshop from "../assets/adobe-photoshop.svg";
import Behance from "../assets/behance.svg";
import CodePen from "../assets/codepen.svg";
import Coursera from "../assets/coursera.svg";
import DailyDev from "../assets/dailydev.svg";
import Dribbble from "../assets/dribbble.svg";
import Figma from "../assets/figma.svg";
import Framer from "../assets/framer.svg";
import GithubCopilot from "../assets/github-copilot.svg";
import Gsap from "../assets/greensock.svg";
import Jest from "../assets/jest.svg";
import Lighthouse from "../assets/lighthouse.svg";
import MaterialUI from "../assets/material-ui.svg";
import Mdn from "../assets/mdn.svg";
import Midjourney from "../assets/midjourney.svg";
import Next from "../assets/nextjs.svg";
import Notion from "../assets/notion.svg";
import Pinterest from "../assets/pinterest.svg";
import Prettier from "../assets/prettier.svg";
import React from "../assets/react.svg";
import Sketch from "../assets/sketch.svg";
import Sass from "../assets/sass.svg";
import StackOverflow from "../assets/stackoverflow.svg";
import Storybook from "../assets/storybook.svg";
import Tailwind from "../assets/tailwind.svg";
import ThreeJs from "../assets/threejs.svg";
import Udemy from "../assets/udemy.svg";
import Unsplash from "../assets/unsplash.svg";
import Vite from "../assets/vitejs.svg";
import Webflow from "../assets/webflow.svg";

const ResourcesData = [
  {
    id: 1,
    title: "Adobe Photoshop",
    image: AdobePhotoshop,
    category: "Tools",
    tags: ["Image Editing", "Graphics"],
    slug: "adobe-photoshop",
    description:
      "A powerful graphics editor for creating, editing, and enhancing digital images and designs.",
    source: "https://www.adobe.com/products/photoshop.html",
  },
  {
    id: 2,
    title: "Behance",
    image: Behance,
    category: "Design",
    tags: ["Portfolio", "Design Showcase"],
    slug: "behance",
    description:
      "A platform for showcasing and discovering creative work in fields like graphic design, photography, and illustration.",
    source: "https://www.behance.net/",
  },
  {
    id: 3,
    title: "CodePen",
    image: CodePen,
    category: "Development",
    tags: ["Community", "Prototyping"],
    slug: "codepen",
    description:
      "An online code editor and community for testing and sharing HTML, CSS, and JavaScript snippets.",
    source: "https://codepen.io/",
  },
  {
    id: 4,
    title: "Coursera",
    image: Coursera,
    category: "Knowledge & Learning",
    tags: ["Online Courses", "Education"],
    slug: "coursera",
    description:
      "An online learning platform offering courses, specializations, and degrees from top universities and companies.",
    source: "https://www.coursera.org/",
  },
  {
    id: 5,
    title: "Daily.dev",
    image: DailyDev,
    category: "Knowledge & Learning",
    tags: ["News", "Community"],
    slug: "daily-dev",
    description:
      "A personalized feed for developers that aggregates programming news and updates from across the web.",
    source: "https://daily.dev/",
  },
  {
    id: 6,
    title: "Dribbble",
    image: Dribbble,
    category: "Design",
    tags: ["UI/UX", "Inspiration"],
    slug: "dribbble",
    description:
      "A platform for showcasing, discovering, and connecting with designers and their work.",
    source: "https://dribbble.com/",
  },
  {
    id: 7,
    title: "Figma",
    image: Figma,
    category: "Design",
    tags: ["UI/UX", "Collaboration"],
    slug: "figma",
    description:
      "A collaborative interface design tool that allows teams to design, prototype, and gather feedback in real time.",
    source: "https://www.figma.com/",
  },
  {
    id: 8,
    title: "Framer",
    image: Framer,
    category: "Design",
    tags: ["Prototyping", "Animation"],
    slug: "framer",
    description:
      "An interactive design tool that enables designers to create high-fidelity prototypes with animations and transitions.",
    source: "https://www.framer.com/",
  },
  {
    id: 9,
    title: "GitHub Copilot",
    image: GithubCopilot,
    category: "Development",
    tags: ["AI", "Coding Assistant"],
    slug: "github-copilot",
    description:
      "An AI-powered code completion tool that suggests entire lines or functions as you type.",
    source: "https://github.com/features/copilot",
  },
  {
    id: 10,
    title: "GSAP",
    image: Gsap,
    category: "Development",
    tags: ["Animations", "Web"],
    slug: "gsap",
    description:
      "A JavaScript library for creating high-performance animations and transitions for web applications.",
    source: "https://gsap.com/",
  },
  {
    id: 11,
    title: "Jest",
    image: Jest,
    category: "Development",
    tags: ["Testing", "JavaScript"],
    slug: "jest",
    description:
      "A delightful JavaScript testing framework with a focus on simplicity and performance.",
    source: "https://jestjs.io/",
  },
  {
    id: 12,
    title: "Lighthouse",
    image: Lighthouse,
    category: "Tools",
    tags: ["Performance", "SEO"],
    slug: "lighthouse",
    description:
      "An open-source tool for auditing website performance, accessibility, and SEO.",
    source: "https://developer.chrome.com/docs/lighthouse/overview",
  },
  {
    id: 13,
    title: "Material UI",
    image: MaterialUI,
    category: "Development",
    tags: ["UI Components", "Design System"],
    slug: "material-ui",
    description:
      "A popular React UI framework for building modern, responsive, and accessible web applications.",
    source: "https://mui.com/",
  },
  {
    id: 14,
    title: "MDN",
    image: Mdn,
    category: "Knowledge & Learning",
    tags: ["Documentation", "Reference"],
    slug: "mdn",
    description:
      "Mozilla Developer Network provides comprehensive web development documentation, tutorials, and guides.",
    source: "https://developer.mozilla.org/en-US/",
  },
  {
    id: 15,
    title: "Midjourney",
    image: Midjourney,
    category: "Tools",
    tags: ["AI Art", "Generative"],
    slug: "midjourney",
    description:
      "An AI-powered platform for creating stunning artwork and designs through text prompts.",
    source: "https://www.midjourney.com/",
  },
  {
    id: 16,
    title: "Next.JS",
    image: Next,
    category: "Development",
    tags: ["Framework", "React"],
    slug: "nextjs",
    description:
      "A React-based framework for building server-rendered and static web applications with ease.",
    source: "https://nextjs.org/",
  },
  {
    id: 17,
    title: "Notion",
    image: Notion,
    category: "Tools",
    tags: ["Productivity", "Organization"],
    slug: "notion",
    description:
      "A versatile workspace that combines notes, tasks, databases, and more to organize your personal and professional life.",
    source: "https://www.notion.so/",
  },
  {
    id: 18,
    title: "Pinterest",
    image: Pinterest,
    category: "Design",
    tags: ["Inspiration", "Ideas"],
    slug: "pinterest",
    description:
      "A visual discovery engine for finding ideas and inspiration for projects, hobbies, and more.",
    source: "https://www.pinterest.com/",
  },
  {
    id: 19,
    title: "Prettier",
    image: Prettier,
    category: "Development",
    tags: ["Code Formatting", "JavaScript"],
    slug: "prettier",
    description:
      "An opinionated code formatter that enforces a consistent style across your codebase.",
    source: "https://prettier.io/",
  },
  {
    id: 20,
    title: "React",
    image: React,
    category: "Development",
    tags: ["Library", "UI"],
    slug: "react",
    description:
      "A JavaScript library for building user interfaces with a component-based architecture.",
    source: "https://react.dev/",
  },
  {
    id: 21,
    title: "Sass",
    image: Sass,
    category: "Development",
    tags: ["CSS Preprocessor", "Styles"],
    slug: "sass",
    description:
      "A preprocessor scripting language that is interpreted into CSS, adding features like variables and nesting.",
    source: "https://sass-lang.com/",
  },
  {
    id: 22,
    title: "Sketch",
    image: Sketch,
    category: "Design",
    tags: ["UI Design", "Prototyping"],
    slug: "sketch",
    description:
      "A vector graphics editor for designing user interfaces, prototypes, and digital products.",
    source: "https://www.sketch.com/",
  },
  {
    id: 23,
    title: "Stack Overflow",
    image: StackOverflow,
    category: "Knowledge & Learning",
    tags: ["Community", "Q&A"],
    slug: "stack-overflow",
    description:
      "A community-driven platform where developers ask questions and share knowledge.",
    source: "https://stackoverflow.com/",
  },
  {
    id: 24,
    title: "Storybook",
    image: Storybook,
    category: "Development",
    tags: ["UI Components", "Documentation"],
    slug: "storybook",
    description:
      "An open-source tool for building and documenting isolated UI components.",
    source: "https://storybook.js.org/",
  },
  {
    id: 25,
    title: "Tailwind CSS",
    image: Tailwind,
    category: "Development",
    tags: ["CSS Framework", "Utility-first"],
    slug: "tailwindcss",
    description:
      "A utility-first CSS framework for creating custom designs directly in your HTML.",
    source: "https://tailwindcss.com/",
  },
  {
    id: 26,
    title: "Three.JS",
    image: ThreeJs,
    category: "Development",
    tags: ["3D Graphics", "WebGL"],
    slug: "threejs",
    description:
      "A JavaScript library for creating 3D content in web applications using WebGL.",
    source: "https://threejs.org/",
  },
  {
    id: 27,
    title: "Udemy",
    image: Udemy,
    category: "Knowledge & Learning",
    tags: ["Online Courses", "Education"],
    slug: "udemy",
    description:
      "A global learning platform offering a wide range of courses in various fields, taught by industry experts.",
    source: "https://www.udemy.com/",
  },
  {
    id: 28,
    title: "Unsplash",
    image: Unsplash,
    category: "Design",
    tags: ["Resources", "Photography"],
    slug: "unsplash",
    description:
      "A platform providing high-quality, freely usable images shared by photographers around the world.",
    source: "https://unsplash.com/",
  },
  {
    id: 29,
    title: "Vite",
    image: Vite,
    category: "Development",
    tags: ["Build Tool", "Frontend"],
    slug: "vite",
    description:
      "A fast and modern frontend build tool that leverages native ES modules and offers lightning-fast hot module replacement.",
    source: "https://vite.dev/",
  },
  {
    id: 30,
    title: "Webflow",
    image: Webflow,
    category: "Design",
    tags: ["No-Code", "Web Design"],
    slug: "webflow",
    description:
      "A no-code platform for designing, building, and launching responsive websites visually, without writing code.",
    source: "https://www.webflow.com/",
  },
];

export default ResourcesData;
