
import '../scss/ItemsListContainer.scss';

function ItemsListContainer({greeting}) {
  
  return (
    <div className="card">
      <h1 className="ItemsListCustom">{greeting}</h1>
    </div>
    
  );
}

export default ItemsListContainer;