import { softwareProjects } from "../../constants/portfolio/project-portfolio-page"
import { SectionWrapper } from "../../hoc"
import { ProjectPortfolioCard2 } from "../../components";


const SoftwareProjects = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-middle">
        <div className="font-bold text-5xl mx-auto lg:mx-0">Software</div>
        <div className="flex flex-row flex-wrap gap-5">

          {softwareProjects.map((project, index) => (
            <ProjectPortfolioCard2 key={index}
                                  index={index}
                                  project={project}
            />
          ))}

        </div>
    </div>
  )
}

export default SectionWrapper(SoftwareProjects, "py-10", "software")