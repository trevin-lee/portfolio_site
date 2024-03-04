import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, tailwindClasses, idName) =>
  function HOC() {
    return (
      <div className={`${tailwindClasses}`}>
        <motion.section
          variants={staggerContainer()}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}
          className='flex w-[90%] lg:w-[80%] max-w-screen-xl mx-auto z-0'
        >
          <span className='hash-span' id={idName}>&nbsp;</span>
          <Component />
        </motion.section>
      </div>
    );
  };

export default SectionWrapper;