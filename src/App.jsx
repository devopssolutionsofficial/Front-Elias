import './App.css'
import { Route, Routes } from 'react-router-dom'

import Background from './components/Background'
import Header from './components/Header'
import Us from './components/Us'
import Contact from './components/Contact'
import Proyects from './components/Proyects'
import About from './components/About'
import { Toaster } from 'solid-toast'

function App() {


  return (
  <>
      <Background/>
    <main className='px-6'>

      <div className='w-full xl:max-w-[1080px] mx-auto'>

          <Header />

          <Routes>

            <Route path='/' element={<Us/>} />

            <Route path='/proyects' element={<Proyects />} />

            <Route path='/about' element={<About />} />

            <Route path='/contact' element={<Contact />} />


          </Routes>



      </div>
    </main>
    
    </>
  )
}

export default App
