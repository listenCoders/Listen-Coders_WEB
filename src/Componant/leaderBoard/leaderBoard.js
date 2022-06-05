import React from "react";
import Assignment1Result from "../Result/Assignment1/Assignment1Result";
import Assignment2Result from "../Result/Assignment2/Assignment2Result";

const leaderBoard = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Leader Board</h1>
      <br />
      <br />
      <br />
      <h1>Assignment1</h1>
      <hr />
      <Assignment1Result />
      <h1>Assignment2</h1>
      <hr />
      <Assignment2Result />
    </div>
  );
};

export default leaderBoard;
