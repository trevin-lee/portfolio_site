import { SectionWrapper } from "../hoc" 
import { aboutMe, aboutMe2 } from "../constants/aboutmesection"
import { threeddiagram } from "../assets"


const Aboutme = () => {
  return (
    <section className="flex flex-col justify-center ">

        <div className="py-5 flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col lg:w-1/2">
            <h2 className="font-bold font-poppins text-5xl text-white py-5 lg:-mt-5 mx-auto lg:mx-0">About Me</h2>
            <p className="font-light text-white text-2xl text-left py-5">
              {aboutMe}
            </p>
            <p className="font-light text-white text-2xl text-left py-5">
              {aboutMe2}
            </p>
          </div>
          <div className="lg:w-1/2"> 
            <img src={threeddiagram}
                 width={500}
                 height={500}
                 className="rounded-[30px] shadow-2xl"/>
          </div>
        </div>

    </section>
    )
}

export default SectionWrapper(Aboutme, "py-[150px] bg-black","about")