import React from 'react'

export default function Person({ firstName, lastName, email }) {
   return (
      <ul className='list'>
         <li >FIRST NAME: {firstName}</li>
         <li >LST NAME: {lastName}</li>
         <li >EMAIL: {email}</li>
      </ul>
   )
}
