import 'bootstrap/dist/css/bootstrap.min.css'; 

import NavBar from "./components/NavBar"

import ItemsListContainer from "./components/ItemsListContainer"

function App() {
  return (
    <div>
      
      <NavBar />
      
      <ItemsListContainer greeting = "Lisandro E-Comerce"/>
      
    </div>
  );
}

export default App;
