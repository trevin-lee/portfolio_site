import Carousel from "./Carousel"

const ProjectPortfolioCard1 = ({project, carouselWidth=500, carouselHeight=400}) => {
    return(
        <div className="rounded-3xl w-full border-2 p-7 lg:p-10">
            
            <div className="flex flex-col lg:flex-row justify-between py-5">
                <h2 className="text-3xl font-semibold font-poppins">{project.title}</h2>
                <p className="text-xl font-extralight">{project.date}</p>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-5">
                <div className="flex flex-col lg:w-1/2">
                    <p className="font-light text-xl">{project.description}</p>  

                    <div className="flex flex-col gap-3 py-5">
                        {project.experiences.map((bulletpoint) => (
                            <p>{bulletpoint}</p>
                        ))}
                    </div>

                </div>
                <Carousel images={project.images}
                          numSlides={project.images.length}
                          width={carouselWidth}
                          height={carouselHeight}
                          tailWindClasses={"lg:w-1/2"}
                />
            </div>
            
        </div>
    )  
};

export default ProjectPortfolioCard1;