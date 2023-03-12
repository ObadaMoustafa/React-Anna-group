import React from 'react'

export default function DogPhoto({ pictureUrl }) {
   return (
      <div >
         <img className='dogImage' src={pictureUrl} alt='Dog' />
      </div>
   )
}
