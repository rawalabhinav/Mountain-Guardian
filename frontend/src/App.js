import './App.css';
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Map from './components/Map'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<>
          <Navbar />
          {/* <Home /> */}
          <Map />
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
