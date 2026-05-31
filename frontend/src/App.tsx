import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';

const App = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Projects />} />
          <Route path="/" element={<Contact/>} />
          <Route path="/" element={<About />} />
        </Routes>
    </Router>
  )
}

export default App