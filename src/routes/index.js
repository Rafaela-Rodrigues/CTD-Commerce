import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../components/pages/Home';
import AboutUs from '../components/pages/AboutUs'
import Products from '../components/pages/Products'


const RouteList = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobrenos" element={<AboutUs />} />
        <Route path="produtos" element={<Products />} />
        <Route path="produtos/categorias/1" element={<Products/>} />
      </Routes>
    </BrowserRouter>
  );
  
  export default RouteList;