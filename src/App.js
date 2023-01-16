//import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/custonBootstrap.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemsDetailConteiner from "./components/container/ItemsDetailConteiner";
import Home from "./pages/Home";
import Fisioterapia from "./pages/Fisioterapia";
import Productos from "./pages/Productos";
import Turnos from "./pages/Turnos";
import Contacto from "./pages/Contacto";
import NavBar2 from "./components/pure/NavBar";


function App() {
  return (
    <div>
      <BrowserRouter>        
        <NavBar2 />
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/fisioterapia" element={<Fisioterapia />}/>
        <Route path="/productos" element={<Productos />}/>
        <Route path="productos/categoria/:categoria" element={<Productos />}/>
        <Route path="productos/categoria/:categoria/producto/:id" element={<ItemsDetailConteiner/>}/>         
        <Route path="productos/producto/:id" element={<ItemsDetailConteiner/>}/>
        <Route path="/turnos" element={<Turnos />}/>
        <Route path="/contactos" element={<Contacto />}/>         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
