import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Container from './components/layout/Container'

import Home from './pages/Home'
import Company from './pages/Company'
import Contact from './pages/Contact'
import NewProject from './pages/NewProject'

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo projeto</Link>
      </ul>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/NewProject" element={<NewProject />} />
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  )
}

export default App;
