function Category({ name, onClick }) {
  return (
    <button className="category-btn" onClick={onClick}>
      {name}
    </button>
  );
}
export default Category;
