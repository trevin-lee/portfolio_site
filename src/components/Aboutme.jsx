import { SectionWrapper } from "../hoc" 
import { aboutMe } from "../constants"

const Aboutme = () => {
  return (
    <section className="flex flex-col justify-center h-screen">
        <h2 className="font-bold font-poppins text-5xl py-5">About Me</h2>
        <div className="py-5">
          <p className="font-poppins text-xl">
            {aboutMe}
          </p>
          <div>
            <img/>
          </div>
        </div>
    </section>
    )
}

export default SectionWrapper(Aboutme, "py-5","")