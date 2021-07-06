import React, { Component } from 'react';
import Card from './components/card/Card';
import './App.css';

class App extends Component {
  state = {
    data: []
  }

  API_URL = 'https://www.breakingbadapi.com/api/characters';

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(this.API_URL)
      .then((data) => data.json())
      .then((res) => this.setState({ data: res }))
      .catch((err) => console.log(err))

  }

  render() {
    return (
      <div className="main-body-div">
        <div className="cards">
          {this.state.data.length > 0 ? (
            this.state.data.map((character) => (
              <Card data={character} key={character.char_id} />
            ))
          ) : (
            <h1 className="loader" data-text="Loading..."></h1>
          )}
        </div>
      </div>
    )
  }
}

export default App;
