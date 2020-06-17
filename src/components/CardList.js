import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div className={`wrapper ${robots.length ? "fill" : "fit"}`}>
      {robots.length ? (
        robots.map((user, i) => {
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
        })
      ) : (
        <h1>
          <danger>
            Nothing found
            <span role="img" aria-label="ghost">
              👻
            </span>
          </danger>
        </h1>
      )}
    </div>
  );
};

export default CardList;
