import React, { useState, Component } from "react";

import styles from "./styles.css";

import textNodes from "../../services/textNodesApi";

const Game = () => {
  const [state, setState] = useState({ nextText: 1 });

  const ShowTextNode = ({ nodeIndex }) => {
    const textNode = textNodes.find(textNode => textNode.id === nodeIndex);

    return <h2> {textNode.text} </h2>;
  };

  const Escolhas = ({ choiceIndex }) => {
    // Pega o index que eu quero(vai ser armazenado no state)
    const textChoice = textNodes.find(
      textNodes => textNodes.id === choiceIndex
    );

    //a partir do index que eu quero, passo por todas as opções do texNode
    //e pego as opções dele e mostro em botoes
    if (showOption(textChoice.options)) {
      return (
        <div className="Grid">
          {textChoice.options.map(optIndex => (
            <button onClick={() => selectOption(optIndex)}>
              {optIndex.text}
            </button>
          ))}
        </div>
      );
    }
  };
  function showOption(option) {
    return option.requiredState == null || option.requiredState(state);
  }

  function selectOption(option) {
  
    setState({nextText: option.nextText})

    console.log(state+ "  "+ option.nextText);
  }

  return (
    <div className="Game">
      <div className="Container">
        <ShowTextNode nodeIndex={state.nextText} />
        <Escolhas choiceIndex={state.nextText} />
      </div>
    </div>
  );
};

export default Game;
