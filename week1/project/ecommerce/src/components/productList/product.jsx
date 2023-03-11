export default function Product({ item }) {
   return (
      <div className='itemBlockWrap'>
         <div className='itemBlock'>
            <img className='itemImage' src={item.image} alt={item.title} />
            <div className='itemTitle' >{item.title}</div>
         </div>
      </div>
   )
}
