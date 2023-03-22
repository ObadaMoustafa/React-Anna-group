
import OneProduct from './pages/OneProduct'
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<Homepage />} />
         <Route path="/oneproduct/:prodId" element={<OneProduct />} />
      </Routes>
    </div>
  
  );
 
}

export default App;