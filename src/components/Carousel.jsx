import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, 
         Slider, 
         Slide, 
         ButtonBack, 
         ButtonNext, 
         DotGroup, 
         Image } from 'pure-react-carousel';

import { IoIosArrowForward, 
         IoIosArrowBack } from "react-icons/io";

const Carousel = ({images, numSlides, width, height}) => {
  return (
    <CarouselProvider
      naturalSlideWidth={width}
      naturalSlideHeight={height}
      totalSlides={numSlides}
      visibleSlides={1}
      infinite="True"
      className='lg:w-1/2 lg:px-7'
    >
      <div className='relative'>
        <Slider className='rounded-2xl border-2'>
          {images.map((image, index) => (
          <Slide key={index}
                 index={index}>
              <Image src={image}
                   className=''/>  
          </Slide> 
          ))}
        </Slider>
        
        {numSlides > 1 && (
          <>
            <ButtonBack className='absolute top-1/2 -left-7 transform -translate-y-1/2'>
              <IoIosArrowBack />
            </ButtonBack>
            <ButtonNext className='absolute top-1/2 -right-7 transform -translate-y-1/2'>
              <IoIosArrowForward />
            </ButtonNext>
          </>
        )}

      </div>
    </CarouselProvider>
  )
}

export default Carousel