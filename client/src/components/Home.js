
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      username: "",
      redirect: false,
      games: []
    }
  }

  componentWillMount(){
    axios.get("/api/game").then((res) => {
      this.setState({games: res.data});
    });
  }

  _handleChange = event => {
    this.setState({username: event.target.value})
  }

  _handleSubmit = event => {
    event.preventDefault();
    axios.post('/api/game', {user: this.state.username}).then((res) => {
      console.log('successfully created game');
      this.setState({redirect: true});
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/game/gameId" />
    } else {
    return (
      <div>
        <h1>JEOPARDY</h1>
        <form onSubmit={this._handleSubmit}>
          <input onChange={this._handleChange} value={this.state.username} type="text"/>
          <button>New Game</button>
        </form>

        <ul>
          {this.state.games.map((game, i) => {
            return (
              <li key={i}>
                <Link to={`/game/${game._id}`}> {game.user}'s Game </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
}

export default Home;