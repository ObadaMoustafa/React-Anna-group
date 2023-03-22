import React from 'react'

export default function ErrorMessage({ errorMsg }) {

   return (
      <div>
         <h4 className='errorMessage'>{`ERROR! ${errorMsg}`}</h4>
      </div>
   )
}