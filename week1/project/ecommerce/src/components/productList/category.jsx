export default function Category(props) {

   function setCategoryName(actCategory) {
      props.useStateFunction(actCategory)
   }

   const categoryName = props.category.slice(6 - props.category.length)
   const className = (categoryName === props.activeCategory) ? 'button active' : 'button'

   return <button className={className} onClick={() => { setCategoryName(categoryName) }}>{categoryName}</button>
}
