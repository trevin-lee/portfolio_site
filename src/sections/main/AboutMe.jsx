import { SectionWrapper } from "../../hoc" 
import { motion } from "framer-motion"
import { textVariant } from "../../utils/motion"
import { aboutMe } from "../../constants/main/about-me-section"
import { v6engine } from "../../assets"


const AboutMe = () => {
  return (
    <section className="flex flex-col justify-center ">
        
        <div className="font-bold font-poppins text-5xl py-5 mx-auto lg:mx-0">About Me</div>
        <div className="flex flex-col gap-5 lg:flex-row justify-between">

          <motion.div className="lg:w-1/2"
                      variants={textVariant(0.5)}>
            <p className="font-dark font-poppins text-4xl">{aboutMe[0].school}</p>
            <p className="font-thin text-3xl py-5"> {aboutMe[0].bio}</p>

          </motion.div>

          <img src={ v6engine }
                className="rounded-2xl lg:w-1/2"
          />
        </div>
    </section>
    )
}

export default SectionWrapper(AboutMe, "py-[150px]","about")