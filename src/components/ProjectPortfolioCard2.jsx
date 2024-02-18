import { RiGithubLine } from "react-icons/ri";


const ProjectPortfolioCard2 = ({project}) => {
    return(
        <div className="rounded-3xl w-full border-2 p-10">
            <div className="flex text-4xl items-center">
                <h2 className="font-poppins font-bold text-4xl py-5">{project.title}</h2>
                <a href={project.link}
                   className="hover:scale-[1.2] ml-5">
                    <RiGithubLine/>
                </a>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-5">
                <p className="font-light text-xl">{project.description}</p>  
            </div>
        </div>
    )  
};

export default ProjectPortfolioCard2