import { SectionWrapper } from "../hoc" 
import { highlights } from "../constants"
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

import { IoIosArrowForward } from "react-icons/io";


const ProjectCard = ({index, title, imgURL, description}) => (
  <div key={title}>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.2, 0.75)}
        className='w-[400px] h-[700px] rounded-3xl shadow-lg p-10'
      >
        <h2 className="font-poppins font-bold text-4xl py-5">{title}</h2>

        <div className="flex flex-col justify-between gap-10">
          <p className="font-light text-xl">{description}</p>
          <div className="mx-auto">
            <img src={imgURL}
                 className='mx-auto  rounded-3xl'
            />
          </div>
        </div>

      </motion.div>
  </div>
);



const Projects = () => {
  return (
    <section className="flex flex-col gap-5  justify-center items-middle">
      <div className="font-bold font-poppins text-5xl mx-auto lg:mx-0">Projects</div>
      
      <div className="flex flex-row flex-wrap gap-5">
        {highlights.map((project, index) => (
          <ProjectCard
                        title = {project.title}
                        imgURL = {project.imgURL}
                        description = {project.description}
                        index = {index}
          />
        ))}
      </div>
      
      <a href="#"
         className="mx-auto">
        <div className="flex flex-row items-center border-2 border-black rounded-xl p-2 my-10">
          <p className="text-xl text-black font-extralight">View More</p> 
          <IoIosArrowForward className="text-xl pt-1 pl-2"/>
        </div>
      </a>


    </section>
  )
}

export default SectionWrapper(Projects, "py-5", "projects")