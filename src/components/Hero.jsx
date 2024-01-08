import { RiLinkedinBoxLine, RiGithubLine } from "react-icons/ri";
import { TypeAnimation } from 'react-type-animation';
import { heroTypeAnimation } from "../constants";
import SampleholderCanvas from "./canvas/Sampleholder";

const Hero = () => {
  return (
    <section className='flex justify-center h-screen'>
    
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-[80%] max-w-screen-xl h-full">
        <div >
          <h1 className="flex justify-center font-bold font-poppins text-3xl md:text-4xl 2xl:text-5xl 2xl:py-1">
            Hello, I'm Trevin.
          </h1>
          <div className="flex justify-center lg:justify-start">
            <TypeAnimation
                  sequence={ heroTypeAnimation }
                  speed={3}
                  repeat={Infinity}
                  className="absolute font-poppins-400 font-bold text-4xl md:text-5xl  2xl:text-6xl"
                />
          </div>
          <div className="flex justify-center lg:justify-start text-4xl mt-[50px] 2xl:mt-[70px]">
            <a href="https://linkedin.com/in/trevinlee"
               className="hover:scale-105">
              <RiLinkedinBoxLine />
            </a>
            <a href="https://github.com/CRXKXWYI49"
               className="hover:scale-105">
              <RiGithubLine />
            </a>
          </div>
        </div>

        <div className="h-1/2 xl:h-3/4 lg:h-7/12 w-full md:w-5/12 xl:w-6/12 -order-1 lg:order-2">
          <SampleholderCanvas/>
        </div>

      </div>
    </section>
  )
}


export default Hero