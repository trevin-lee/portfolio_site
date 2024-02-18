import { designProjects } from "../../constants/portfolio/project-portfolio-page"
import { SectionWrapper } from "../../hoc"
import { ProjectPortfolioCard3 } from "../../components";


const DesignProjects = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-middle">
        <div className="font-bold text-5xl mx-auto lg:mx-0">Design</div>

        <div className="grid lg:grid-cols-2 gap-5">
          {designProjects.map((project, index) => (
              <ProjectPortfolioCard3 key={index}
                                  index={index}
                                  project={project}
                                  className="w-full"
                                  
              />
          ))}
        </div>
    </div>
  )
}

export default SectionWrapper(DesignProjects, "py-10", "design")