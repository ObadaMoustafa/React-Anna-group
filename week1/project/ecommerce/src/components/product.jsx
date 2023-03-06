import "./product.css";
function Product(productInfo) {
  const { img, id, title } = productInfo;
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
