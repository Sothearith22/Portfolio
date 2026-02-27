import React from 'react'
import Navbar from './components/common/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import { Notfound } from './pages/Notfound'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 min-h-screen'>
      <Navbar/>
        <Routes>
          {/* Route 404 */}
          <Route path='*'element={<Notfound/>}/>

            <Route path="/" element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/projects'element={<Projects/>}/>
            <Route path='/skills' element={<Skills/>}/>
        </Routes>
    </div>
  )
}

export default App
