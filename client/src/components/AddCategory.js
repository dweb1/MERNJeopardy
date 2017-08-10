import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AddCategoryStyle = styled.div`
  text-align: center;
  `;

const QuestionInput = props =>(
        <div>
            <h3>{props.question.value}</h3>
            <label htmlFor={`${props.question.value}question`}>Question:</label>
            <input onChange={props.changeEvent} type="text" value={props.question.question} name={`${props.question.value}question`}
              points={props.question.value} type="question"/>
            <br/>
            <label htmlFor={`${props.value}answer`}>Answer:</label>
            <input onChange={props.changeEvent} type="text" value={props.question.answer} name={`${props.question.value}answer`}
              points={props.question.value} type="answer"/>
          </div>
)

class AddCategory extends Component {
  
  constructor(){
    super();
    this.state = {
      category: {
        name: "",
        questions: [
          {
            value: 200,
            question: "",
            answer: ""
          },{
            value: 400,
            question: "",
            answer: ""
          },{
            value: 600,
            question: "",
            answer: ""
          },{
            value: 800,
            question: "",
            answer: ""
          },{
            value: 1000,
            question: "",
            answer: ""
          }
        ]
      }
    }
  }

  _changeCategory = (event) => {
    const newState = {...this.state};
    newState.category.name = event.target.value;

    this.setState({name: newState});
  }

  _changeEvent = event => {
    const points = event.target.attributes.points.value;
    const type = event.target.attributes.type.value;
    const newState = {...this.state};
    const questionChanged = newState.category.questions.find((question) => {
      return question.value === parseInt(points);
    })
    if (type === "question") {
      questionChanged.question = event.target.value;
    } else {
      questionChanged.answer = event.target.value
    }
    this.setState(newState);
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/category', this.state.category).then((res) => {
      console.log("success");
    })
  };

  render() {
    return (
      <AddCategoryStyle>
        <h1>Add a Category</h1>
        <form onSubmit={this._handleSubmit}>
          <div>
            <label htmlFor="name">Category Name:</label>
            <input onChange={this._changeCategory} value={this.state.category.name} type="text" name="name"/>
          </div>
          {this.state.category.questions.map((question, i) => {
            return <QuestionInput changeEvent={this._changeEvent} key={i} question={question} />
          })}
        <button>Add Category</button>
        </form>
      </AddCategoryStyle>
    );
  }
}

export default AddCategory;