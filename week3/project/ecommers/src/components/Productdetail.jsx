function Productdetailcard ({id, title, img, description}) {
    return(
        <div key={id}>
            <h2>{title}</h2>
            <img src = {img} alt = {title} />
            <p>{description}</p>
        </div>
    );
}
export default Productdetailcard;