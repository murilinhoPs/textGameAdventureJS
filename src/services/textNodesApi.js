//          requiredState: (currentState) => currentState.catchJar,
const textNodes = [
  {
    id: 1,
    text:
      "Você acorda na sua barraca e vê um fantasma com uma jarra na mão te encarando.",
    options: [
      {
        text: "Você vai até ele e pega a jarra.",
        setState: { jar: true },
        nextText: 3
      },
      {
        text: "Você fica na cama e se esconde.",
        setState: { jar: false },
        nextText: 2
      },
      {
        text: "Você foge pela janela.",
        setState: { jar: false },
        nextText: 2
      },
      {
        text: "Pega a jarra mas foge pela janela.",
        setState: { jar: true },
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text:
      "Você saiu tão apressado que esqueceu o mapa para se localizar na floresta. Nessa hora passa um estranho te oferecendo um mapa.",
    options: [
      {
        text: "Você pega o mapa e agradece.",
        setState: { jar: false, mapa: true },
        nextText: 3
      },
      {
        text: "Pega o mapa, mas sai correndo.",
        setState: { jar: false, mapa: true },
        nextText: 3
      },
      {
        text: "CORREEEEEEE!!!!",
        setState: { jar: false, mapa: false },
        nextText: 3
      },
      {
        text: "CORREEEEEEE COM A JARRA, MAS SEM O MAPA!!!!",
        requiredState: currentState => currentState.jar,
        setState: { jar: true, mapa: false },
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: "Você acorda do sonho.",
    options: [
      {
        text: "Obrigado.",
        nextText: 3
      },
      {
        text: "Por jogar!",
        nextText: 3
      },
      {
        text: "Resetar!",
        nextText: 1
      }
    ]
  }
];

export default textNodes;
