import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import EarthCanvas from "./canvas/Earth";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className='bg-white h-screen flex flex-col lg:flex-row items-center lg:justify-around'>
        <div className="flex justify-center w-full">
          <div className="flex flex-col justify-center w-[50%]">
            <div className="font-bold font-poppins text-3xl xl:text-4xl 2xl:text-5xl py-3">
              Hello, i'm Trevin.
            </div>
            <div>
              <TypeAnimation
                sequence={[
                  "Mechanical Engineer",
                  2000,
                  "Research Intern",
                  2000,
                  "Front-end Developer",
                  2000,
                  "Physics Major @ UCR",
                  2000
                ]}
                speed={3}
                repeat={Infinity}
                className="absolute font-poppins font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl"
              />
            </div>
            <div className="flex text-4xl mt-10 xl:mt-[50px] 2xl:mt-[70px]">
              <a><FaGithubSquare/></a>
              <a><FaLinkedin/></a>
          </div>
          </div>
        </div>

        <div className="h-1/2 lg:h-full w-full order-1 lg:order-2">
          <EarthCanvas/>
        </div>
    </section>
  )
}


export default Hero