import Carousel from "./Carousel"

const ProjectPortfolioCard3 = ({project}) => {
    return(
        <div className="flex flex-col justify-between gap-5 rounded-3xl  border-2 p-10">
            <div className="flex flex-col lg:flex-row justify-between py-5">
                <h2 className="text-3xl font-semibold font-poppins">{project.title}</h2>
                <p className="text-xl font-extralight">{project.date}</p>
            </div>
            <div className="flex flex-col">
                <p className="font-light text-xl">{project.description}</p>  
            </div>
            <Carousel images={project.images}
                      numSlides={project.images.length}
                      width={500}
                      height={500}
                      tailWindClasses={"w-full"}
            />
        </div>
    )  
};

export default ProjectPortfolioCard3;