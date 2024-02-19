import { IconBar } from "../../components";

const PortfolioHero = () => {
  return (
    <section className='flex justify-center h-screen'>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-[80%] max-w-screen-xl h-full">
        
        <div className="">
          <h1 className="flex font-bold justify-center text-7xl lg:text-8xl py-2">
            My Project Portfolio
          </h1>
          <IconBar buttonText="Main Site"
                   url="/#/"
          />
        </div>
      </div>
    </section>
  )
}

export default PortfolioHero