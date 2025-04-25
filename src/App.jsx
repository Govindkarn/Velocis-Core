import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './assets/css/Contact.css'
import './assets/css/About.css'
import './assets/css/Index.css'
import './assets/css/Services.css'
import './assets/css/Team.css'

import Header  from './components/Header'
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Footer from './components/Footer';
import Services from './pages/Services'


function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/team" element={<Team/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
