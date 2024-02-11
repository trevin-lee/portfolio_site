import { SectionWrapper } from "../../hoc" 
import { Navbar, ProjectPortfolioCard } from "../../components";
import { engineeringProjects, designProjects, webdevProjects, navLinks } from "../../constants/project-portfolio-page"


const ProjectPortfolio = () => {
  return (
    <section className='flex justify-center'>
      <Navbar navLinks={navLinks}/>
      
      <div>

        <div className="mt-[100px] flex flex-col gap-5 justify-center items-middle">
          <div className="font-bold text-5xl mx-auto lg:mx-0">Engineering</div>
          <div className="flex flex-row flex-wrap gap-5">
            {engineeringProjects.map((project, index) => (
              <ProjectPortfolioCard key={index}
                                    index={index}
                                    project={project}
              />
            ))}
          </div>
        </div>

        <div className="mt-[100px] flex flex-col gap-5 justify-center items-middle">
          <div className="font-bold text-5xl mx-auto lg:mx-0">Design</div>
          <div className="flex flex-row flex-wrap gap-5">
            {designProjects.map((project, index) => (
              <ProjectPortfolioCard key={index}
                                    index={index}
                                    project={project}
              />
            ))}
          </div>
        </div>

        <div className="mt-[100px] flex flex-col gap-5 justify-center items-middle">
          <div className="font-bold text-5xl mx-auto lg:mx-0">Web Development</div>
          <div className="flex flex-row flex-wrap gap-5">
            {webdevProjects.map((project, index) => (
              <ProjectPortfolioCard key={index}
                                    index={index}
                                    project={project}
              />
            ))}
          </div>
        </div>

      </div>


    </section>
  )
}

export default SectionWrapper(ProjectPortfolio,"","ProjectPortfolio")