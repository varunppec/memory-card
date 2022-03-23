import React from "react";
import uniqid from "uniqid";
const CardHolder = (props) => {
  const image_src = [
    "baguette.png",
    "barbecue.png",
    "bibimbap.png",
    "boba.png",
    "burrito.png",
    "curry.png",
    "doughnut.png",
    "hot-dog.png",
    "masala-dosa.png",
    "mochi.png",
    "nachos.png",
    "pad-thai.png",
  ];
  const names = [
    "Baguette",
    "Barbecue",
    "Bibimbap",
    "Boba",
    "Burrito",
    "Curry",
    "Doughnut",
    "Hot Dog",
    "Masala Dosa",
    "Mochi",
    "Nachos",
    "Pad Thai",
  ];
  const len = image_src.length;
  let index;
  let displayed = [];
  return (
    <div className="cardholder">
      {image_src.map((image) => {
        index = getRandomNumber(0, len, displayed);
        displayed.push(index);
        return (
          <div
            className="card"
            key={uniqid()}
            onClick={(e) => {
              imageClicked(
                e,
                props.visitedCards,
                props.setVisitedCards,
                props.score,
                props.setScore
              );
            }}
          >
            <img
              alt={image_src[index]}
              src={require("../static/" + image_src[index])}
            ></img>
            <div className="cardname">{names[index]}</div>
          </div>
        );
      })}
    </div>
  );
};

const getRandomNumber = (min, max, displayed) => {
  let num = Math.floor(Math.random() * (max - min) + min);
  if (displayed.includes(num)) {
    return getRandomNumber(min, max, displayed);
  }
  return num;
};

const imageClicked = (e, visited, setVisitedCards, score, setScore) => {
  //setDisplayCards()
  const name = e.currentTarget.firstChild.alt;
  if (visited.includes(name)) {
    setScore(0);
    setVisitedCards([]);
    return;
  }
  setVisitedCards([...visited, name]);
  setScore(score + 1);
};
export default CardHolder;
