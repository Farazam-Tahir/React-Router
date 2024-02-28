import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from'./Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import NoPage from './Pages/NoPage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className='items'>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/about' Component={About}/>
        <Route path='/services' Component={Services}/>
        <Route path='*' Component={NoPage}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
