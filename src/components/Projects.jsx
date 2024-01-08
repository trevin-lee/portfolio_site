import { SectionWrapper } from "../hoc" 
 
const Projects = () => {
  return (
    <section className="h-[500px]">
      <div className='font-bold font-poppins text-5xl py-5'>Projects</div>

    </section>
  )
}

export default SectionWrapper(Projects, "py-5", "")