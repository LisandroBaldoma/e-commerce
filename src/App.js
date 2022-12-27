
//import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/custonBootstrap.scss' 
 

import NavBar from "./components/NavBar"

import ItemsListContainer from "./components/ItemsListContainer"

function App() {
  return (
    <div>
      
      <NavBar />
      
      <ItemsListContainer greeting = "Lisandro Baldoma 1er. Entrega Comision 34875 E-Comerce-Veterinaria"/>
      
    </div>
  );
}

export default App;
