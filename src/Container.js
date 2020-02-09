import React from "react";
import Idea from "./Idea";
import "./Container.css";

const Container = props => {
  const displayIdeas = () => {
    return props.ideas.map(idea => {
      return (
        <Idea
          title={idea.title}
          description={idea.description}
          id={idea.id}
          key={idea.id}
          deleteIdea={props.deleteIdea}
        />
      );
    });
  };
  return <section className="Container">{displayIdeas()}</section>;
};

export default Container;
