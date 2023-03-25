import "./components-css/product-details.css";
import FavoriteBtn from "./FavoriteBtn";
function ProductCard({ title, img, description, id }) {
  return (
    <div className="product-card-details" key={id}>
      <FavoriteBtn itemId={id} />
      <h1 className="product-card-title">{title}</h1>
      <img className="product-card-img" src={img} alt={title} />
      <p className="product-card-description">{description}</p>
    </div>
  );
}
export default ProductCard;
