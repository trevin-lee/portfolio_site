import { BrowserRouter } from 'react-router-dom';
import { Navbar, 
         Hero, 
         Technologies, 
         Projects, 
         Footer, 
         Aboutme } from './components';


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
          <Footer/>
        </div>
      </BrowserRouter>
    </main>
  )
}

export default App
