import AdobePhotoshop from "../assets/adobe-photoshop.svg";
import CodePen from "../assets/codepen.svg";
import DailyDev from "../assets/dailydev.svg";
import Dribbble from "../assets/dribbble.svg";
import Figma from "../assets/figma.svg";
import GithubCopilot from "../assets/github-copilot.svg";
import Gsap from "../assets/greensock.svg";
import Jest from "../assets/jest.svg";
import Lighthouse from "../assets/lighthouse.svg";
import Mdn from "../assets/mdn.svg";
import Next from "../assets/nextjs.svg";
import Prettier from "../assets/prettier.svg";
import React from "../assets/react.svg";
import Sass from "../assets/sass.svg";
import StackOverflow from "../assets/stackoverflow.svg";
import Storybook from "../assets/storybook.svg";
import Tailwind from "../assets/tailwind.svg";
import ThreeJs from "../assets/threejs.svg";
import Vite from "../assets/vitejs.svg";

const ResourcesData = [
  {
    id: 4,
    title: "Adobe Photoshop",
    image: AdobePhotoshop,
    category: "Editing",
    slug: "adobe-photoshop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repudiandae! Enim minus hic culpa earum in! Quibusdam voluptas tempore voluptatum, ratione dolorem ad neque itaque nisi. Quisquam soluta quasi doloribus!",
    source:
      "https://www.adobe.com/br/products/photoshop/landpa.html?sdid=29NMCFXM&mv=search&mv2=paidsearch&ef_id=Cj0KCQiA_qG5BhDTARIsAA0UHSIO2WH_4wvpK3eyRLLHxO5B-N8gdd7-yGaUqI56I0YBAebaGBu2MfYaAhx1EALw_wcB:G:s&s_kwcid=AL!3085!3!534509111647!e!!g!!adobe%20photoshop!188192502!10077842982&gad_source=1&gclid=Cj0KCQiA_qG5BhDTARIsAA0UHSIO2WH_4wvpK3eyRLLHxO5B-N8gdd7-yGaUqI56I0YBAebaGBu2MfYaAhx1EALw_wcB",
  },
  {
    id: 6,
    title: "CodePen",
    image: CodePen,
    category: "Web Tool",
    slug: "codepen",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repudiandae! Enim minus hic culpa earum in! Quibusdam voluptas tempore voluptatum, ratione dolorem ad neque itaque nisi. Quisquam soluta quasi doloribus!",
    source: "https://codepen.io/",
  },
  {
    id: 3,
    title: "Daily.dev",
    image: DailyDev,
    category: "Knowledge & Learning",
    slug: "daily-dev",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repudiandae! Enim minus hic culpa earum in! Quibusdam voluptas tempore voluptatum, ratione dolorem ad neque itaque nisi. Quisquam soluta quasi doloribus!",
    source: "https://daily.dev/",
  },
  {
    id: 7,
    title: "Dribbble",
    image: Dribbble,
    category: "Design",
    slug: "dribbble",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repudiandae! Enim minus hic culpa earum in! Quibusdam voluptas tempore voluptatum, ratione dolorem ad neque itaque nisi. Quisquam soluta quasi doloribus!",
    source: "https://dribbble.com/",
  },
  {
    id: 1,
    title: "Figma",
    image: Figma,
    category: "Design",
    slug: "figma",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repudiandae! Enim minus hic culpa earum in! Quibusdam voluptas tempore voluptatum, ratione dolorem ad neque itaque nisi. Quisquam soluta quasi doloribus!",
    source: "https://www.figma.com/",
  },
  {
    id: 8,
    title: "GitHub Copilot",
    image: GithubCopilot,
    category: "Development",
    slug: "github-copilot",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repudiandae! Enim minus hic culpa earum in! Quibusdam voluptas tempore voluptatum, ratione dolorem ad neque itaque nisi. Quisquam soluta quasi doloribus!",
    source: "https://github.com/features/copilot",
  },
  {
    id: 9,
    title: "GSAP",
    image: Gsap,
    category: "Development",
    slug: "gsap",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repudiandae! Enim minus hic culpa earum in! Quibusdam voluptas tempore voluptatum, ratione dolorem ad neque itaque nisi. Quisquam soluta quasi doloribus!",
    source: "https://gsap.com/",
  },
  {
    id: 10,
    title: "Jest",
    image: Jest,
    category: "Development",
    slug: "jest",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repudiandae! Enim minus hic culpa earum in! Quibusdam voluptas tempore voluptatum, ratione dolorem ad neque itaque nisi. Quisquam soluta quasi doloribus!",
    source: "https://jestjs.io/",
  },
  {
    id: 11,
    title: "Lighthouse",
    image: Lighthouse,
    category: "Web Tool",
    slug: "lighthouse",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repudiandae! Enim minus hic culpa earum in! Quibusdam voluptas tempore voluptatum, ratione dolorem ad neque itaque nisi. Quisquam soluta quasi doloribus!",
    source: "https://developer.chrome.com/docs/lighthouse/overview",
  },
  {
    id: 5,
    title: "MDN",
    image: Mdn,
    category: "Knowledge & Learning",
    slug: "mdn",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repudiandae! Enim minus hic culpa earum in! Quibusdam voluptas tempore voluptatum, ratione dolorem ad neque itaque nisi. Quisquam soluta quasi doloribus!",
    source: "https://developer.mozilla.org/en-US/",
  },
  {
    id: 12,
    title: "Next.JS",
    image: Next,
    category: "Development",
    slug: "nextjs",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repudiandae! Enim minus hic culpa earum in! Quibusdam voluptas tempore voluptatum, ratione dolorem ad neque itaque nisi. Quisquam soluta quasi doloribus!",
    source: "https://nextjs.org/",
  },
  {
    id: 13,
    title: "Prettier",
    image: Prettier,
    category: "Development",
    slug: "prettier",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repudiandae! Enim minus hic culpa earum in! Quibusdam voluptas tempore voluptatum, ratione dolorem ad neque itaque nisi. Quisquam soluta quasi doloribus!",
    source: "https://prettier.io/",
  },
  {
    id: 14,
    title: "React",
    image: React,
    category: "Development",
    slug: "react",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repudiandae! Enim minus hic culpa earum in! Quibusdam voluptas tempore voluptatum, ratione dolorem ad neque itaque nisi. Quisquam soluta quasi doloribus!",
    source: "https://react.dev/",
  },
  {
    id: 15,
    title: "Sass",
    image: Sass,
    category: "Development",
    slug: "sass",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repudiandae! Enim minus hic culpa earum in! Quibusdam voluptas tempore voluptatum, ratione dolorem ad neque itaque nisi. Quisquam soluta quasi doloribus!",
    source: "https://sass-lang.com/",
  },
  {
    id: 16,
    title: "Stack Overflow",
    image: StackOverflow,
    category: "Knowledge & Learning",
    slug: "gsap",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repudiandae! Enim minus hic culpa earum in! Quibusdam voluptas tempore voluptatum, ratione dolorem ad neque itaque nisi. Quisquam soluta quasi doloribus!",
    source: "https://stackoverflow.com/",
  },
  {
    id: 17,
    title: "Storybook",
    image: Storybook,
    category: "Development",
    slug: "storybook",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repudiandae! Enim minus hic culpa earum in! Quibusdam voluptas tempore voluptatum, ratione dolorem ad neque itaque nisi. Quisquam soluta quasi doloribus!",
    source: "https://storybook.js.org/",
  },
  {
    id: 18,
    title: "Tailwind CSS",
    image: Tailwind,
    category: "Development",
    slug: "tailwindcss",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repudiandae! Enim minus hic culpa earum in! Quibusdam voluptas tempore voluptatum, ratione dolorem ad neque itaque nisi. Quisquam soluta quasi doloribus!",
    source: "https://tailwindcss.com/",
  },
  {
    id: 19,
    title: "Three.JS",
    image: ThreeJs,
    category: "Development",
    slug: "trheejs",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repudiandae! Enim minus hic culpa earum in! Quibusdam voluptas tempore voluptatum, ratione dolorem ad neque itaque nisi. Quisquam soluta quasi doloribus!",
    source: "https://threejs.org/",
  },
  {
    id: 2,
    title: "Vite",
    image: Vite,
    category: "Development",
    slug: "vite",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repudiandae! Enim minus hic culpa earum in! Quibusdam voluptas tempore voluptatum, ratione dolorem ad neque itaque nisi. Quisquam soluta quasi doloribus!",
    source: "https://vite.dev/",
  },
];

export default ResourcesData;
