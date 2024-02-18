import { engineeringProjects } from "../../constants/portfolio/project-portfolio-page"
import { SectionWrapper } from "../../hoc"
import { ProjectPortfolioCard1 } from "../../components";


const EngineeringProjects = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-middle">
          <div className="font-bold text-5xl mx-auto lg:mx-0">Engineering</div>
          <div className="flex flex-row flex-wrap gap-5">
            {engineeringProjects.map((project, index) => (
              <ProjectPortfolioCard1 key={index}
                                    index={index}
                                    project={project}
              />
            ))}
          </div>
    </div>
  )
}

export default SectionWrapper(EngineeringProjects, "py-10", "engineering")