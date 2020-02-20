import React, { Component } from "react";
import "./App.css";

/* Component imports */
import GifList from "./components/GifList/GifList";
import SearchBar from "./components/SearchBar/SearchBar";
import SelectedGif from "./components/SelectedGif/SelectedGif";

class App extends Component {
  state = {
    userInput: "",
    gifList: [],
    selectedGif: {}
  };

  componentDidMount() {
    this.handleUserInput();
  }

  handleChange = e => this.setState({ userInput: e.target.value });

  handleUserInput = () => {
    const API_KEY = "FN5bl5OrR6NlDWGWNhT1F60hblyHMCGt";
    let userInput = this.state.userInput ? this.state.userInput : "kanye west";

    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${API_KEY}&limit=5`
    )
      .then(response => response.json())
      .then(gifResults => this.setState({ gifList: gifResults.data }))
      .catch(error => console.error(`Something went wrong: ${error}`));
  };

  handleSelectedGif = chosenGif => {
    this.setState({ selectedGif: chosenGif });
  };

  render() {
    return (
      <section className="App">
        <h1>Gif-ted Finder</h1>
        <SearchBar
          handleChange={this.handleChange}
          handleUserInput={this.handleUserInput}
        />
        <div className="content">
          <GifList
            listOfGifs={this.state.gifList}
            onClick={this.handleSelectedGif}
          />

          {this.state.selectedGif.images ? (
            <SelectedGif selected={this.state.selectedGif.images} />
          ) : null}
        </div>
      </section>
    );
  }
}

export default App;
