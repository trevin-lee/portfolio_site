import { SectionWrapper } from "../../hoc" 
import { aboutMe } from "../../constants/main/about-me-section"
import { v6engine } from "../../assets"


const AboutMe = () => {
  return (
    <section className="flex flex-col justify-center ">
        
        <div className="font-bold font-poppins text-5xl py-5 mx-auto lg:mx-0">About Me</div>
        <div className="flex flex-col gap-5 lg:flex-row justify-between">

          <div className="flex flex-col gap-2 lg:w-1/2">
            <p className="font-light text-2xl text-left">
              {aboutMe[0].bio}
            </p>
            <p className="font-thin text-2xl text-left"> {aboutMe[0].school}</p>
            <p className="font-thin text-2xl text-left"> {aboutMe[0].gpa}</p>
          </div>

          <div> 
            <img src={ v6engine }
                 width={500}
                 height={500}
                 className="rounded-[30px]"
            />
          </div>
        </div>
    </section>
    )
}

export default SectionWrapper(AboutMe, "py-[150px]","about")