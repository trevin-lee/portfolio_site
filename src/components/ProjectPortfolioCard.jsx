import Carousel from "./Carousel"

const ProjectPortfolioCard = ({project}) => {
    return(
        <div className="rounded-3xl border-2 p-10">
            <h2 className="font-poppins font-bold text-4xl py-5">{project.title}</h2>
            <div className="flex flex-col lg:flex-row justify-between gap-5">
                <p className="font-light text-xl lg:w-1/2">{project.description}</p>  
                <Carousel images={project.images}
                          numSlides = {project.images.length}
                          width={500}
                          height={400}
                />
            </div>
        </div>
    )  
};

export default ProjectPortfolioCard;