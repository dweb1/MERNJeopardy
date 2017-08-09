
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      games: []
    }
  }

  componentWillMount(){
    axios.get("/api/game").then((res) => {
      this.setState({games: res.data});
    });
  }

  render() {
    return (
      <div>
        <h1>JEOPARDY</h1>
        <form>
          <input type="text"/>
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
export default Home;