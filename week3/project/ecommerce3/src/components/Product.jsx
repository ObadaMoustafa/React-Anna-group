import "./components-css/product.css";
import { Link } from "react-router-dom";
import FavoriteBtn from "./FavoriteBtn";


function Product({ id, img, title }) {
  return (
    <li className="product-item" key={id}>
      <FavoriteBtn itemId={id} />
      <div className="product-item-block">
        <Link to={`/products/${id}`}>
          <img className="product-img" src={img} alt={title} />
          <span className="product-title">{title}</span>
        </Link>
      </div>
    </li>
  );
}
export default Product;
