
import './App.css';
import products from './fake-data/all-products'
import categories from './fake-data/all-categories'



function App() {
  return (
    
    <div className="App">
      <div className="title"><h1>Products</h1></div>
      
    {products.map((product, id) => {
    return(
      <div key = {id}>
        <div className = "productDescription">
          <a href = ""> <img src={product.image}></img></a>
          <a href=""><p>{product.title}</p></a>
      </div>
      </div>
    // <div key = {id}>
    //         <p>{product.title}</p>
    //         <p>{product.price}</p>
    //         <p>{product.description}</p>
    //         <p>{product.category}</p>
    //         <p>{product.image}</p>
    //         <p>{product.rating}</p>
    // </div>
    )}
    )}
    </div>
  );
}

export default App;
