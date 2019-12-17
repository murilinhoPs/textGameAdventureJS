import React, { useState } from "react";

import styles from "./styles.css";

const textNodes = [
  {
    id: 1,
    text:
      "Você acorda num lugar estranho e vê um fantasma com uma jarra na mão te encarando.",
    options: [
      {
        text: "Você vai até ele e pega a jarra.",
        //setState: {catchJar: true},
        netxText: 2
      },
      {
        text: "Você fica na cama e se esconde.",
        netxText: 2
      }
    ]
  },
  {
    id: 2,
    text: "Parte2............"
  }
];

const showTextNode = nodeIndex => {
  const textNode = textNodes.find(textNode => textNode.id === nodeIndex);

  return <h1> {textNode.text} </h1>;
};

let buttons = () => {

  return (
    <div className="Grid">
    {textNodes.map((index) =>(
        <button> {index.id} </button>
    ))}
    </div>
  );
};

const Game = () => {
  const [state, setState] = useState({});

  //const textNode = textNodes.find(textNode => textNode.id === 1);  {showTextNode(1)}

  return (
    <div className="Game">
      <div className="Container">
        {showTextNode(1)}
        {buttons()}
      </div>
    </div>
  );
};

export default Game;
