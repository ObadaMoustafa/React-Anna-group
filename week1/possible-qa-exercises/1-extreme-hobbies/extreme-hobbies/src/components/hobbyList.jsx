import Hobby from './hobby'

function HobbyList() {
   const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];
   return (
      hobbies.map((item, index) => {

         return (
            <Hobby key={index} hobbyName={item} />
         )
      })
   )
}

export default HobbyList