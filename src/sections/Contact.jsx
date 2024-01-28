import { SectionWrapper } from "../hoc" 
import { email } from "../constants";
import { CopyButton } from "../components";
import { RiLinkedinBoxLine} from "react-icons/ri";

 
const Contact = () => {


  return (
    <section className="flex flex-col w-full h-[500px] justify-center">
      <div className='font-bold font-poppins text-5xl py-5 mx-auto lg:mx-0'>Contact</div>
      <div className="flex flex-row justify-around drop-shadow-xl">

        <div className="flex items-center p-5 gap-2 font-bold rounded-xl border-2">
          <CopyButton copyString = {email}/>
          <p className="text-xl">{email}</p>
        </div>

        <a href="https://linkedin.com/in/trevinlee"
             className="flex items-center p-5 gap-2 font-bold rounded-xl border-2">
          <RiLinkedinBoxLine className="text-2xl"/>
          <p className="text-xl">LinkedIn</p>
        </a>

      </div>
    </section>
  )
}

export default SectionWrapper(Contact, "py-5", "contact")