import { useEffect, useState } from "react";
import Button from "./Button";
import DogPhoto from "./DogPhoto";

function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);
  console.log(dogPhotos);
  // Var 1

  // useEffect(() => {
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((response) => response.json())
  //     // .then((data) => console.log(data))
  //     .then((data) => setDogPhotos([data]));
  // }, []);

  // Var 2

  function getDogPhoto() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then((data) => setDogPhotos([...dogPhotos, data]));
    
    // .then((data) =>
    //   setDogPhotos((prevState) => {
    //     prevState.push(data);
    //   })
    // );
  }

  return (
    <div>
      <Button onClick={getDogPhoto} text="Get a dog!" />

      <ul>
        {dogPhotos.map((item) => {
          return (
            <li key={item.id}>
              <DogPhoto img={item.message} />
              {item.message}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default DogGallery;

// 6. Inside `<DogGallery>` return all the dogs stored in the `dogPhotos` array using the `map()` function. Pass down each `dogPhoto` into an instance of `<DogPhoto>`.

// 3. Inside (before the return statement) also create a function called `getDogPhoto`. The purpose of this function is to make an API call to `https://dog.ceo/api/breeds/image/random`. You can either use `fetch` or `axios`. At the end of the function push the new `dog image URL` into the `dogPhotos` array state variable using `setDogPhotos`
// 5. Pass down the function `getDogPhoto` to `<Button>`
