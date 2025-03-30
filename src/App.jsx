import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components';
import { Hero, 
         Technologies, 
         ProjectHighlights, 
         Contact,
         Footer, 
         AboutMe,
         
         EngineeringProjects,
         SoftwareProjects,
         DesignProjects,
         PortfolioHero } from './sections';
import { Navbar } from './components';
import { portfolioNavLinks } from './constants/portfolio/project-portfolio-page';
import { mainNavLinks } from './constants/main/hero-section';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const App = () => {
  return (
    <main>
      <Analytics />
      <SpeedInsights />
      <Router>
          <ScrollToTop/>
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
      </Router>
    </main>
  )
}

export default App
