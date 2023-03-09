import ProductList from '../../fake-data/all-products'
import Product from './product'
import './productList.css'

function Products(props) {
   let items = ProductList
   if (props.prodCategory !== 'All items') {
      items = ProductList.filter((product) => product.category === props.prodCategory)
   }

   return (
      <div className='productList-conteiner'>
         <div className='productList'>
            {items.map((item, index) => <Product key={index} item={item} />)}
         </div>
      </div >
   )
}

export default Products