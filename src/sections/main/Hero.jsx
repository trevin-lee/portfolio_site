import { TypeAnimation } from 'react-type-animation';
import { heroTypeAnimationList } from "../../constants/main/hero-section";
import SampleholderCanvas from "../../components/canvas/Sampleholder";
import { IconBar } from "../../components";

const Hero = () => {
  return (
    <section className='flex justify-center h-screen'>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-[80%] max-w-screen-xl h-full">
        <div className="-mt-10 lg:mt-0">
          <h1 className="flex justify-center lg:justify-start text-3xl md:text-4xl 2xl:text-5xl py-2">
            Hello, I'm Trevin.
          </h1>
          <div className="flex justify-center lg:justify-start">
            <TypeAnimation
                  sequence={ heroTypeAnimationList }
                  speed={3}
                  repeat={Infinity}
                  className="absolute font-poppins-400 font-bold text-2xl sm:3xl md:text-5xl  2xl:text-6xl"
                />
          </div>
          <div className='justify-center lg:justify-start mt-[50px] md:mt-[60px] 2xl:mt-[70px]'>
            <IconBar buttonText="Projects"
                    url="/#/projects"/>
          </div>
        </div>

        <div className="h-1/2 xl:h-3/4 lg:h-7/12 w-full lg:w-6/12 xl:w-5/12 -order-1 lg:order-2">
          <SampleholderCanvas/>
        </div>

      </div>
    </section>
  )
}


export default Hero