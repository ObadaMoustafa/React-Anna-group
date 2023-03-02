import './App.css';

const HobbyList = () => {
   const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];
   return (hobbies.map((item, index) => (
      <div key={index}>
         <p>{item}</p>
      </div>
   ))

   )
}

function App() {
   return (
      <div className="App">
         <HobbyList />
      </div>
   );
}

export default App;
