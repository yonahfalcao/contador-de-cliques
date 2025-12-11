import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);

  const incrementarContador = () => {
    setAnimate(true);
    setCount((prev) => prev + 1);
    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <>
      {/* ESTILOS */}
      <style>{`
        body {
          margin: 0;
          padding: 0;
          background: #d8b7ff; /* roxo claro */
          font-family: Arial, Helvetica, sans-serif;
        }

        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .contador {
          font-size: 5rem;
          font-weight: bold;
          color: #5d0cff;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .animar {
          transform: scale(1.25);
          color: #2c00ff;
        }

        .botao {
          margin-top: 20px;
          padding: 15px 30px;
          font-size: 1.2rem;
          background: #7d29ff;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.3s;
          box-shadow: 0px 4px 10px rgba(0,0,0,0.25);
        }

        .botao:hover {
          background: #5a1bd9;
          transform: scale(1.05);
        }

        .botao:active {
          transform: scale(0.97);
        }
      `}</style>

      {/* CONTEÚDO */}
      <div className="container">
        <h1 className={`contador ${animate ? "animar" : ""}`}>{count}</h1>

        <button className="botao" onClick={incrementarContador}>
          Clique aqui
        </button>
      </div>
    </>
  );
}

export default App;
