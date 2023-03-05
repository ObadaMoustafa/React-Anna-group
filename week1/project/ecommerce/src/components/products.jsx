import ProductList from '../fake-data/all-products'

function itemsRender(itemsList) {
   return (
      <div className='productList-conteiner'>
         <div className='productList'>
            {itemsList.map((item, index) => {
               return (
                  <div className='itemBlockWrap' key={index}>
                     <div className='itemBlock'>
                        <img className='itemImage' src={item.image} alt={item.title} />
                        <div className='itemTitle' >{item.title}</div>
                     </div>
                  </div>
               )
            })}
         </div>
      </div>
   )
}

function Products(props) {
   if (props.prodCategory !== 'All items') {
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