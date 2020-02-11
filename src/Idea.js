import React from "react";
import './Idea.css'
import {Button} from './styles'

const Idea = props => {
  return (
    <section className="Idea">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <Button card onClick={() => props.deleteIdea(props.id)}>Delete</Button>
    </section>
  );
};

export default Idea;
