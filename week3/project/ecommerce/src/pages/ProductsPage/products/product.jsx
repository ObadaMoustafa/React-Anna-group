// import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
// import svgReg from '../../../images/heart-regular.svg';
// import svgSol from '../../../images/heart-solid.svg';
// import { FavoriteIdItemContext } from '../../../contexts/FavoriteIdItemContext';
import useFavoriteItems from '../../../hooks/useFavoriteItems';

export default function Product({ item }) {

   const { svgIcon, favoriteIdHandler } = useFavoriteItems(item.id)

   // const { idFavoriteItem, setIdFavoriteItem } = useContext(FavoriteIdItemContext);
   // const [svgIcon, setSvgIcon] = useState(idFavoriteItem.includes(item.id) ? svgSol : svgReg)


   // function favoriteIdHandler(itemId) {
   //    if (!idFavoriteItem.includes(itemId)) {
   //       setIdFavoriteItem((prev) => [...prev, itemId])
   //       setSvgIcon(svgSol)
   //    }
   //    else {
   //       setIdFavoriteItem((prev) => prev.filter(id => id !== itemId))
   //       setSvgIcon(svgReg)
   //    }
   // }

   return (
      <div className='itemBlockWrap'>
         <div className='itemBlock'>
            <Link to={`/products/product/${item.id}`}>
               <img className='itemImage' src={item.images[0]} alt={item.title} />
               <div className='itemTitle' >{item.title}</div>
            </Link>
            <img className='itemHeart' src={svgIcon} alt='' onClick={() => { favoriteIdHandler(item.id) }} />
         </div>
      </div >

   )
}
