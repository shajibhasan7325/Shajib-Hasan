import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./type";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
  {
    name: "REACT MUI Dashboard",
    description: "This app shows a statistical view about Dashboard",
    image_path: "/Images/dashbord.png",
    deployed_url:
      "https://github.com/shajibhasan7325/React-Mui-Dashbord-Pwa.git",
    github_url: "https://github.com/shajibhasan7325/React-Mui-Dashbord-Pwa.git",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    name: "Netflix Clone",
    image_path: "/Images/Netflix.png",
    deployed_url: "https://github.com/shajibhasan7325/Netflix-clone.git",
    github_url: "https://github.com/shajibhasan7325/Netflix-clone.git",
    category: ["next"],
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "Framer Motion"],
  },

  {
    name: "Bank Website ",
    image_path: "/Images/bank.png",
    deployed_url: "https://bank-react-typescript.netlify.app/",
    github_url:
      "https://github.com/shajibhasan7325/Bank-website-React-JS-with-Tailwind-typescript.git",
    category: ["next", "react"],
    description: "Bank-website-React-JS-with-Tailwind-typescript",
    key_techs: ["React", "Redux", "Tailwind", "typescript"],
  },

  {
    name: "Football match score",
    image_path: "/Images/football.png",
    deployed_url:
      "https://github.com/shajibhasan7325/Express.js-Data-featch-and-filter.git",
    github_url:
      "https://github.com/shajibhasan7325/Express.js-Data-featch-and-filter.git",
    category: ["node", "react"],
    description: "Football match score",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    name: "real state website",
    image_path: "/Images/compyhouse.png",
    deployed_url: "https://javascript-comfy-house.netlify.app/",
    github_url: "https://github.com/shajibhasan7325",
    category: ["javascript"],
    description: "real state website",
    key_techs: ["HTML", "CSS", "Javascript"],
  },

  {
    name: "Shopping card",
    image_path: "/Images/javascript.png",
    deployed_url: "https://javascript-shopping-cart-websit.netlify.app/",
    github_url: "https://github.com/shajibhasan7325",
    category: ["javascript"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
];
