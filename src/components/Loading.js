import React from "react";
import "./../assets/css/loading.css";

const Loading = () => {
  return (
    <div className="main-page card-green">
      <div className="inner">
        <h2>LOADING...</h2>
        <div className="bar">
          <div className="main-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
