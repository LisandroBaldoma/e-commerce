import ItemsListContainer from "../components/container/ItemsListContainer";
import TabsCategory from "../components/pure/TabsCategory";

const Productos = () => {
  return (
    <div>
      <h1 className="text-primary text-center fs-1 m-4">PRODUCTOS</h1>
      <TabsCategory></TabsCategory>
      <ItemsListContainer></ItemsListContainer>
    </div>
  );
};

export default Productos;
