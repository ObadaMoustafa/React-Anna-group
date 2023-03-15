import "./components-css/product-details.css";
function ProductCard({ productDetales }) {
  return (
    <div className="product-card-details" key={productDetales.id}>
      <h1 className="product-card-title">{productDetales.title}</h1>
      <img
        className="product-card-img"
        src={productDetales.image}
        alt={productDetales.title}
      />
      <p className="product-card-description">{productDetales.description}</p>
    </div>
  );
}
export default ProductCard;
