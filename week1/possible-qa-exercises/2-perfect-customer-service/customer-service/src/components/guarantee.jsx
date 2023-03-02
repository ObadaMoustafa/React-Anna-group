function Guarantee(props) {
   return (
      <div className='content-wrap '>
         <div className='content'>
            <div className='image'><img src={props.image} alt={props.title} width="70" height="50" /></div>
            <div className='title'><h2>{props.title}</h2></div>
            <div className='describtion'> <p>{props.description}</p></div>
         </div>
      </div>
   )
}

export default Guarantee