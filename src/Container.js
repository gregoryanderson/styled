import React from "react";
import Idea from "./Idea";

const Container = props => {
  const displayIdeas = () => {
    return props.ideas.map(idea => {
      return <Idea title={idea.title} description={idea.description} />;
    });
  };
  return <section className="Container">{displayIdeas()}</section>;
};

export default Container;
