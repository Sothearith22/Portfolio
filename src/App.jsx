import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='flex min-h-screen flex-col bg-white dark:bg-gray-900'>
      <Navbar />
      <main className='flex-1'>
        <Routes>
          {/* Route 404 */}
          <Route path='*' element={<NotFound />} />

          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
