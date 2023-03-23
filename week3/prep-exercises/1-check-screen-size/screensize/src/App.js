import './App.css';
import { useState, useEffect } from 'react'

function useWindowSize() {
   const [screenSize, setScreenSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight
   })

   useEffect(() => {
      window.addEventListener('resize', resizeHandler);
   }, []);

   function resizeHandler() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight })
   }
   return screenSize
}

function App() {
   const { width, height } = useWindowSize()



   return (
      <div className="App">
         <h1>CURRENT SCREEN SIZE</h1>
         <h2>{width}/{height}</h2>
      </div>
   );
}

export default App;
