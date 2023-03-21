import "./components-css/product.css";
function Product({ id, img, title }) {
  return (
    <li className="product-item" key={id}>
      <div className="product-item-block">
        <img className="product-img" src={img} alt={title} />
        <span className="product-title">{title}</span>
      </div>
    </li>
  );
}
export default Product;
