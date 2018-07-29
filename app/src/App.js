import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Nav from "./components/Nav";
import albums from "./albums.json";
import "./App.css";

class App extends Component {
  // Setting this.state.album to the album array
  state = {
    message: "Click an album to begin",
    topScore: 0,
    score: 0,
    albums: albums,
    unselectedAlbums: albums
  };

  //Shuffles the display to confuse player
  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  //Player clicks an album, checks if it has already been clicked
  selectAlbum = (name) => {
    let findAl = this.state.unselectedAlbums.find(art => art.name === name);

    if (findAl === undefined) {
      //picked already chosen album
      this.setState({
        message: "You already picked that one",
        topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
        score: 0,
        albums: albums,
        unselectedAlbums: albums
      });
    } else {
      let newAl = this.state.unselectedAlbums.filter(art => art.name !== name);

      this.setState({
        message: "You picked correctly",
        score: this.state.score + 1,
        albums: albums,
        unselectedAlbums: newAl
      });
    }
    this.shuffle(albums);
  };

  // Map over this.state.characters and render a Card component for each object
  render() {
    return (
      <Wrapper>
        <Nav
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Header />
        {this.state.albums.map(album => (
          <Card
            id={album.id}
            key={album.id}
            name={album.name}
            image={album.image}
            selectAlbum={this.selectAlbum}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;