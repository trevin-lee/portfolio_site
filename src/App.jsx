import { HashRouter, Routes, Route } from 'react-router-dom';
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
      <HashRouter>
        <Routes>
          <Route path="/" element = {
            <>
              <Navbar navLinks={mainNavLinks}/>
              <Hero/>
              <AboutMe/>
              <ProjectHighlights/>
              <Technologies/>
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
      </HashRouter>
    </main>
  )
}

export default App
