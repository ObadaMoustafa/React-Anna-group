import ProductList from '../fake-data/all-products'

function itemsRender(itemsList) {
   return (
      itemsList.map((item, index) => {
         return (
            <div className='itemBlockWrap'>
               <li className='itemBlock'>
                  <img className='itemImage' key={`img${index}`} src={item.image} alt={item.title} />
                  <div className='itemTitle' key={`ttl${index}`}>{item.title}</div>
               </li>
            </div>
         )
      })
   )
}

function Products(props) {
   if (props.prodCategory !== undefined) {
      const filtredItems = ProductList.filter((product) => {
         return product.category === props.prodCategory
      })
      return itemsRender(filtredItems);
   }
   else {
      return itemsRender(ProductList);
   }
}

export default Products