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
        {title: "Make pizza", description: "its deliscious, why not?", id: 1}, 
        {title: "Make cake", description: "its yummy, why not?", id:2}, 
        {title: "Make tacos", description: "its tasty, why not?", id:3}, 
      ]
    };
  }

  addIdea = (newIdea) => {
    this.setState({ideas: [...this.state.ideas, newIdea]})
  }

  deleteIdea = ideaId => {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== ideaId) 
    this.setState({ideas: filteredIdeas})
  }

  render() {
    return (
      <div className="App">
        <Form addIdea={this.addIdea}/>
        <Container ideas={this.state.ideas} deleteIdea={this.deleteIdea}/>
      </div>
    );
  }
}

export default App;
