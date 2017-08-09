import React from 'react';
import Question from './Question';
import { TileStyle, CategoryStyle } from '../styles/Game';

const Category = (props) => {
  return (
    <CategoryStyle>
      <TileStyle>{props.category.name}</TileStyle>
      {props.category.questions.map((question, i) => {
        return <Question key={i} submitAnswer={props.submitAnswer} question={question} />
      })}
    </CategoryStyle>
  );
};

export default Category;