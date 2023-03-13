function Category({ name, onClick, className }) {
  return (
    <button className={className} onClick={onClick}>
      {name}
    </button>
  );
}
export default Category;
