import React from "react";
import "./../assets/css/custom/hover.css";
import "./../assets/css/card.css";
import mapImage from "./../assets/images/map.png";

const Card = ({ name, email, address, active }) => {
  return (
    <div
      className={`card ${
        active ? "card-background" : "card-blocked hvr-grow"
      } card-hover`}
    >
      <div className="card-inner">
        <div className={`card card-front card-${active ? "blue" : "red"}`}>
          <div className="card-badge label">
            {active ? "Activated" : "Disabled"}
          </div>
          <img alt={name} width="180" src={`https://robohash.org/${name}`} />
          <div className="info">
            <h4>
              <strong>{name}</strong>
            </h4>
            <p>{email}</p>
          </div>
        </div>
        <div className={`card card-back card-${active ? "blue" : "red"}`}>
          <img alt="address" width="100" src={mapImage} />
          <div className="info">
            <h4>
              <strong>{address.street},</strong>
            </h4>
            <p>{`${address.suite} - ${address.city}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
