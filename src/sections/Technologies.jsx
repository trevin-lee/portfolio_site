import React from 'react'
import { motion } from "framer-motion";

import { SectionWrapper } from '../hoc'
import { fadeIn } from "../utils/motion";
import { skillIcons } from '../constants/technologiessection';

const Skills = () => {
  return (
    <section className='flex flex-col justify-center h-screen w-full'>

      <div className='font-bold font-poppins text-5xl py-5 mx-auto lg:mx-0'>Technologies</div>

      <div className='rounded-xl shadow-xl'> 
        AOIPWD

      </div>

      <div className='flex flex-wrap justify-between pt-5'>
        {skillIcons.map((skill, index) => (
          <div className='hover:scale-125'>
            <motion.div
              variants={fadeIn("right", "spring", index * 0.2, 0.75)}
              key={skill.name}
              className='w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]'
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

export default SectionWrapper(Skills,"py-5", "technologies")