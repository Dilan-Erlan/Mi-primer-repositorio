import React, { useRef } from 'react';

function Camara() {
  // Referencia al elemento de video
  const videoRef = useRef(null);

  // Función para acceder a la cámara
  function handleAccessCamera() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        // Establecer el stream de video al elemento de video
        videoRef.current.srcObject = stream;
      })
      .catch((err) => {
        console.error("Error al acceder a la cámara: ", err);
      });
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Acceder a la cámara</h1>
      
      <button
        onClick={handleAccessCamera}
        style={{
          background: 'linear-gradient(to right, lightblue, violet)',
          color: 'white',
          padding: '15px 30px',
          borderRadius: '10px',
          border: 'none',
          fontSize: '18px',
          cursor: 'pointer',
          boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s ease, background 0.3s ease',
        }}
        // Efecto hover
        onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.background = 'linear-gradient(to right, violet, lightblue)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.background = 'linear-gradient(to right, lightblue, violet)';
        }}
      >
        Activar Cámara
      </button>
      <div>
        <video ref={videoRef} autoPlay style={{ width: '500px', height: '400px', marginTop: '20px' }}></video>
      </div>
    </div>
  );
}

export default Camara;
