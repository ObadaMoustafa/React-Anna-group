import './App.css';
import { useState } from 'react'

const Counter = () => {
   const [count, setCount] = useState(0);
   const feedback = (count > 10) ? `It's higher than 10!` : `Keep counting...`

   function Count(prop) {
      const operation = prop.split(' ');
      if (operation[0] === 'Add') {
         setCount(count + parseFloat(operation[1]))
      }
      else {
         if ((count - parseFloat(operation[1])) >= 0) {
            setCount(count - parseFloat(operation[1]))
         }
      }
   }

   function Button(prop) {
      return <button className='button' onClick={() => { Count(prop) }}>{prop}</button>
   }

   return (
      <>
         <h2>{feedback}</h2>
         <p>{count}</p>
         {Button('Add 1')}
         {Button('Deduct 1')}
         {Button('Add 2')}
         {Button('Deduct 2')}
      </>
   )
}

function App() {
   return (
      <div className="App">
         <Counter />
      </div>
   );
}

export default App;

