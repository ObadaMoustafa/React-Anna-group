import ProductList from '../../fake-data/all-products'
import Product from './product'
import './productList.css'

function Products({ prodCategory }) {
   let items = ProductList
   if (prodCategory !== 'All items') {
      items = ProductList.filter((product) => product.category === prodCategory)
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