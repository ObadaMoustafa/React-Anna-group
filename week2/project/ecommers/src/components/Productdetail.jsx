function Productdetailcard ({proddescription}) {
    return(
        <div key={proddescription.id}>
            <h2>{proddescription.title}</h2>
            <img src = {proddescription.image} alt = {proddescription.title} />
            <p>{proddescription.description}</p>
        </div>
    );
}
export default Productdetailcard;