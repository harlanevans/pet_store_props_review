import React from "react";

// const Pets = props => {

  // ↕↕↕↕↕ Same thing, but if you use the above, you'll need
  // to change how you factor your props below.

  const Pets = ({ id, name, type, testing }) => {

  // Logic here

  return (
    <div>
      <h1>{name}</h1>

      {/* or {props.name} if you use the different syntax to receive props */}
      
      <h1>ID: {id}</h1>
      <h1>This animal type: {type}</h1>
      {/* {testing()} */}
    </div>
  );
};

export default Pets;
