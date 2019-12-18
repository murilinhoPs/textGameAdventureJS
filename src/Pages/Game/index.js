import React, { useState, Component } from "react";

import styles from "./styles.css";

import textNodes from "../../services/textNodesApi";

const ShowTextNode = () => {
  const textNode = textNodes.find(textNode => textNode.id === 1);

  return <h2> {textNode.text} </h2>;
};

const Escolhas = ({ nodeIndex }) => {
  // Pega o index que eu quero(vai ser armazenado no state)
  const textChoice = textNodes.find(textNodes => textNodes.id == nodeIndex);

  //a partir do index que eu quero, passo por todas as opções do texNode
  //e pego as opções dele e mostro em botoes
  return (
    <div className="Grid">
      {textChoice.options.map(optIndex => (
        <button>
          {optIndex.text}
        </button>
      ))}
    </div>
  );
};

const selectOption = option => console.log(option);

function Game() {
  const [mystate, mySetState] = useState({});

  return (
    <div className="Game">
      <div className="Container">
        <ShowTextNode />
        <Escolhas nodeIndex={1} />
      </div>
    </div>
  );
}

export default Game;
