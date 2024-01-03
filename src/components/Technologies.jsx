import React from 'react'
import { motion } from "framer-motion";

import { SectionWrapper } from '../hoc'
import { fadeIn } from "../utils/motion";
import { skills } from '../constants';

const Skills = () => {
  return (
    <section className='bg-transparent'>
      
      <div className='flex justify-center lg:justify-start'>
        <h1 className='font-bold font-poppins py-10 text-4xl'>Technologies</h1>
      </div>

      {skills.map((categories) => (
        <div className='flex flex-col lg:flex-row my-5'
             key={categories.category}>
          <h2 className='font-bold font-poppins text-lg lg:text-2xl py-7 lg:w-2/12 mx-auto'>{categories.category}</h2>
          <div className='lg:w-10/12'>
            <div className='flex flex-wrap gap-10 p-5 justify-center lg:justify-start'>
              {categories.skillsList.map((skill, index) => (
                <div className='grayscale hover:scale-125 hover:grayscale-0'>
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
          </div>
        </div>
      ))}
    </section>
  )
}

export default SectionWrapper(Skills,"bg-white", "#skills")