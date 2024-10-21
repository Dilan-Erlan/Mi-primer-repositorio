import React, { useState } from 'react';
const tonoClic = new Audio('/sonido/Boton2.mp3');

function Contador() {
  //Estado para almacenar el contador
  const [count, setCount] = useState(0);

  //Función que incrementa el contador y reproduce el sonido
  function handleClick() {
    setCount(count + 1);
    tonoClic.play(); // Reproducir el sonido
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contador: {count}</h1>
      <button
        style={{
          background: 'linear-gradient(to right, green, lime)',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '10px',
          border: 'none',
          fontSize: '16px',
          margin: '5px',
          cursor: 'pointer',
          boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s ease, background 0.3s ease',
        }}
        onClick={handleClick}
        onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.background = 'linear-gradient(to right, lime, green)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.background = 'linear-gradient(to right, green, lime)';
        }}
      >
        Incrementar
      </button>
    </div>
  );
}

export default Contador;
