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

  submitIdea = event => {
    event.preventDefault();
    const newIdea = {
      id: Date.now(),
      ...this.state
    };
    this.props.addIdea(newIdea);
    console.log(newIdea)
  };

  clearInputs = () => {
    this.setState({ title: "", description: "" });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <section className="form">
        <form>
          <section className="form-section">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </section>
          <section className="form-section">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </section>
          <section className="form-section">
            <button onClick={e => this.submitIdea(e)}>Submit</button>
          </section>
        </form>
      </section>
    );
  }
}

export default Form;
