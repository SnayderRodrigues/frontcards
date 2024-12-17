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
import DailyDev from "../assets/dailydev.svg";
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
import Juxtopposed from "../assets/Juxtopposed.png";
import Kalypso from "../assets/Kalypso.png";
import KevinPowell from "../assets/Kevin Powell.png";
import Lighthouse from "../assets/lighthouse.svg";
import LunDev from "../assets/Lun Dev.png";
import MaterialUI from "../assets/material-ui.svg";
import MaxiBestOf from "../assets/maxibestof.png";
import Mdn from "../assets/mdn.svg";
import Midjourney from "../assets/midjourney.svg";
import Next from "../assets/nextjs.svg";
import OlivierLarose from "../assets/Olivier Larose.png";
import Prettier from "../assets/prettier.svg";
import React from "../assets/react.svg";
import Relume from "../assets/relume.svg";
import Roadmap from "../assets/roadmap-sh.svg";
import Sass from "../assets/sass.svg";
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
    category: "Design",
    tags: ["Gráficos Vetoriais", "Ilustrações"],
    slug: "adobe-illustrator",
    description:
      "A vector graphics editor for creating illustrations, logos, and other scalable graphics.",
    source: "https://www.adobe.com/products/illustrator.html",
  },
  {
    id: uuidv4(),
    title: "Adobe Photoshop",
    image: AdobePhotoshop,
    category: "Design",
    tags: ["Design Gráfico", "Edição de Imagens"],
    slug: "adobe-photoshop",
    description:
      "A powerful graphics editor for creating, editing, and enhancing digital images and designs.",
    source: "https://www.adobe.com/products/photoshop.html",
  },
  {
    id: uuidv4(),
    title: "Augusto Galego",
    image: AugustoGalego,
    category: "Criadores",
    tags: ["Carreira", "Engenharia de Software"],
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
    tags: ["Inspiração", "Web Design"],
    slug: "awwwards",
    description:
      "A platform that showcases and awards the best web design projects from around the world.",
    source: "https://www.awwwards.com/",
  },
  {
    id: uuidv4(),
    title: "Blender",
    image: Blender,
    category: "Design",
    tags: ["Animações", "Modelagem 3D"],
    slug: "blender",
    description:
      "An open-source 3D creation suite supporting the entirety of the 3D pipeline, including modeling, rigging, animation, simulation, and rendering.",
    source: "https://www.blender.org/",
  },
  {
    id: uuidv4(),
    title: "By Huy",
    image: ByHuy,
    category: "Criadores",
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
    category: "Frontend",
    tags: ["Compatibilidade", "Ferramentas Web"],
    slug: "can-i-use",
    description:
      "Can I use provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.",
    source: "https://caniuse.com/",
  },
  {
    id: uuidv4(),
    title: "Chris DevInDev",
    image: ChrisDevInDev,
    category: "Criadores",
    tags: ["Aprendizado", "Carreira", "Mentoria"],
    slug: "chris-devindev",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.instagram.com/chrisdevindev/",
  },
  {
    id: uuidv4(),
    title: "CodePen",
    image: CodePen,
    category: "Frontend",
    tags: ["Editor de Código", "Prototipagem"],
    slug: "codepen",
    description:
      "An online code editor and community for testing and sharing HTML, CSS, and JavaScript snippets.",
    source: "https://codepen.io/",
  },
  {
    id: uuidv4(),
    title: "Coder Coder",
    image: CoderCoder,
    category: "Criadores",
    tags: ["Aprendizado", "Frontend"],
    slug: "coder-coder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.youtube.com/@TheCoderCoder",
  },
  {
    id: uuidv4(),
    title: "Daily.dev",
    image: DailyDev,
    category: "Aprendizado",
    tags: ["Comunidade", "Informações"],
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
    tags: ["Inspiração", "UI/UX"],
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
    tags: ["Colaboração", "UI/UX"],
    slug: "figma",
    description:
      "A collaborative interface design tool that allows teams to design, prototype, and gather feedback in real time.",
    source: "https://www.figma.com/",
  },
  {
    id: uuidv4(),
    title: "Fireship",
    image: Fireship,
    category: "Criadores",
    tags: ["Aprendizado", "Informação"],
    slug: "fireship",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.youtube.com/@Fireship",
  },
  {
    id: uuidv4(),
    title: "Flux Academy",
    image: FluxAcademy,
    category: "Criadores",
    tags: ["Aprendizado", "UI/UX", "Web Design"],
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
    tags: ["Recursos", "Tipografia"],
    slug: "fontshare",
    description:
      "A free font service by Indian Type Foundry for professional-grade fonts.",
    source: "https://www.fontshare.com/",
  },
  {
    id: uuidv4(),
    title: "Framer",
    image: Framer,
    category: "Design",
    tags: ["Animações", "Prototipagem"],
    slug: "framer",
    description:
      "An interactive design tool that enables designers to create high-fidelity prototypes with animations and transitions.",
    source: "https://www.framer.com/",
  },
  {
    id: uuidv4(),
    title: "freeCodeCamp",
    image: FreeCodeCamp,
    category: "Aprendizado",
    tags: ["Certificações", "Programação"],
    slug: "freecodecamp",
    description:
      "An open-source platform offering coding lessons, projects, and certifications for developers.",
    source: "https://www.freecodecamp.org/",
  },
  {
    id: uuidv4(),
    title: "Frontend Mentor",
    image: FrontendMentor,
    category: "Aprendizado",
    tags: ["Desafios", "Frontend"],
    slug: "frontend-mentor",
    description:
      "A platform offering front-end coding challenges to help improve coding and design skills.",
    source: "https://www.frontendmentor.io/",
  },
  {
    id: uuidv4(),
    title: "GitHub Copilot",
    image: GithubCopilot,
    category: "Frontend",
    tags: ["Assistente de Código", "IA"],
    slug: "github-copilot",
    description:
      "An AI-powered code completion tool that suggests entire lines or functions as you type.",
    source: "https://github.com/features/copilot",
  },
  {
    id: uuidv4(),
    title: "GSAP",
    image: Gsap,
    category: "Frontend",
    tags: ["Animações", "Frontend", "JavaScript"],
    slug: "gsap",
    description:
      "A JavaScript library for creating high-performance animations and transitions for web applications.",
    source: "https://gsap.com/",
  },
  {
    id: uuidv4(),
    title: "Hyperplexed",
    image: Hyperplexed,
    category: "Criadores",
    tags: ["Animações", "Aprendizado", "Frontend"],
    slug: "hyperplexed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.youtube.com/@Hyperplexed",
  },
  {
    id: uuidv4(),
    title: "Juxtopposed",
    image: Juxtopposed,
    category: "Criadores",
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
    category: "Criadores",
    tags: ["Inspiração", "Recursos", "Web Design"],
    slug: "kalypso",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.instagram.com/kalypsodesigns/",
  },
  {
    id: uuidv4(),
    title: "Kevin Powell",
    image: KevinPowell,
    category: "Criadores",
    tags: ["Aprendizado", "Frontend"],
    slug: "kevin-powell",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.youtube.com/@KevinPowell",
  },
  {
    id: uuidv4(),
    title: "Lighthouse",
    image: Lighthouse,
    category: "Frontend",
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
    category: "Criadores",
    tags: ["Animações", "Aprendizado", "Frontend"],
    slug: "lun-dev",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.youtube.com/@LunDeveloper",
  },
  {
    id: uuidv4(),
    title: "Material UI",
    image: MaterialUI,
    category: "Frontend",
    tags: ["Componentes", "Design System", "UI"],
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
    tags: ["Inspiração", "Web Design"],
    slug: "maxibestof",
    description:
      "A curated gallery of modern web design and user interfaces for inspiration.",
    source: "https://maxibestof.one/",
  },
  {
    id: uuidv4(),
    title: "MDN",
    image: Mdn,
    category: "Aprendizado",
    tags: ["Documentação", "Referências"],
    slug: "mdn",
    description:
      "Mozilla Developer Network provides comprehensive web development documentation, tutorials, and guides.",
    source: "https://developer.mozilla.org/en-US/",
  },
  {
    id: uuidv4(),
    title: "Midjourney",
    image: Midjourney,
    category: "Design",
    tags: ["Gerador de Imagens", "IA"],
    slug: "midjourney",
    description:
      "An AI-powered platform for creating stunning artwork and designs through text prompts.",
    source: "https://www.midjourney.com/",
  },
  {
    id: uuidv4(),
    title: "Next.JS",
    image: Next,
    category: "Frontend",
    tags: ["Framework", "React"],
    slug: "nextjs",
    description:
      "A React-based framework for building server-rendered and static web applications with ease.",
    source: "https://nextjs.org/",
  },
  {
    id: uuidv4(),
    title: "Olivier Larose",
    image: OlivierLarose,
    category: "Criadores",
    tags: ["Animações", "Aprendizado", "Frontend"],
    slug: "olivier-larose",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis iure magni. Perspiciatis, expedita quos! Ullam soluta libero impedit odit, sapiente nesciunt voluptas nostrum, officiis qui laudantium voluptates! At, autem.",
    source: "https://www.youtube.com/@olivierlarose1",
  },
  {
    id: uuidv4(),
    title: "Prettier",
    image: Prettier,
    category: "Frontend",
    tags: ["Extensão", "Formatação de Código"],
    slug: "prettier",
    description:
      "An opinionated code formatter that enforces a consistent style across your codebase.",
    source: "https://prettier.io/",
  },
  {
    id: uuidv4(),
    title: "React",
    image: React,
    category: "Frontend",
    tags: ["Biblioteca", "Frontend"],
    slug: "react",
    description:
      "A JavaScript library for building user interfaces with a component-based architecture.",
    source: "https://react.dev/",
  },
  {
    id: uuidv4(),
    title: "Relume",
    image: Relume,
    category: "Design",
    tags: ["IA", "UI Design"],
    slug: "relume",
    description:
      "A tool to help designers and developers build Webflow sites faster with pre-designed components and style guides.",
    source: "https://www.relume.io/",
  },
  {
    id: uuidv4(),
    title: "Roadmap.sh",
    image: Roadmap,
    category: "Aprendizado",
    tags: ["Carreira", "Recursos"],
    slug: "roadmap-sh",
    description:
      "Interactive roadmaps, guides, and resources to help developers navigate their careers.",
    source: "https://roadmap.sh/",
  },
  {
    id: uuidv4(),
    title: "Sass",
    image: Sass,
    category: "Frontend",
    tags: ["CSS", "Estilização"],
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
    tags: ["Prototipagem", "UI Design"],
    slug: "sketch",
    description:
      "A vector graphics editor for designing user interfaces, prototypes, and digital products.",
    source: "https://www.sketch.com/",
  },
  {
    id: uuidv4(),
    title: "Stack Overflow",
    image: StackOverflow,
    category: "Aprendizado",
    tags: ["Comunidade", "Programação"],
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
    tags: ["3D Design", "Modelagem"],
    slug: "spline",
    description:
      "A 3D design tool to create interactive experiences directly in the browser.",
    source: "https://spline.design/",
  },
  {
    id: uuidv4(),
    title: "Storybook",
    image: Storybook,
    category: "Frontend",
    tags: ["Componentes", "Documentação", "UI"],
    slug: "storybook",
    description:
      "An open-source tool for building and documenting isolated UI components.",
    source: "https://storybook.js.org/",
  },
  {
    id: uuidv4(),
    title: "Tailwind CSS",
    image: Tailwind,
    category: "Frontend",
    tags: ["Estilização", "Framework CSS"],
    slug: "tailwindcss",
    description:
      "A utility-first CSS framework for creating custom designs directly in your HTML.",
    source: "https://tailwindcss.com/",
  },
  {
    id: uuidv4(),
    title: "Three.JS",
    image: ThreeJs,
    category: "Frontend",
    tags: ["Biblioteca 3D", "WebGL"],
    slug: "threejs",
    description:
      "A JavaScript library for creating 3D content in web applications using WebGL.",
    source: "https://threejs.org/",
  },
  {
    id: uuidv4(),
    title: "TinyPNG",
    image: TinyPNG,
    category: "Frontend",
    tags: ["Otimização de Imagem"],
    slug: "tinypng",
    description:
      "A tool for optimizing PNG and JPEG images while maintaining quality.",
    source: "https://tinypng.com/",
  },
  {
    id: uuidv4(),
    title: "Udemy",
    image: Udemy,
    category: "Aprendizado",
    tags: ["Certificações", "Educação"],
    slug: "udemy",
    description:
      "A global Aprendizado platform offering a wide range of courses in various fields, taught by industry experts.",
    source: "https://www.udemy.com/",
  },
  {
    id: uuidv4(),
    title: "Uiverse",
    image: Uiverse,
    category: "Design",
    tags: ["Componentes", "Inspiração", "Web Design"],
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
    tags: ["Recursos", "Tipografia"],
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
    tags: ["Fotografia", "Recursos"],
    slug: "unsplash",
    description:
      "A platform providing high-quality, freely usable images shared by photographers around the world.",
    source: "https://unsplash.com/",
  },
  {
    id: uuidv4(),
    title: "Vite",
    image: Vite,
    category: "Frontend",
    tags: ["Ferramenta de Build", "Frontend"],
    slug: "vite",
    description:
      "A fast and modern frontend build tool that leverages native ES modules and offers lightning-fast hot module replacement.",
    source: "https://vite.dev/",
  },
  {
    id: uuidv4(),
    title: "W3Schools",
    image: W3Schools,
    category: "Aprendizado",
    tags: ["Programação", "Referências", "Tutoriais"],
    slug: "w3schools",
    description:
      "An educational website offering tutorials and references for web development and programming.",
    source: "https://www.w3schools.com/",
  },
  {
    id: uuidv4(),
    title: "Web Dev Simplified",
    image: WebDevSimplified,
    category: "Criadores",
    tags: ["Aprendizado", "Fullstack"],
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
