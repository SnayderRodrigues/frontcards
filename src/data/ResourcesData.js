import { v4 as uuidv4 } from "uuid";
import AccessibilityNotChecklist from "../assets/accessibility-not-checklist.png";
import AdobeIllustrator from "../assets/adobe-illustrator.svg";
import Angular from "../assets/angular.svg";
import Awwwards from "../assets/awwwards.svg";
import Blender from "../assets/blender.svg";
import Bootstrap from "../assets/bootstrap.svg";
import ByHuy from "../assets/By Huy.png";
import CanIUse from "../assets/caniuse.png";
import ChrisDevInDev from "../assets/Chris DevInDev.png";
import CodePen from "../assets/codepen.svg";
import CoderCoder from "../assets/Coder Coder.png";
import ColorHunt from "../assets/color-hunt.png";
import CssBattle from "../assets/css-battle.png";
import DailyDev from "../assets/dailydev.svg";
import DesignSystems from "../assets/design-systems.png";
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
import Inkscape from "../assets/inkscape.svg";
import JoshWComeau from "../assets/josh-w-comeau.png";
import Juxtopposed from "../assets/Juxtopposed.png";
import Kalypso from "../assets/Kalypso.png";
import KevinPowell from "../assets/Kevin Powell.png";
import LenisScroll from "../assets/lenis-scroll.png";
import Lighthouse from "../assets/lighthouse.svg";
import LunDev from "../assets/Lun Dev.png";
import MaterialUI from "../assets/material-ui.svg";
import MaxiBestOf from "../assets/maxibestof.png";
import Mdn from "../assets/mdn.svg";
import Midjourney from "../assets/midjourney.svg";
import Next from "../assets/nextjs.svg";
import OlivierLarose from "../assets/Olivier Larose.png";
import Photopea from "../assets/photopea.svg";
import Photoshop from "../assets/photoshop.svg";
import Prettier from "../assets/prettier.svg";
import React from "../assets/react.svg";
import ReactHookForm from "../assets/react-hook-form.png";
import RealtimeColors from "../assets/realtime-colors.png";
import Relume from "../assets/relume.svg";
import Roadmap from "../assets/roadmap-sh.svg";
import Sass from "../assets/sass.svg";
import ShadcnUI from "../assets/shadcn-ui.png";
import Shots from "../assets/shots-so.png";
import Sketch from "../assets/sketch.svg";
import SmashingMagazine from "../assets/smashing-magazine.svg";
import Spline from "../assets/spline.png";
import StackOverflow from "../assets/stackoverflow.svg";
import Storybook from "../assets/storybook.svg";
import Svelte from "../assets/svelte.svg";
import Tailwind from "../assets/tailwind.svg";
import TheOdinProject from "../assets/the-odin-project.svg";
import ThreeJs from "../assets/threejs.svg";
import TinyPNG from "../assets/tinypng.svg";
import Udemy from "../assets/udemy.svg";
import Uiverse from "../assets/uiverse.svg";
import Uncut from "../assets/uncut.svg";
import Unlighthouse from "../assets/unlighthouse.svg";
import Unsplash from "../assets/unsplash.svg";
import Vite from "../assets/vitejs.svg";
import Vue from "../assets/vue.svg";
import W3Schools from "../assets/w3schools.svg";
import WebDevSimplified from "../assets/Web-Dev-Simplified.png";
import WebDev from "../assets/web.dev.svg";
import Webflow from "../assets/webflow.svg";

const ResourcesData = [
  {
    id: uuidv4(),
    title: "Accessibility Not-Checklist",
    image: AccessibilityNotChecklist,
    category: "Aprendizado",
    tags: ["Acessibilidade", "Boas Práticas"],
    slug: "accessibility-not-checklist",
    description:
      "Lista de boas práticas e dicas em formato de checklist para assegurar acessibilidade digital.",
    source: "https://not-checklist.intopia.digital/",
  },
  {
    id: uuidv4(),
    title: "Adobe Illustrator",
    image: AdobeIllustrator,
    category: "Design",
    tags: ["Gráficos Vetoriais", "Ilustrações"],
    slug: "adobe-illustrator",
    description:
      "Software profissional para criação de designs vetoriais, ideal para logos, ícones e ilustrações.",
    source: "https://www.adobe.com/products/illustrator.html",
  },
  {
    id: uuidv4(),
    title: "Angular",
    image: Angular,
    category: "Frontend",
    tags: ["Framework", "MVC", "TypeScript"],
    slug: "angular",
    description:
      "Framework para desenvolvimento de aplicações web dinâmicas com base em TypeScript.",
    source: "https://angular.io/",
  },
  {
    id: uuidv4(),
    title: "Awwwards",
    image: Awwwards,
    category: "Design",
    tags: ["Inspiração", "Web Design"],
    slug: "awwwards",
    description:
      "Plataforma que premia os melhores designs e inovações na web, com inspiração para designers e desenvolvedores.",
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
      "Ferramenta gratuita e de código aberto para modelagem 3D, animações e renderizações realistas.",
    source: "https://www.blender.org/",
  },
  {
    id: uuidv4(),
    title: "Bootstrap",
    image: Bootstrap,
    category: "Frontend",
    tags: ["Componentes", "CSS Framework"],
    slug: "bootstrap",
    description:
      "Framework front-end para criar websites responsivos e com design consistente.",
    source: "https://getbootstrap.com/",
  },
  {
    id: uuidv4(),
    title: "By Huy",
    image: ByHuy,
    category: "Criadores",
    tags: ["Frontend", "UI/UX", "Web Design"],
    slug: "by-huy",
    description:
      "Huy é um desenvolvedor frontend e web designer que compartilha conteúdo e aprendizado sobre freelance.",
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
      "Recurso para verificar compatibilidade de recursos web com navegadores.",
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
      "Dicas sobre mercado e carreira, além de fornercer material de estudo e mentoria para devs de todos os níveis.",
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
      "Editor de código online para criar e compartilhar experimentos em HTML, CSS e JavaScript.",
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
      "Criadora de conteúdos educativos que simplificam conceitos de desenvolvimento web para iniciantes.",
    source: "https://www.youtube.com/@TheCoderCoder",
  },
  {
    id: uuidv4(),
    title: "Color Hunt",
    image: ColorHunt,
    category: "Design",
    tags: ["Inspiração", "Paletas de Cores"],
    slug: "color-hunt",
    description:
      "Coleção de paletas de cores selecionadas para inspirar seus projetos.",
    source: "https://colorhunt.co/",
  },
  {
    id: uuidv4(),
    title: "CSS Battle",
    image: CssBattle,
    category: "Frontend",
    tags: ["CSS", "Desafios"],
    slug: "css-battle",
    description:
      "Plataforma para desafiar suas habilidades de CSS recriando designs com o menor código possível.",
    source: "https://cssbattle.dev/",
  },
  {
    id: uuidv4(),
    title: "Daily.dev",
    image: DailyDev,
    category: "Aprendizado",
    tags: ["Comunidade", "Informações"],
    slug: "daily-dev",
    description:
      "Extensão para navegadores que centraliza as melhores notícias e recursos para desenvolvedores.",
    source: "https://daily.dev/",
  },
  {
    id: uuidv4(),
    title: "Design Systems",
    image: DesignSystems,
    category: "Aprendizado",
    tags: ["Design Systems", "Guia Prático"],
    slug: "design-systems",
    description:
      "Recurso interativo para aprender e explorar sistemas de design.",
    source: "https://designsystems.surf/design-systems",
  },
  {
    id: uuidv4(),
    title: "Dribbble",
    image: Dribbble,
    category: "Design",
    tags: ["Inspiração", "UI/UX"],
    slug: "dribbble",
    description:
      "Comunidade criativa para designers se conectarem e exibirem seus portfólios.",
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
      "Ferramenta colaborativa de design de interfaces e prototipação baseada na nuvem.",
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
      "Canal que oferece vídeos rápidos e detalhados sobre desenvolvimento de software e tecnologias modernas.",
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
      "Academia online que ensina design web e como transformar essas habilidades em um negócio lucrativo.",
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
      "Biblioteca de fontes gratuitas para projetos criativos e profissionais.",
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
      "Plataforma para prototipação e design interativo com animações fluidas e responsividade.",
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
      "Plataforma educacional gratuita para aprender programação e desenvolvimento web.",
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
      "Site com desafios práticos para melhorar habilidades de frontend, incluindo HTML, CSS e JavaScript.",
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
      "Assistente de código que usa inteligência artificial para sugerir e completar trechos de código.",
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
      "Biblioteca poderosa para criar animações interativas e de alto desempenho na web.",
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
      "Criador de tutoriais criativos e inovadores sobre animações e interações web modernas.",
    source: "https://www.youtube.com/@Hyperplexed",
  },
  {
    id: uuidv4(),
    title: "Inkscape",
    image: Inkscape,
    category: "Design",
    tags: ["Gráficos Vetoriais", "Ilustração"],
    slug: "inkscape",
    description:
      "Editor de gráficos vetoriais gratuito e de código aberto para criar ilustrações e designs escaláveis.",
    source: "https://inkscape.org/",
  },
  {
    id: uuidv4(),
    title: "Josh W Comeau",
    image: JoshWComeau,
    category: "Criadores",
    tags: ["Artigos", "Frontend", "Guias Práticos"],
    slug: "josh-w-comeau",
    description:
      "Blog repleto de dicas e tutoriais práticos para desenvolvimento frontend e React.",
    source: "https://www.joshwcomeau.com/",
  },
  {
    id: uuidv4(),
    title: "Juxtopposed",
    image: Juxtopposed,
    category: "Criadores",
    tags: ["Frontend", "UI/UX", "Web Design"],
    slug: "juxtopposed",
    description:
      "Blog e repositório de ideias focado em criatividade, design e experimentação na web.",
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
      "Product Designer compartilha diariamente os mais diversos recursos e dicas sobre design.",
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
      "Educador especializado em CSS, com vídeos e artigos para criar estilos web profissionais.",
    source: "https://www.youtube.com/@KevinPowell",
  },
  {
    id: uuidv4(),
    title: "Lenis Scroll",
    image: LenisScroll,
    category: "Frontend",
    tags: ["Animações", "Scroll"],
    slug: "lenis-scroll",
    description:
      "Biblioteca para criar rolagens suaves e fluídas em aplicações web.",
    source: "https://lenis.darkroom.engineering/",
  },
  {
    id: uuidv4(),
    title: "Lighthouse",
    image: Lighthouse,
    category: "Frontend",
    tags: ["Performance", "SEO"],
    slug: "lighthouse",
    description:
      "Ferramenta automatizada do Google para medir desempenho, acessibilidade e SEO de páginas web.",
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
      "Criador de conteúdos para desenvolvedores, com foco em dicas práticas e tutoriais de programação.",
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
      "Biblioteca de componentes React baseados no design system Material Design, para interfaces modernas.",
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
      "Repositório de templates e recursos para facilitar a criação de designs criativos e interativos.",
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
      "Documentação abrangente e confiável para desenvolvedores web, com tutoriais e referências.",
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
      "Ferramenta de inteligência artificial para criar imagens e artes conceituais inovadoras.",
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
      "Framework React para desenvolvimento web com renderização do lado servidor e geração de sites estáticos.",
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
      "Desenvolvedor Frontend que compartilha recursos e insights sobre design criativo, animações e desenvolvimento web.",
    source: "https://www.youtube.com/@olivierlarose1",
  },
  {
    id: uuidv4(),
    title: "Photopea",
    image: Photopea,
    category: "Design",
    tags: ["Edição de Imagens", "Editor Online"],
    slug: "photopea",
    description:
      "Editor avançado de imagens online que suporta arquivos PSD, Sketch, XD e mais.",
    source: "https://www.photopea.com/",
  },
  {
    id: uuidv4(),
    title: "Photoshop",
    image: Photoshop,
    category: "Design",
    tags: ["Design Gráfico", "Edição de Imagens"],
    slug: "photoshop",
    description:
      "Software profissional para edição e manipulação de imagens e criação de designs gráficos.",
    source: "https://www.adobe.com/products/photoshop.html",
  },
  {
    id: uuidv4(),
    title: "Prettier",
    image: Prettier,
    category: "Frontend",
    tags: ["Extensão", "Formatação de Código"],
    slug: "prettier",
    description:
      "Formatador de código opinativo que mantém consistência em projetos de desenvolvimento.",
    source: "https://prettier.io/",
  },
  {
    id: uuidv4(),
    title: "React",
    image: React,
    category: "Frontend",
    tags: ["Biblioteca", "JavaScript"],
    slug: "react",
    description:
      "Biblioteca JavaScript para criação de interfaces de usuário com foco em componentes reutilizáveis.",
    source: "https://react.dev/",
  },
  {
    id: uuidv4(),
    title: "React Hook Form",
    image: ReactHookForm,
    category: "Frontend",
    tags: ["Formulários", "React"],
    slug: "react-hook-form",
    description:
      "Biblioteca leve para gerenciar formulários de forma eficiente no React.",
    source: "https://react-hook-form.com/",
  },
  {
    id: uuidv4(),
    title: "Realtime Colors",
    image: RealtimeColors,
    category: "Design",
    tags: ["Paletas de Cores"],
    slug: "realtime-colors",
    description:
      "Ferramenta interativa para explorar combinações e paletas de cores em tempo real.",
    source: "https://realtimecolors.com/",
  },
  {
    id: uuidv4(),
    title: "Relume",
    image: Relume,
    category: "Design",
    tags: ["IA", "UI Design"],
    slug: "relume",
    description:
      "Plataforma que fornece templates e kits para criar sites rapidamente com Webflow.",
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
      "Guia visual para aprender desenvolvimento de software, com caminhos claros para várias carreiras.",
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
      "Extensão de CSS que adiciona recursos avançados como variáveis, mixins e nesting.",
    source: "https://sass-lang.com/",
  },
  {
    id: uuidv4(),
    title: "Shadcn UI",
    image: ShadcnUI,
    category: "Frontend",
    tags: ["Componentes", "UI/UX"],
    slug: "shadcn-ui",
    description:
      "Biblioteca de componentes React acessíveis e personalizáveis para construção de interfaces.",
    source: "https://ui.shadcn.dev/",
  },
  {
    id: uuidv4(),
    title: "Shots.so",
    image: Shots,
    category: "Design",
    tags: ["Mockups", "Recursos"],
    slug: "shots-so",
    description:
      "Ferramenta para criar apresentações de projetos e mockups de forma simples, elegante e personalizável.",
    source: "https://shots.so/",
  },
  {
    id: uuidv4(),
    title: "Sketch",
    image: Sketch,
    category: "Design",
    tags: ["Prototipagem", "UI Design"],
    slug: "sketch",
    description:
      "Software de design de interfaces focado em UI/UX, com recursos para colaboração e prototipação.",
    source: "https://www.sketch.com/",
  },
  {
    id: uuidv4(),
    title: "Smashing Magazine",
    image: SmashingMagazine,
    category: "Aprendizado",
    tags: ["Artigos Técnicos", "Frontend"],
    slug: "smashing-magazine",
    description:
      "Revista online com artigos, tutoriais e dicas para desenvolvedores e designers.",
    source: "https://www.smashingmagazine.com/",
  },
  {
    id: uuidv4(),
    title: "Spline",
    image: Spline,
    category: "Design",
    tags: ["3D Design", "Modelagem"],
    slug: "spline",
    description:
      "Ferramenta para criar e editar gráficos 3D interativos diretamente no navegador.",
    source: "https://spline.design/",
  },
  {
    id: uuidv4(),
    title: "Stack Overflow",
    image: StackOverflow,
    category: "Aprendizado",
    tags: ["Comunidade", "Programação"],
    slug: "stack-overflow",
    description:
      "Comunidade online para desenvolvedores compartilharem conhecimento e resolverem dúvidas técnicas.",
    source: "https://stackoverflow.com/",
  },
  {
    id: uuidv4(),
    title: "Storybook",
    image: Storybook,
    category: "Frontend",
    tags: ["Componentes", "Documentação", "UI"],
    slug: "storybook",
    description:
      "Ferramenta para desenvolver, documentar e testar componentes de UI de forma isolada.",
    source: "https://storybook.js.org/",
  },
  {
    id: uuidv4(),
    title: "Svelte",
    image: Svelte,
    category: "Frontend",
    tags: ["Framework", "JavaScript"],
    slug: "svelte",
    description:
      "Framework JavaScript que compila os componentes em código altamente otimizado para maior performance.",
    source: "https://svelte.dev/",
  },
  {
    id: uuidv4(),
    title: "Tailwind CSS",
    image: Tailwind,
    category: "Frontend",
    tags: ["Estilização", "Framework CSS"],
    slug: "tailwindcss",
    description:
      "Framework CSS utilitário que permite criar interfaces modernas com classes pré-definidas.",
    source: "https://tailwindcss.com/",
  },
  {
    id: uuidv4(),
    title: "The Odin Project",
    image: TheOdinProject,
    category: "Aprendizado",
    tags: ["Certificações", "Desenvolvimento Web"],
    slug: "the-odin-project",
    description:
      "Plataforma gratuita que oferece currículos completos para aprender desenvolvimento web.",
    source: "https://www.theodinproject.com/",
  },
  {
    id: uuidv4(),
    title: "Three.JS",
    image: ThreeJs,
    category: "Frontend",
    tags: ["Biblioteca 3D", "WebGL"],
    slug: "threejs",
    description:
      "Biblioteca JavaScript para renderização 3D interativa em navegadores usando WebGL.",
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
      "Ferramenta online para compactação de imagens PNG e JPEG sem perda significativa de qualidade.",
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
      "Plataforma de cursos online com uma vasta variedade de conteúdos para desenvolvedores e designers.",
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
      "Coleção de componentes de interface gratuitos e personalizáveis para projetos web.",
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
      "Uma plataforma com curadoria que apresenta fontes novas e modernas como inspiração.",
    source: "https://www.uncut.wtf/",
  },
  {
    id: uuidv4(),
    title: "Unlighthouse",
    image: Unlighthouse,
    category: "Frontend",
    tags: ["Auditoria", "Performance"],
    slug: "unlighthouse",
    description:
      "Ferramenta para auditoria de performance e SEO de websites de forma contínua.",
    source: "https://unlighthouse.dev/",
  },
  {
    id: uuidv4(),
    title: "Unsplash",
    image: Unsplash,
    category: "Design",
    tags: ["Fotografia", "Recursos"],
    slug: "unsplash",
    description:
      "Banco de imagens de alta qualidade e uso gratuito para projetos criativos e comerciais.",
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
      "Ferramenta de build rápida para projetos web modernos, com suporte nativo a ES Modules.",
    source: "https://vite.dev/",
  },
  {
    id: uuidv4(),
    title: "Vue.js",
    image: Vue,
    category: "Frontend",
    tags: ["Framework", "JavaScript"],
    slug: "vue",
    description:
      "Framework JavaScript progressivo para criar interfaces de usuário dinâmicas e reativas.",
    source: "https://vuejs.org/",
  },
  {
    id: uuidv4(),
    title: "W3Schools",
    image: W3Schools,
    category: "Aprendizado",
    tags: ["Programação", "Referências", "Tutoriais"],
    slug: "w3schools",
    description:
      "Plataforma de aprendizado online com tutoriais práticos sobre desenvolvimento web.",
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
      "Canal que aborda conceitos de desenvolvimento web de forma clara e objetiva para todos os níveis.",
    source: "https://www.youtube.com/@WebDevSimplified",
  },
  {
    id: uuidv4(),
    title: "Web.dev",
    image: WebDev,
    category: "Aprendizado",
    tags: ["Boas Práticas", "Referências", "Performance"],
    slug: "web-dev",
    description:
      "Plataforma da Google com recursos e ferramentas para criar websites de alta performance e acessíveis.",
    source: "https://web.dev/",
  },
  {
    id: uuidv4(),
    title: "Webflow",
    image: Webflow,
    category: "Design",
    tags: ["No-Code", "Web Design"],
    slug: "webflow",
    description:
      "Ferramenta de design e desenvolvimento visual para criar sites responsivos sem codificação manual.",
    source: "https://www.webflow.com/",
  },
];

export default ResourcesData;
