import { Link } from 'react-router-dom'

export default function Product({ item }) {
   return (

      <div className='itemBlockWrap'>
         <Link to={`/product/${item.id}`}>
            <div className='itemBlock'>
               <img className='itemImage' src={item.image} alt={item.title} />
               <div className='itemTitle' >{item.title}</div>
            </div>
         </Link>
      </div >

   )
}
