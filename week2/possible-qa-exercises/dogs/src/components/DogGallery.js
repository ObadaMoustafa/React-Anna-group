import React, {useState, useEffect} from 'react';

const DogPhotos = (props) => {
    const[photos, setDogPhotos] = useState([]);
    
    useEffect(()=> {
        fetch( `https://dog.ceo/api/breeds/image/random`)
        .then((response) => response.json())
        .then((photos) => setDogPhotos(photos))
    },[]);
    return(
        <div>
            <ul>
                {photos.map((item) => {
                    return (<li key={item.id}>{item.message}
                    {/* <img src={item.image}></img> */}
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default DogPhotos;