export default function Product(props) {
   return (
      <div className='itemBlockWrap'>
         <div className='itemBlock'>
            <img className='itemImage' src={props.item.image} alt={props.item.title} />
            <div className='itemTitle' >{props.item.title}</div>
         </div>
      </div>
   )
}
