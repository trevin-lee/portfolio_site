import {
    arduino,
    cplusplus,
    css,
    cura,
    docker,
    fusion360,
    fluxai,
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
    xd,
} from "../../assets";

const skillIcons = [
    { imgURL: solidworks, name: "Solidworks" },
    { imgURL: fusion360, name: "Fusion360" },
    { imgURL: matlab, name: "MATLAB" },
    { imgURL: cplusplus, name: "C++" },
    { imgURL: python, name: "Python" },
    { imgURL: fluxai, name: "Flux AI" },
    { imgURL: reactjs, name: "React JS" },
    { imgURL: tailwind, name: "Tailwind" },
    { imgURL: vscode, name: "VSCode" },
    { imgURL: git, name: "Git" },
];

const skills = [
  { 
      type: "Engineering", 
      list: [
          "Solidworks",
          "Fusion 360",
          "MATLAB",
          "Flux AI",
          "Digital Fabrication"
      ]
  },
  { 
      type: "Software Development", 
      list: [
          "Python",
          "C++",
          "Linux",
          "Proxmox",
          "React.JS",
          "HTML/CSS",
          "Tailwind",
          "Git/Github",
      ]
  },
  { 
      type: "Lab Skills", 
      list: [
          "Oscilloscope",
          "Basic Circuit Design",
          "GPIB",
          "MatPlotLib",
          "Numpy",
      ]
  },
];



export {skills,
        skillIcons};