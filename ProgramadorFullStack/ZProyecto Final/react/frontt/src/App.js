import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"

import Contactanos from './pages/Contactanos';
import EventosEspeciales from './pages/EventosEspeciales';
import Index from './pages/Index';
import Nosotros from './pages/Nosotros';
import Tortas from './pages/Tortas.js';
import NovedadesPage from './pages/novedades';




import './styles/Decoraciones.css'

function App() {
  return (
    <div className="App">
        
        <Header/>
        <BrowserRouter>
          <Nav/>
          <Routes>       
            <Route path= "/" element = {<Index />} />
            <Route path= "/eventos-especiales" element = {<EventosEspeciales/>} /> 
            <Route path= "/contactanos" element = {<Contactanos/>} /> 
            <Route path= "/nosotros" element = {<Nosotros/>} /> 
            <Route path= "/tortas" element = {<Tortas/>} />
            <Route path= "/novedades" element = {<NovedadesPage/>} /> 
            
          </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
