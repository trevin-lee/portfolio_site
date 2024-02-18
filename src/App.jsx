import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hero, 
         Technologies, 
         ProjectHighlights, 
         Contact,
         Footer, 
         AboutMe,
         
        EngineeringProjects,
        SoftwareProjects,
        DesignProjects,
        PortfolioHero} from './sections';
import { Navbar } from './components';
import { portfolioNavLinks } from './constants/portfolio/project-portfolio-page';
import { mainNavLinks } from './constants/main/hero-section';


const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {
            <>
              <Navbar navLinks={mainNavLinks}/>
              <Hero/>
              <AboutMe/>
              <Technologies/>
              <ProjectHighlights/>
              <Contact/>
              <Footer/>
            </>
          }/>

          <Route path="/projects" element = {
            <>
               <Navbar navLinks={portfolioNavLinks}/>
               <PortfolioHero/>
               <EngineeringProjects/>
               <SoftwareProjects/>
               <DesignProjects/>
            </>
          }/>

        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
