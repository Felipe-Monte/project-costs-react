import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Navbar from './components/layout/Navbar'

import Container from './components/layout/Container'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Company from './pages/Company'
import Contact from './pages/Contact'
import NewProject from './pages/NewProject'

import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      
      <Container customClass="min_height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App;
