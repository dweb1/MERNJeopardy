import React, { Component } from "react";
import { TileStyle } from "../styles/Game";

class Question extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  _toggleActive = () => {
    this.setState({ active: !this.state.active });
  };
  
  _submitAnswer = (event) => {
    event.preventDefault();
    return this.props.submitAnswer(event, this.props.question)
  }
  render() {
    if (this.state.active) {
      return (
        <TileStyle active>
          {this.props.question.question}
          <form onSubmit={this._submitAnswer}>
            <input type="text" name="answer"/>
            <button>Answer</button>
          </form>
        </TileStyle>
      );
    } else {
      return (
        <TileStyle onClick={this._toggleActive} question={true}>
          {this.props.question.value}
        </TileStyle>
      );
    }
  }
}

export default Question;