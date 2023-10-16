import './App.css';
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<>
          <Home />
        </>} />
        <Route path="/about" element={<>
          <Navbar />
          <About />
        </>} />
      </Routes>
    </Router>
  );
}

export default App;
