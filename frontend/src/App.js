import './App.css';
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Map from './components/Map'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/map" element={<Map/>} />
        <Route path="/about" element={<>
          <Navbar />
          <About />
        </>} />
      </Routes>
    </Router>
  );
}

export default App;
