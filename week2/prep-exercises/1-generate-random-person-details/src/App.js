import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [person, setPerson] = useState(null);
  const getPerson = () => {
    fetch("https://www.randomuser.me/api?results=1")
      .then((response) => response.json())
      // .then((data) => console.log(data));
      .then((data) => setPerson(data.results[0]));
    console.log("fetch");
  };
  useEffect(getPerson, []);
  console.log(person);
  // console.log(person.results);
  return (
    <div className="App">
      {person === null ? (
        <div>Loading</div>
      ) : (
        <ul>
          <li>{person.name.first}</li>
          <li>{person.name.last}</li>
          <li>{person.email}</li>
        </ul>
      )}
    </div>
  );
}

export default App;
