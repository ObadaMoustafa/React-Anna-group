import './App.css';
import Category from './Category';
import Products from './Products';

function App() {
  return (
    
    <div className="App">
      <div className="title">
        <div className = "titleProd"><h1>Products</h1></div>
        <div className="titleLinks">
        <a href ="./App.js">Products</a>
        <a href ="">Favourites</a>
        </div>
      </div>
    {/* <div className = "filterCategory">
      <p>{categories[0].split(1)}</p>
      <p>{categories[1]}</p>
      <p>{categories[2]}</p>
      <p>{categories[3]}</p>
    </div> */}
    <Category />
    <Products />
      {/* {categories.map((category,index) => {
        return(
          <div key = {index}>
            <div className = "filterCategory">
            <button className="category"><strong>{category[0]}</strong></button>
            <button className="category"><strong>{category[1]}</strong></button>
            <button className="category"><strong>{category[2]}</strong></button>
            <button className="category"><strong>{category[3]}</strong></button>
            </div>
          </div>
        )
      })
      } */}
    </div>
  );
  
}


export default App;
