import Navbar from './components/Navbar';
import Home from './components/Home';
import Penthouse from './components/Penthouse';
import Farmhouse from './components/Farmhouse';
import Apartment from './components/Apartment';
import Bunglow from './components/Bunglow';
import Eligibility from './components/eligibility';
import { PropertyProvider } from './components/PropertyContext';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css"
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    Aos.init();
    }, [])

  return (
    <PropertyProvider>
    <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Penthouse" element={<Penthouse />} />
        <Route path="/Farmhouse" element={<Farmhouse />} />
        <Route path="/Apartment" element={<Apartment />} />
        <Route path="/Bunglow" element={<Bunglow />} />
        <Route path="/Eligibility" element={<Eligibility/>} />
        <Route path="*" element={<Home />}/>
        </Routes>
    </Router>
    </PropertyProvider>
  ); 
}

export default App;
