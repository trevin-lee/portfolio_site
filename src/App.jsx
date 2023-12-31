import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero, Skills } from './components';


const App = () => {

  return (
    <main className='flex-col'>
      <BrowserRouter>
        <div>
          <div>
            <Navbar/>
            <Hero/>
          </div>
          <Skills/>
        </div>
      </BrowserRouter>
    </main>
  )
}

export default App
