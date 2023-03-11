import logo from './logo.svg';
import './App.css';
import items from './Guarantee';

function App() {
  return(
    <div>
      {items.map((item, index) => {
        return(
          <div key = {index}>
            <div>
            <img src = {item.image}></img>
            <p>{item.title}</p>
            <p>{item.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
 
}

export default App;
