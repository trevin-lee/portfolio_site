import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hero, 
         Technologies, 
         ProjectHighlights, 
         Contact,
         Footer, 
         AboutMe,
         ProjectPortfolio } from './sections';



const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {
            <>
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
               <ProjectPortfolio/>
            </>
          }/>

        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
