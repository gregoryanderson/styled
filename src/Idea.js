import React from "react";

const Idea = props => {
  return (
    <section>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </section>
  );
};

export default Idea;
