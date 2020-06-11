import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div className="wrapper">
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
            active={user.active}
          />
        );
      })}
    </div>
  );
};

export default CardList;
