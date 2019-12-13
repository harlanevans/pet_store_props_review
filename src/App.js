import React from "react";
import Pets from "./components/Pets";

class App extends React.Component {
  state = {
    pets: [
      { id: 1, name: "topher", type: "dogo" },
      { id: 2, name: "thomas", type: "cat" },
      { id: 3, name: "bob ross", type: "horse" }
    ]
  };

  testing() {
    alert("Hello");
  }

  stuff() {
    return <div>a;lksdjfl;asjdfl;aj</div>;
  }

  renderPets() {
    const { pets } = this.state;
    return pets.map(p => (
      <Pets key={p.id} id={p.id} name={p.name} type={p.type} />
      // Here we have props called id, name and type being passed to our Pets component.
      // Make sure to import the component, and have it self-close like above.
    ));
  }

  render() {
    // Make use scope -- state

    // const { pets } = this.state;
    // This is to deconstruct "pets" for use on line 42
    return (
      <div>
        <h1>Welcome to Nicks Pet store</h1>
        {this.renderPets()}
        {/* ↕↕↕↕↕↕ the same thing ↕↕↕↕↕*/}
        {/* {
          pets.map(p => (
      <Pets key={p.id} id={p.id} name={p.name} type={p.type} />
      ))
        } */}
      </div>
    );
  }
}

export default App;
