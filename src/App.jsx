import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero, Technologies, Footer } from './components';


const App = () => {

  return (
    <main>
      <BrowserRouter>
        <div>
          <div>
            <Navbar/>
            <Hero/>
          </div>
          <Technologies/>
          <Footer/>
        </div>
      </BrowserRouter>
    </main>
  )
}

export default App
