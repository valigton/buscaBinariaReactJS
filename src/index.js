import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  //ENTRADA, RODANDO, FIM
  const [estado, setEstado] = useState("ENTRADA");

  //palpite
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
  };
  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a jogar!</button>;
  }
  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2);
    setPalpite(proxPalpite);
  };
  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2);
    setPalpite(proxPalpite);
  };
  const acertou = () => {
    setEstado("FIM");
  };
  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o numero {palpite} com {numPalpites} chutes!
        </p>
        <button onClick={iniciarJogo}>Iniciar Novamente!</button>
      </div>
    );
  }
  return (
    <div className="App">
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
