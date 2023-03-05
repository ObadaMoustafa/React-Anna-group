// import React from "react";

import Hobby from "./Hobby";

function HobbyList() {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];

  return (
    <div>
      {hobbies.map((hobby, i) => (
        <Hobby text={hobby} key={i} />
      ))}
    </div>
  );
}

export default HobbyList;
