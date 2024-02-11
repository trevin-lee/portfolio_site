import {
  artinstallation,
  artinstallation1,
  artinstallation2,
  augmentedrealitysandbox,
  augmentedrealitysandbox1,
  augmentedrealitysandbox2,
  automatedhydroponics,
  automatedhydroponics1,
  automatedhydroponics2,
  automatedhydroponics3,
  automatedhydroponics4,
  drifttricycle,
  drifttricycle1,
  drivetrain,
  drivetrain1,
  drivetrain2,
  drivetrain3,
  gardenrender,
  gardenrender1,
  gokart,
  gokartchassis,
  lampmodel,
  lampmodel1,
  positronaccumulator,
  positronaccumulator1,
  positronaccumulator2,
  retrotoasterspeaker,
  retrotoasterspeaker1,
  retrotoasterspeaker2,
  retrotoasterspeaker3,
  sampleholder,
  sampleholder1,
  sampleholder2,
  sampleholder3,
  sampleholder4,
  solarwindowblinds,
  solarwindowblinds1,
  solenoidengine,
  steeringwheel,
  steeringwheel1,
  threeddiagram,
  v6engine,

  datafinancewebsite,
  nikewebsite,
  parallaxscrollingwebsite,
  threedportfolio,

} from "../assets"

const engineeringProjects = [
  {
      title: "Optical Cryostat Sample Holder",
      images: [sampleholder, sampleholder1, sampleholder2, sampleholder3, sampleholder4],
      description: "Precision-engineered device designed to secure a variety of samples for analysis. Its adaptable structure allows for extensive application across different scientific fields."
  },
  {
      title: "Positron Accumulator Current Supply",
      images: [positronaccumulator, positronaccumulator1, positronaccumulator2],
      description: "A conceptual device aimed at harnessing advanced particle physics for energy storage. Represents a leap forward in theoretical energy systems."
  },
  {
      title: "FSAE Electric Drivetrain",
      images: [drivetrain, drivetrain1, drivetrain2, drivetrain3],
      description: "The core mechanical setup powering movement in vehicles, showcasing the intricate blend of power, efficiency, and precision."
  },
  {
      title: "Automated Hydroponic Garden",
      images: [automatedhydroponics, automatedhydroponics1, automatedhydroponics2, automatedhydroponics3, automatedhydroponics4],
      description: "A sustainable farming solution that combines cutting-edge automation with hydroponic techniques for optimal plant growth."
  },
  {
      title: "Augmented Reality Sandbox",
      images: [augmentedrealitysandbox, augmentedrealitysandbox1, augmentedrealitysandbox2],
      description: "Interactive educational tool that uses augmented reality to enhance learning about geographical, topographical, and spatial concepts."
  },
  {
      title: "FSAE Steering Wheel",
      images: [steeringwheel, steeringwheel1],
      description: "An essential interface for vehicle navigation, blending ergonomics with responsive design to provide precise control to the driver."
  },
  {
      title: "Drift Tricycle",
      images: [drifttricycle, drifttricycle1],
      description: "A modern take on the classic tricycle, engineered for controlled drifting action and providing an exhilarating riding experience."
  },
  {
      title: "Go Kart",
      images: [gokart],
      description: "High-performance kart designed for speed and agility, offering an adrenaline-pumping experience on the racetrack."
  },
  {
      title: "Go Kart Chassis",
      images: [gokartchassis],
      description: "The structural base of a go-kart, emphasizing lightweight construction and rigidity for competitive racing dynamics."
  },
  {
      title: "V6 Engine CAD Model",
      images: [v6engine],
      description: "A powerful six-cylinder engine that balances performance and efficiency, suitable for a variety of automotive applications."
  },
  {
      title: "Solenoid Engine",
      images: [solenoidengine],
      description: "A unique electromagnetic engine that operates on electrical solenoids, illustrating principles of electromechanical energy conversion."
  },
];

const designProjects = [
  {
      title: "Retro Toaster Speaker",
      images: [retrotoasterspeaker, retrotoasterspeaker1, retrotoasterspeaker2, retrotoasterspeaker3],
      description: "Blending nostalgic design with modern functionality, the Retro Toaster Speaker is an innovative audio device that delivers crisp sound. Perfect for both vintage enthusiasts and tech-savvy individuals."
  },
  {
      title: "Art Installation",
      images: [artinstallation, artinstallation1, artinstallation2],
      description: "A captivating art installation that merges various artistic mediums, creating an immersive experience. This piece reflects the convergence of traditional artistry with modern techniques, engaging the audience in a visual and emotional journey."
  },
  {
      title: "Solar Window Blinds",
      images: [solarwindowblinds, solarwindowblinds1],
      description: "Eco-friendly and aesthetically pleasing, our Solar Window Blinds offer an energy-efficient solution to light regulation. They harness solar power to provide natural illumination, revolutionizing window treatments."
  },
  {
      title: "Nano-device Diagram",
      images: [threeddiagram],
      description: "This 3D diagram showcases the intricate details of a complex system. The visualization aids in understanding spatial relationships and component functions, providing a clear representation of technical concepts."
  },
  {
      title: "Industrial Hydroponics Render",
      images: [gardenrender, gardenrender1],
      description: "Our Garden Render presents a photorealistic visualization of landscape design. It's a fusion of horticultural knowledge and artistic expression, aimed at creating serene outdoor spaces."
  },
  {
      title: "Minimalist Lamp",
      images: [lampmodel, lampmodel1],
      description: "The Lamp Model series highlights innovative lighting designs that combine form and function. These models illuminate spaces while serving as striking decorative pieces."
  }
];

const webdevProjects = [
  {
      title: "Data Finance Website",
      images: [datafinancewebsite],
      description: "Our Data Finance Website is a hub for financial analytics, offering insights and data visualization to drive informed investment decisions. It's a blend of precision and user-friendly design."
  },
  {
      title: "Nike Website",
      images: [nikewebsite],
      description: "Showcasing a sleek design, the Nike Website is tailored for an optimal user experience. It highlights the brand's apparel and encourages user interaction through an intuitive layout."
  },
  {
      title: "Parallax Scrolling Website",
      images: [parallaxscrollingwebsite],
      description: "The Parallax Scrolling Website uses dynamic scrolling to create an illusion of depth. It's an engaging and interactive way to navigate content, leaving a lasting impression on visitors."
  },
  {
      title: "3D Portfolio",
      images: [threedportfolio],
      description: "This 3D Portfolio is an interactive platform showcasing digital artwork and projects. It provides an immersive experience, allowing viewers to engage with the portfolio in a unique and memorable way."
  }
];









const navLinks = [
    { href: "#websites", label: "Websites" },
    { href: "#software", label: "Software" },
    { href: "#engineering", label: "Engineering" },
    { href: "#design", label: "Design" },
];


export { engineeringProjects, designProjects, webdevProjects, navLinks };