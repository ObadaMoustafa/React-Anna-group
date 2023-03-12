import React from 'react'

export default function Button({ clickFunction }) {
   return (
      <div>
         <button onClick={() => clickFunction()}>Get a dog!</button>
      </div>
   )
}
