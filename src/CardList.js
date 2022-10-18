import React from "react";
import Card from "./Card";
import "./card.css";


const CardList = ({ robots }) => {
  const CardsArray = robots.map((robot, i) => {
    return (
      <Card
        key={Math.random().toString().substr(2, 4)}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });
  return <div className="flex flex-wrap">{CardsArray} </div>;
};

export default CardList;
