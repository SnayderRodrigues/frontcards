import { v4 as uuidv4 } from "uuid";
import AdobeIllustrator from "../assets/adobe-illustrator.svg";
import AdobePhotoshop from "../assets/adobe-photoshop.svg";
import AugustoGalego from "../assets/Augusto Galego.png";
import Awwwards from "../assets/awwwards.svg";
import Blender from "../assets/blender.svg";
import ByHuy from "../assets/By Huy.png";
import CanIUse from "../assets/caniuse.png";
import ChrisDevInDev from "../assets/Chris DevInDev.png";
import CodePen from "../assets/codepen.svg";
import CoderCoder from "../assets/Coder Coder.png";
import Coursera from "../assets/coursera.svg";
import DailyDev from "../assets/dailydev.svg";
import DesignCourse from "../assets/DesignCourse.png";
import Dribbble from "../assets/dribbble.svg";
import Figma from "../assets/figma.svg";
import Fireship from "../assets/Fireship.png";
import FluxAcademy from "../assets/Flux Academy.png";
import Fontshare from "../assets/fontshare.svg";
import Framer from "../assets/framer.svg";
import FreeCodeCamp from "../assets/freecodecamp.svg";
import FrontendMentor from "../assets/frontend-mentor.svg";
import GithubCopilot from "../assets/github-copilot.svg";
import Gsap from "../assets/greensock.svg";
import Hyperplexed from "../assets/Hyperplexed.png";
import Jest from "../assets/jest.svg";
import Juxtopposed from "../assets/Juxtopposed.png";
import Kalypso from "../assets/Kalypso.png";
import KevinPowell from "../assets/Kevin Powell.png";
import Lighthouse from "../assets/lighthouse.svg";
import LunDev from "../assets/Lun Dev.png";
import MaterialUI from "../assets/material-ui.svg";
import MaxiBestOf from "../assets/maxibestof.png";
import Mdn from "../assets/mdn.svg";
import Midjourney from "../assets/midjourney.svg";
import Mobbin from "../assets/mobbin.svg";
import Next from "../assets/nextjs.svg";
import Notion from "../assets/notion.svg";
import OlivierLarose from "../assets/Olivier Larose.png";
import Pinterest from "../assets/pinterest.svg";
import Prettier from "../assets/prettier.svg";
import React from "../assets/react.svg";
import Relume from "../assets/relume.svg";
import Roadmap from "../assets/roadmap-sh.svg";
import Sass from "../assets/sass.svg";
import Serliv from "../assets/Serliv.png";
import Sketch from "../assets/sketch.svg";
import Spline from "../assets/spline.png";
import StackOverflow from "../assets/stackoverflow.svg";
import Storybook from "../assets/storybook.svg";
import Tailwind from "../assets/tailwind.svg";
import ThreeJs from "../assets/threejs.svg";
import TinyPNG from "../assets/tinypng.svg";
import Udemy from "../assets/udemy.svg";
import Uiverse from "../assets/uiverse.svg";
import Uncut from "../assets/uncut.svg";
import Unsplash from "../assets/unsplash.svg";
import Vite from "../assets/vitejs.svg";
import W3Schools from "../assets/w3schools.svg";
import WebDevSimplified from "../assets/Web-Dev-Simplified.png";
import Webflow from "../assets/webflow.svg";

const ResourcesData = [
  {
    id: uuidv4(),
    title: "Adobe Illustrator",
    image: AdobeIllustrator,
    category: "Tools",
    tags: ["Illustration", "Vector Graphics"],
    slug: "adobe-illustrator",
    description:
      "A vector graphics editor for creating illustrations, logos, and other scalable graphics.",
    source: "https://www.adobe.com/products/illustrator.html",
  },
  {
    id: uuidv4(),
    title: "Adobe Photoshop",
    image: AdobePhotoshop,
    category: "Tools",
    tags: ["Graphic Design", "Image Editing"],
    slug: "adobe-photoshop",
    description:
      "A powerful graphics editor for creating, editing, and enhancing digital images and designs.",
    source: "https://www.adobe.com/products/photoshop.html",
  },
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
    title: "Awwwards",
    image: Awwwards,
    category: "Design",
    tags: ["Inspiration", "Web Design"],
    slug: "awwwards",
    description:
      "A platform that showcases and awards the best web design projects from around the world.",
    source: "https://www.awwwards.com/",
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
    title: "Can I Use",
    image: CanIUse,
    category: "Tools",
    tags: ["Browser Support", "Web Tool"],
    slug: "can-i-use",
    description:
      "Can I use provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.",
    source: "https://caniuse.com/",
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
    title: "Coder Coder",
    image: CoderCoder,
    category: "Creators",
    tags: ["Frontend", "Learning"],
    slug: "coder-coder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.youtube.com/@TheCoderCoder",
  },
  // {
  //   id: uuidv4(),
  //   title: "Coursera",
  //   image: Coursera,
  //   category: "Learning",
  //   tags: ["Education", "Online Courses"],
  //   slug: "coursera",
  //   description:
  //     "An online learning platform offering courses, specializations, and degrees from top universities and companies.",
  //   source: "https://www.coursera.org/",
  // },
  {
    id: uuidv4(),
    title: "Daily.dev",
    image: DailyDev,
    category: "Learning",
    tags: ["Community", "News"],
    slug: "daily-dev",
    description:
      "A personalized feed for developers that aggregates programming news and updates from across the web.",
    source: "https://daily.dev/",
  },
  // {
  //   id: uuidv4(),
  //   title: "DesignCourse",
  //   image: DesignCourse,
  //   category: "Creators",
  //   tags: ["Learning", "UI/UX"],
  //   slug: "designcourse",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
  //   source: "https://www.youtube.com/@DesignCourse",
  // },
  {
    id: uuidv4(),
    title: "Dribbble",
    image: Dribbble,
    category: "Design",
    tags: ["Inspiration", "UI/UX"],
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
    tags: ["Collaboration", "UI/UX"],
    slug: "figma",
    description:
      "A collaborative interface design tool that allows teams to design, prototype, and gather feedback in real time.",
    source: "https://www.figma.com/",
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
    title: "Fontshare",
    image: Fontshare,
    category: "Design",
    tags: ["Assets", "Typography"],
    slug: "fontshare",
    description:
      "A free font service by Indian Type Foundry for professional-grade fonts.",
    source: "https://www.fontshare.com/",
  },
  // {
  //   id: uuidv4(),
  //   title: "Framer",
  //   image: Framer,
  //   category: "Design",
  //   tags: ["Animation", "Prototyping"],
  //   slug: "framer",
  //   description:
  //     "An interactive design tool that enables designers to create high-fidelity prototypes with animations and transitions.",
  //   source: "https://www.framer.com/",
  // },
  {
    id: uuidv4(),
    title: "freeCodeCamp",
    image: FreeCodeCamp,
    category: "Learning",
    tags: ["Learning Resources", "Programming"],
    slug: "freecodecamp",
    description:
      "An open-source platform offering coding lessons, projects, and certifications for developers.",
    source: "https://www.freecodecamp.org/",
  },
  {
    id: uuidv4(),
    title: "Frontend Mentor",
    image: FrontendMentor,
    category: "Learning",
    tags: ["Frontend", "Practice Challenges"],
    slug: "frontend-mentor",
    description:
      "A platform offering front-end coding challenges to help improve coding and design skills.",
    source: "https://www.frontendmentor.io/",
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
    tags: ["Animations", "Web Development"],
    slug: "gsap",
    description:
      "A JavaScript library for creating high-performance animations and transitions for web applications.",
    source: "https://gsap.com/",
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
  // {
  //   id: uuidv4(),
  //   title: "Jest",
  //   image: Jest,
  //   category: "Development",
  //   tags: ["JavaScript", "Testing"],
  //   slug: "jest",
  //   description:
  //     "A delightful JavaScript testing framework with a focus on simplicity and performance.",
  //   source: "https://jestjs.io/",
  // },
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
    title: "Material UI",
    image: MaterialUI,
    category: "Development",
    tags: ["Design System", "UI Components"],
    slug: "material-ui",
    description:
      "A popular React UI framework for building modern, responsive, and accessible web applications.",
    source: "https://mui.com/",
  },
  {
    id: uuidv4(),
    title: "MaxiBestOf",
    image: MaxiBestOf,
    category: "Design",
    tags: ["Inspiration", "Web Design"],
    slug: "maxibestof",
    description:
      "A curated gallery of modern web design and user interfaces for inspiration.",
    source: "https://maxibestof.one/",
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
  // {
  //   id: uuidv4(),
  //   title: "Mobbin",
  //   image: Mobbin,
  //   category: "Design",
  //   tags: ["Design Inspiration", "UI/UX"],
  //   slug: "mobbin",
  //   description:
  //     "A comprehensive library of mobile design patterns and user flows for inspiration and reference.",
  //   source: "https://mobbin.com/",
  // },
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
    tags: ["Organization", "Productivity"],
    slug: "notion",
    description:
      "A versatile workspace that combines notes, tasks, databases, and more to organize your personal and professional life.",
    source: "https://www.notion.so/",
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
  // {
  //   id: uuidv4(),
  //   title: "Pinterest",
  //   image: Pinterest,
  //   category: "Design",
  //   tags: ["Inspiration"],
  //   slug: "pinterest",
  //   description:
  //     "A visual discovery engine for finding ideas and inspiration for projects, hobbies, and more.",
  //   source: "https://www.pinterest.com/",
  // },
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
    tags: ["AI", "UI Design"],
    slug: "relume",
    description:
      "A tool to help designers and developers build Webflow sites faster with pre-designed components and style guides.",
    source: "https://www.relume.io/",
  },
  {
    id: uuidv4(),
    title: "Roadmap.sh",
    image: Roadmap,
    category: "Learning",
    tags: ["Career", "Learning Resources"],
    slug: "roadmap-sh",
    description:
      "Interactive roadmaps, guides, and resources to help developers navigate their careers.",
    source: "https://roadmap.sh/",
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
  // {
  //   id: uuidv4(),
  //   title: "Serliv",
  //   image: Serliv,
  //   category: "Creators",
  //   tags: ["Frontend", "Learning"],
  //   slug: "serliv",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
  //   source: "https://www.youtube.com/@serliv",
  // },
  {
    id: uuidv4(),
    title: "Sketch",
    image: Sketch,
    category: "Design",
    tags: ["Prototyping", "UI Design"],
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
    title: "Spline",
    image: Spline,
    category: "Design",
    tags: ["3D Design", "Interactive"],
    slug: "spline",
    description:
      "A 3D design tool to create interactive experiences directly in the browser.",
    source: "https://spline.design/",
  },
  {
    id: uuidv4(),
    title: "Storybook",
    image: Storybook,
    category: "Development",
    tags: ["Documentation", "UI Components"],
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
    title: "TinyPNG",
    image: TinyPNG,
    category: "Tools",
    tags: ["Image Optimization"],
    slug: "tinypng",
    description:
      "A tool for optimizing PNG and JPEG images while maintaining quality.",
    source: "https://tinypng.com/",
  },
  {
    id: uuidv4(),
    title: "Udemy",
    image: Udemy,
    category: "Learning",
    tags: ["Education", "Online Courses"],
    slug: "udemy",
    description:
      "A global learning platform offering a wide range of courses in various fields, taught by industry experts.",
    source: "https://www.udemy.com/",
  },
  {
    id: uuidv4(),
    title: "Uiverse",
    image: Uiverse,
    category: "Design",
    tags: ["UI Components", "Web Design"],
    slug: "uiverse",
    description:
      "A collection of open-source and customizable UI components for modern web projects.",
    source: "https://uiverse.io/",
  },
  {
    id: uuidv4(),
    title: "Uncut",
    image: Uncut,
    category: "Design",
    tags: ["Assets", "Typography"],
    slug: "uncut",
    description:
      "A curated platform showcasing fresh and modern fonts for inspiration.",
    source: "https://www.uncut.wtf/",
  },
  {
    id: uuidv4(),
    title: "Unsplash",
    image: Unsplash,
    category: "Design",
    tags: ["Photography", "Resources"],
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
    title: "W3Schools",
    image: W3Schools,
    category: "Learning",
    tags: ["References", "Tutorials", "Web Development"],
    slug: "w3schools",
    description:
      "An educational website offering tutorials and references for web development and programming.",
    source: "https://www.w3schools.com/",
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
