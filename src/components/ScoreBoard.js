import { useEffect } from "react";
import React from "react";

const ScoreBoard = (props) => {
  let highscore = props.highscore;
  useEffect(() => {
    if (props.score > props.highscore) {
      props.setHighScore(props.score);
    }
  });
  return (
    <div className="Scoreholder">
      <div className="Score">Score: {props.score}</div>
      <div className="HighestScore">Highest Score: {highscore}</div>
    </div>
  );
};

export default ScoreBoard;
