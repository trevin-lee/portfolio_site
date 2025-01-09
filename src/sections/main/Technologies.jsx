import React from 'react'
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';

import { SectionWrapper } from '../../hoc'
import { fadeIn } from "../../utils/motion";
import { skillIcons, skills } from '../../constants/main/technologies-section';


const Technologies = () => {
  return (
    <section className='flex flex-col justify-center lg:h-screen w-full'>

      <div className='font-bold font-poppins text-5xl py-5 mx-auto lg:mx-0'>Technologies</div>
      <div className='flex flex-col lg:flex-row justify-between gap-5 rounded-2xl w-full'>
        {skills.map((category, index) => (
          <Tilt className='lg:w-1/3 '>
            <motion.div key={index} 
                        variants={fadeIn("right", "spring", index * 0.5, 1)}
                        className='border-2 rounded-2xl p-5 h-full'
            >
              <div className='text-3xl font-bold py-1'>{category.type}</div>
              {category.list.map((skill, skillIndex) => (
                <div key={skillIndex}
                    className='flex items-center gap-1 font-light text-xl py-[1px]'>
                  {skill}
                </div>
              ))}
            </motion.div>
          </Tilt>
        ))}

      </div>


      <div className='grid lg:grid-rows-1 grid-rows-2 lg:grid-cols-10 grid-cols-5 place-items-center py-11'>
        {skillIcons.map((skill, index) => (
          <div key={index}
               className=''>
            <Tilt>
              <motion.div
                variants={fadeIn("right", "spring", index * 0.2, 0.75)}
                key={skill.name}
              >
                <img src={skill.imgURL}
                      className='mx-auto hover:scale-125 w-[60px] h-[60px]'/>
              </motion.div>
            </Tilt>
          </div>
        ))}
      </div>

    </section>
  )
}

export default SectionWrapper(Technologies,"py-5", "technologies")