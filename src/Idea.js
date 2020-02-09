import React from "react";
import './Idea.css'

const Idea = props => {
  return (
    <section className="Idea">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button onClick={() => props.deleteIdea(props.id)}>Delete</button>
    </section>
  );
};

export default Idea;
