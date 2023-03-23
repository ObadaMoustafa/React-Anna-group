import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import svgReg from '../../../images/heart-regular.svg';
import svgSol from '../../../images/heart-solid.svg';
import { FavoriteIdItemContext } from '../../../contexts/FavoriteIdItemContext';
// import useFavoriteItems from '../../../hooks/useFavoriteItems';

export default function Product({ item }) {

   // const { svgIcon, favoriteIdHandler } = useFavoriteItems()

   const { idFavoriteItem, setIdFavoriteItem } = useContext(FavoriteIdItemContext);
   const [svgIcon, setSvgIcon] = useState(svgReg)

   function favoriteIdHandler(itemId) {
      const indexOf = idFavoriteItem.indexOf(itemId);
      if (indexOf === -1) {
         setIdFavoriteItem([...idFavoriteItem, itemId])
         setSvgIcon(svgSol)
      }
      else {
         idFavoriteItem.splice(indexOf, 1)
         setSvgIcon(svgReg)
      }

   }

   return (
      <div className='itemBlockWrap'>
         <div className='itemBlock'>
            <Link to={`/products/product/${item.id}`}>
               <img className='itemImage' src={item.images[0]} alt={item.title} />
               <div className='itemTitle' >{item.title}</div>
            </Link>
            <img className='itemHeart' src={svgIcon} alt='' onClick={() => { favoriteIdHandler(item.id) }} />
         </div>

         {/* <Link to={`/products/product/${item.id}`}>
            <div className='itemBlock'>
               <img className='itemImage' src={item.images[0]} alt={item.title} />
               <div className='itemHeart'>1</div>
               <div className='itemTitle' >{item.title}</div>
            </div>
         </Link> */}
      </div >

   )
}
