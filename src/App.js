//import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/custonBootstrap.scss";

import NavBar from "./components/pure/NavBar";

import ItemsListContainer from "./components/container/ItemsListContainer";

function App() {
  return (
    <div>
      <NavBar />

      <ItemsListContainer greeting="Lisandro Baldoma 2da. Entrega Comision 34875 E-Comerce-Veterinaria" />
    </div>
  );
}

export default App;
