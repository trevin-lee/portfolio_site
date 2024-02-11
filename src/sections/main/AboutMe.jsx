import { SectionWrapper } from "../../hoc" 
import { aboutMe} from "../../constants/about-me-section"
import { v6engine } from "../../assets"


const AboutMe = () => {
  return (
    <section className="flex flex-col justify-center ">
        
        <div className="font-bold font-poppins text-5xl py-5 mx-auto lg:mx-0">About Me</div>
        <div className="flex flex-col gap-5 lg:flex-row justify-between">

          <div className="flex flex-col gap-5 lg:w-1/2">
            <p className="font-light text-2xl text-left">
              {aboutMe}
            </p>
            <p className="text-bold text-2xl text-left rounded-xl border-2 p-5"> B.S. Physics</p>
            <p className="text-bold text-2xl text-left rounded-xl border-2 p-5"> GPA: 3.88</p>
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