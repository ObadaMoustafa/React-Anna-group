import React from 'react'
import Button from './Button'
import DogPhoto from './DogPhoto'

export default function DogGallery() {

   const [dogPhotos, setDogPhotos] = React.useState([]);

   async function getDogPhoto() {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const dogPhoto = await response.json();
      setDogPhotos([...dogPhotos, dogPhoto])
   }
   console.log(dogPhotos)
   return (
      <div>
         <Button clickFunction={getDogPhoto} />
         <div>{(dogPhotos.length > 0) ? '' : 'Get your first dog by clicking the button!'}</div>
         <div className='dogImageContainer'>
            {dogPhotos.map((item, index) => {
               return <DogPhoto key={index} pictureUrl={item.message} />
            })}
         </div>
      </div>
   )
}
