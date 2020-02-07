import React, { Component } from "react";
import logo from "./logo.svg";
import Form from "./Form";
import Container from './Container'
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas:[
        {title: "Make pizza", description: "its deliscious, why not?"}, 
        {title: "Make cake", description: "its yummy, why not?"}, 
        {title: "Make tacos", description: "its tasty, why not?"}, 
      ]
    };
  }

  addIdea = (newIdea) => {
    this.setState({ideas: [...this.state.ideas, newIdea]})
  }

  render() {
    return (
      <div className="App">
        <Form addIdea={this.addIdea}/>
        <Container ideas={this.state.ideas}/>
      </div>
    );
  }
}

export default App;
