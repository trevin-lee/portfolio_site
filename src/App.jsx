import { BrowserRouter } from 'react-router-dom';
import { Hero, 
         Technologies, 
         Projects, 
         Contact,
         Footer, 
         Aboutme } from './sections';
import { Navbar } from './components';


const App = () => {

  return (
    <main>
      <BrowserRouter>
        <div>
          <div>
            <Navbar/>
            <Hero/>
          </div>
          <Aboutme/>
          <Technologies/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
      </BrowserRouter>
    </main>
  )
}

export default App
