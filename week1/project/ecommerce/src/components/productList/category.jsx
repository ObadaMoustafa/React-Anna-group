export default function Category({ category, onClick, activeCategory }) {

   const categoryName = category.slice(6 - category.length)
   const className = (categoryName === activeCategory) ? 'button active' : 'button'

   return <button className={className} onClick={() => { onClick(categoryName) }}>{categoryName}</button>
}
