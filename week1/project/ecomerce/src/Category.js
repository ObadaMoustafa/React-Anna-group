
import categories from './fake-data/all-categories'
import React from 'react'



export default function Category() {
  return (
    <div>
        <div className = "filterCategory">
      <p>{categories[0]}</p>
      <p>{categories[1]}</p>
      <p>{categories[2]}</p>
      <p>{categories[3]}</p>
    </div>
    </div>
  )
}
