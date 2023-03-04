import CategoriesList from '../fake-data/all-categories'

function Categories(props) {

   function getCategoryName(name, id) {
      const categoryName = name.slice(6 - name.length)
      props.useStateFunction(categoryName)
      highlightActiveButton(id)
   }

   function highlightActiveButton(id) {
      const previousActiveButton = document.getElementsByClassName('active');
      if (previousActiveButton.length !== 0) {
         previousActiveButton[0].classList.remove('active')
      }
      const clickedButton = document.getElementById(id);
      clickedButton.classList.add('active')
   }

   return (
      <>
         {CategoriesList.map((category, index) => {
            return <button className='button' key={index} id={index} onClick={() => { getCategoryName(category, index) }}>{category}</button>
         })}
      </>

   )
}

export default Categories