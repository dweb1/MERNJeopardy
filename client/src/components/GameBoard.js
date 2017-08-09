import React from 'react';
import Category from './Category';
import { GameBoardStyles } from '../styles/Game'

const GameBoard = (props) => {
  return (
    <GameBoardStyles>
      {props.categories.map((category, i) => {
        return <Category key={i} submitAnswer={props.submitAnswer} category={category} /> 
      })}
    </GameBoardStyles>
  );
};

export default GameBoard;