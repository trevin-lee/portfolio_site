import { SectionWrapper } from "../../hoc" 
import { highlights } from "../../constants/main/project-highlights-section"
import { fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { IoIosArrowForward } from "react-icons/io";


const ProjectCard = ({index, title, images, description}) => (
  <Tilt>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 1)}
      className='lg:w-[400px] lg:h-[700px] rounded-3xl border-2 p-10'
    >
      <h2 className="font-poppins font-bold text-4xl py-5">{title}</h2>

      <div className="flex flex-col justify-between gap-10">
        <p className="font-light text-xl">{description}</p>
        <div className="mx-auto">
          <img src={images[0]}
               className="rounded-xl"/>
        </div>
      </div>

    </motion.div>
  </Tilt>
);



const Projects = () => {
  return (
    <section className="flex flex-col gap-5 justify-center items-middle">
      <div className="font-bold font-poppins text-5xl py-5 mx-auto lg:mx-0">Projects</div>
      <div className="flex flex-row flex-wrap gap-5">
        {highlights.map((project, index) => (
          <ProjectCard  key={index}
                        index = {index}
                        title = {project.title}
                        images = {project.images}
                        description = {project.description}
          />
        ))}
      </div>
      
      <a href="/#/projects"
         className="mx-auto">
        <div className="flex flex-row items-center border-2 border-black rounded-xl p-2 my-10">
          <p className="text-xl text-black font-extralight">View More</p> 
          <IoIosArrowForward className="text-xl pt-1 pl-2"/>
        </div>
      </a>

    </section>
  )
}

export default SectionWrapper(Projects, "py-5", "projectHighlights")