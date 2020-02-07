import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
  }

  handleClick = e => {
    e.preventDefault();
    let newTitle = this.state.title;
    let newDescription = this.state.description;
    let newIdea = { title: newTitle, description: newDescription };
    this.props.addIdea(newIdea);
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form className="form">
        <section>
          <label for="title">Title</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </section>
        <section>
          <label for="description">Description</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </section>
        <button onClick={e => this.handleClick(e)}>Submit</button>
      </form>
    );
  }
}

export default Form;
