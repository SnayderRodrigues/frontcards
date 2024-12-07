import { v4 as uuidv4 } from "uuid";
import AdobePhotoshop from "../assets/adobe-photoshop.svg";
import Blender from "../assets/blender.svg";
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
import Mobbin from "../assets/mobbin.svg";
import Next from "../assets/nextjs.svg";
import Notion from "../assets/notion.svg";
import Pinterest from "../assets/pinterest.svg";
import Prettier from "../assets/prettier.svg";
import React from "../assets/react.svg";
import Relume from "../assets/relume.svg";
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
import AugustoGalego from "../assets/Augusto Galego.png";
import ByHuy from "../assets/By Huy.png";
import ChrisDevInDev from "../assets/Chris DevInDev.png";
import CoderCoder from "../assets/Coder Coder.png";
import DesignCourse from "../assets/DesignCourse.png";
import Fireship from "../assets/Fireship.png";
import FluxAcademy from "../assets/Flux Academy.png";
import Hyperplexed from "../assets/Hyperplexed.png";
import Juxtopposed from "../assets/Juxtopposed.png";
import Kalypso from "../assets/Kalypso.png";
import KevinPowell from "../assets/Kevin Powell.png";
import LunDev from "../assets/Lun Dev.png";
import OlivierLarose from "../assets/Olivier Larose.png";
import Serliv from "../assets/Serliv.png";
import WebDevSimplified from "../assets/Web-Dev-Simplified.png";

const ResourcesData = [
  {
    id: uuidv4(),
    title: "Augusto Galego",
    image: AugustoGalego,
    category: "Creators",
    tags: ["Career", "Software Engineering"],
    slug: "augusto-galego",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.youtube.com/@GutoGalego",
  },
  {
    id: uuidv4(),
    title: "By Huy",
    image: ByHuy,
    category: "Creators",
    tags: ["Frontend", "UI/UX", "Web Design"],
    slug: "by-huy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.youtube.com/@by_huy",
  },
  {
    id: uuidv4(),
    title: "Chris DevInDev",
    image: ChrisDevInDev,
    category: "Creators",
    tags: ["Career", "Learning", "Mentoring"],
    slug: "chris-devindev",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.instagram.com/chrisdevindev/",
  },
  {
    id: uuidv4(),
    title: "Coder Coder",
    image: CoderCoder,
    category: "Creators",
    tags: ["Frontend", "Learning"],
    slug: "coder-coder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.youtube.com/@TheCoderCoder",
  },
  {
    id: uuidv4(),
    title: "DesignCourse",
    image: DesignCourse,
    category: "Creators",
    tags: ["Learning", "UI/UX"],
    slug: "designcourse",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.youtube.com/@DesignCourse",
  },
  {
    id: uuidv4(),
    title: "Fireship",
    image: Fireship,
    category: "Creators",
    tags: ["Information", "Learning"],
    slug: "fireship",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.youtube.com/@Fireship",
  },
  {
    id: uuidv4(),
    title: "Flux Academy",
    image: FluxAcademy,
    category: "Creators",
    tags: ["Learning", "UI/UX", "Web Design"],
    slug: "flux-academy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.youtube.com/@FluxAcademy",
  },
  {
    id: uuidv4(),
    title: "Hyperplexed",
    image: Hyperplexed,
    category: "Creators",
    tags: ["Animation", "Frontend", "Learning"],
    slug: "hyperplexed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.youtube.com/@Hyperplexed",
  },
  {
    id: uuidv4(),
    title: "Juxtopposed",
    image: Juxtopposed,
    category: "Creators",
    tags: ["Frontend", "UI/UX", "Web Design"],
    slug: "juxtopposed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.youtube.com/@juxtopposed",
  },
  {
    id: uuidv4(),
    title: "Kalypso",
    image: Kalypso,
    category: "Creators",
    tags: ["Inspiration", "Resources", "Web Design"],
    slug: "kalypso",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.instagram.com/kalypsodesigns/",
  },
  {
    id: uuidv4(),
    title: "Kevin Powell",
    image: KevinPowell,
    category: "Creators",
    tags: ["Frontend", "Learning"],
    slug: "kevin-powell",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.youtube.com/@KevinPowell",
  },
  {
    id: uuidv4(),
    title: "Lun Dev",
    image: LunDev,
    category: "Creators",
    tags: ["Animations", "Frontend", "Learning"],
    slug: "lun-dev",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.youtube.com/@LunDeveloper",
  },
  {
    id: uuidv4(),
    title: "Olivier Larose",
    image: OlivierLarose,
    category: "Creators",
    tags: ["Animations", "Frontend", "Learning"],
    slug: "olivier-larose",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.youtube.com/@olivierlarose1",
  },
  {
    id: uuidv4(),
    title: "Serliv",
    image: Serliv,
    category: "Creators",
    tags: ["Frontend", "Learning"],
    slug: "serliv",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.youtube.com/@serliv",
  },
  {
    id: uuidv4(),
    title: "Web Dev Simplified",
    image: WebDevSimplified,
    category: "Creators",
    tags: ["Fullstack", "Learning"],
    slug: "web-dev-simplified",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.youtube.com/@WebDevSimplified",
  },
  {
    id: uuidv4(),
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
    id: uuidv4(),
    title: "Blender",
    image: Blender,
    category: "Tools",
    tags: ["3D Modeling", "Animation"],
    slug: "blender",
    description:
      "An open-source 3D creation suite supporting the entirety of the 3D pipeline, including modeling, rigging, animation, simulation, and rendering.",
    source: "https://www.blender.org/",
  },
  {
    id: uuidv4(),
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
    id: uuidv4(),
    title: "Coursera",
    image: Coursera,
    category: "Learning",
    tags: ["Online Courses", "Education"],
    slug: "coursera",
    description:
      "An online learning platform offering courses, specializations, and degrees from top universities and companies.",
    source: "https://www.coursera.org/",
  },
  {
    id: uuidv4(),
    title: "Daily.dev",
    image: DailyDev,
    category: "Learning",
    tags: ["News", "Community"],
    slug: "daily-dev",
    description:
      "A personalized feed for developers that aggregates programming news and updates from across the web.",
    source: "https://daily.dev/",
  },
  {
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
    title: "MDN",
    image: Mdn,
    category: "Learning",
    tags: ["Documentation", "Reference"],
    slug: "mdn",
    description:
      "Mozilla Developer Network provides comprehensive web development documentation, tutorials, and guides.",
    source: "https://developer.mozilla.org/en-US/",
  },
  {
    id: uuidv4(),
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
    id: uuidv4(),
    title: "Mobbin",
    image: Mobbin,
    category: "Design",
    tags: ["Design Inspiration", "UI/UX"],
    slug: "mobbin",
    description:
      "A comprehensive library of mobile design patterns and user flows for inspiration and reference.",
    source: "https://mobbin.com/",
  },
  {
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
    title: "Relume",
    image: Relume,
    category: "Tools",
    tags: ["UI Design", "AI"],
    slug: "relume",
    description:
      "A tool to help designers and developers build Webflow sites faster with pre-designed components and style guides.",
    source: "https://www.relume.io/",
  },
  {
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
    title: "Stack Overflow",
    image: StackOverflow,
    category: "Learning",
    tags: ["Community", "Q&A"],
    slug: "stack-overflow",
    description:
      "A community-driven platform where developers ask questions and share knowledge.",
    source: "https://stackoverflow.com/",
  },
  {
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
    title: "Udemy",
    image: Udemy,
    category: "Learning",
    tags: ["Online Courses", "Education"],
    slug: "udemy",
    description:
      "A global learning platform offering a wide range of courses in various fields, taught by industry experts.",
    source: "https://www.udemy.com/",
  },
  {
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
