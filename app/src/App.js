import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.characters to the character array
  state = {
    characters
  };

  // Map over this.state.characters and render a Card component for each object
  render() {
    return (
      <Wrapper>
        {this.state.characters.map(friend => (
          <Card
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;