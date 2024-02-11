import { SectionWrapper } from "../../hoc" 
import { email } from "../../constants/contact-section";
import { CopyButton } from "../../components";
import { RiLinkedinBoxLine, RiGithubLine } from "react-icons/ri";


 
const Contact = () => {

  return (
    <section className="flex flex-col w-full h-[500px] justify-center">
      
      <div className='font-bold font-poppins text-5xl py-5 mx-auto lg:mx-0'>Contact</div>
      <div className="flex flex-row flex-wrap justify-around drop-shadow-xl rounded-2xl border-2">

        <div className="flex items-center p-5 gap-2 font-bold">
          <CopyButton copyString = {email}/>
          <p className="text-xl">{email}</p>
        </div>

        <a href="https://linkedin.com/in/trevinlee"
             className="flex items-center p-5 gap-2 font-bold">
          <RiLinkedinBoxLine className="text-2xl"/>
          <p className="text-xl">LinkedIn</p>
        </a>

        <a href="https://github.com/CRXKXWYI49"
             className="flex items-center p-5 gap-2 font-bold">
          <RiGithubLine className="text-2xl"/>
          <p className="text-xl">Github</p>
        </a>

      </div>

    </section>
  )
}

export default SectionWrapper(Contact, "py-[150px]", "contact")