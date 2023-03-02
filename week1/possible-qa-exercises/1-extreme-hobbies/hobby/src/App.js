import React from 'react'
import logo from './logo.svg';
import './App.css';
import hobbies from './HobbyList'
import Hobby from './Hobby';

function App() {
  
  return (
    <div className="App">
      {hobbies.map((hobby, index) => {
        return(
          <div key = {index}>
            <p>{hobby}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
