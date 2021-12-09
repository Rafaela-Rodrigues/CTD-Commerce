import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../components/pages/Home';
import AboutUs from '../components/pages/AboutUs'

const RouteList = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobrenos" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
  
  export default RouteList;