import ItemsListContainer from "../components/container/ItemsListContainer";
import TabsCategory from "../components/pure/TabsCategory";

const Productos = () => {
  return (
    <div>
      <h1>LISTADO DE PRODUCTOS</h1>
      <TabsCategory></TabsCategory>
      <ItemsListContainer
        greeting={"LISTADO DE PRODUCTOS"}
      ></ItemsListContainer>
    </div>
  );
};

export default Productos;
