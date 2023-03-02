function Categories(props) {

   function onclickFunction(name, id) {
      const category = name.slice(6 - name.length)
      props.useStateFunction(category)
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
      <button className='button' key={props.ind} id={props.ind} onClick={() => { onclickFunction(props.name, props.ind) }}>{props.name}</button>
   )
}

export default Categories