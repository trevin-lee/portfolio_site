import {
  arduino,
  cplusplus,
  css,
  cura,
  docker,
  fusion360,
  git,
  html,
  illustrator,
  javascript,
  linux,
  mathematica,
  matlab,
  matplotlib,
  numpy,
  optimumlap,
  proxmox,
  python,
  reactjs,
  solidworks,
  tailwind,
  threejs,
  truenas,
  vscode,
  xd} from "../assets"

const heroTypeAnimation = [
  "Mechanical Engineer",
  2000,
  "Undergrad Researcher",
  2000,
  "Software Developer",
  2000,
  "Physics Major @ UCR",
  2000
];

export const navLinks = [
  { href: "#technologies", label: "Technologies" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

const skills = [
  {
      category: "Engineering & Analysis",
      skillsList: [
          { imgURL: solidworks, name: "Solidworks" },
          { imgURL: fusion360, name: "Fusion360" },
          { imgURL: cura, name: "Cura" },
          { imgURL: optimumlap, name: "Optimum Lap" },
          { imgURL: arduino, name: "Arduino" },
          { imgURL: mathematica, name: "Mathematica" },
          { imgURL: matlab, name: "MATLAB" },
          { imgURL: matplotlib, name: "Matplotlib" },
          { imgURL: numpy, name: "Numpy" }
      ]
  },
  {
      category: "Software Development",
      skillsList: [
          { imgURL: cplusplus, name: "C++" },
          { imgURL: python, name: "Python" },
          { imgURL: javascript, name: "JavaScript" },
          { imgURL: reactjs, name: "React JS" },
          { imgURL: threejs, name: "Three JS" },
          { imgURL: tailwind, name: "Tailwind" },
          { imgURL: html, name: "HTML" },
          { imgURL: css, name: "CSS" },
          { imgURL: docker, name: "Docker" },
          { imgURL: git, name: "git" },
          { imgURL: linux, name: "linux" },
          { imgURL: proxmox, name: "Proxmox" },
          { imgURL: truenas, name: "Truenas" },
          { imgURL: vscode, name: "VSCode" }
      ]
  }
];

export { skills,
         heroTypeAnimation 
       };
