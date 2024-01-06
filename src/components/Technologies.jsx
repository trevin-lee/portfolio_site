import React from 'react'
import { motion } from "framer-motion";

import { SectionWrapper } from '../hoc'
import { fadeIn } from "../utils/motion";
import { skills } from '../constants';

const Skills = () => {
  return (
    <section className='bg-transparent py-10'>
      
      <div className='flex justify-center lg:justify-start'>

      </div>
            <div className='flex flex-wrap gap-10 p-5 justify-center'>
              {skills.map((skill, index) => (
                <div className='hover:scale-125 hover:grayscale-0'>
                  <motion.div
                    variants={fadeIn("right", "spring", index * 0.2, 0.75)}
                    key={skill.name}
                    className='w-[40px] h-[40px] lg:w-[80px] lg:h-[80px]'
                  >
                    <img src={skill.imgURL}
                          className='mx-auto'/>
                  </motion.div>
                </div>
              ))}
            </div>
    </section>
  )
}

export default SectionWrapper(Skills,"bg-[#f9f9f9]", "#skills")