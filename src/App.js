import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import CardHolder from "./components/CardHolder";
import React, { useState } from "react";
import "./styles/styles.css";

function App() {
  const [visitedCards, setVisitedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  return (
    <div className="App">
      <Header className="header" />
      <ScoreBoard
        score={score}
        highscore={highscore}
        setHighScore={setHighscore}
        className="scoreboard"
      />
      <CardHolder
        setVisitedCards={setVisitedCards}
        visitedCards={visitedCards}
        setScore={setScore}
        score={score}
        className="cardholder"
      />
    </div>
  );
}

export default App;
