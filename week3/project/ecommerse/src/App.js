import OneProduct from './pages/OneProduct'
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
// import { Navigation } from './pages/Navigation';
import Favorite from './components/FavoriteProducts';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<Homepage />} />
         <Route path="/oneproduct/:prodId" element={<OneProduct />} />
         <Route path="/Favorite" element={<Favorite />} />
      </Routes>
    </div>
  
  );
 
}

export default App;
