import './App.css';
import { Index } from './Componentes/Index';
import { Contacto } from './Componentes/Contacto';
import { Navbar } from './Componentes/NavBar';
import { Footer } from './Componentes/Footer';
import { Route, Routes } from 'react-router-dom';
import { SobreNosotros } from './Componentes/SobreNosotros';
import { Servicios } from './Componentes/Servicios';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='Contacto' element={<Contacto />} />
        <Route path='Nosotros' element={<SobreNosotros />} />
        <Route path='Servicios' element={<Servicios />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
