import React, { useState } from "react";

function Calculadora() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState(""); // Para manejar el error de división por cero

    function manejarSuma() {
        setResultado(num1 + num2);
        setError(""); // Limpiar cualquier error anterior
    }

    function manejarMultiplicacion() {
        setResultado(num1 * num2);
        setError(""); // Limpiar cualquier error anterior
    }

    function manejarDivision() {
        if (num2 === 0) {
            setError("No se puede dividir por 0"); // Manejo del error de división por cero
            setResultado(null); // Limpiar el resultado
        } else {
            setResultado(num1 / num2);
            setError(""); // Limpiar cualquier error anterior
        }
    }

    function manejarReiniciar() {
        setNum1(0);
        setNum2(0);
        setResultado(null);
        setError(""); // Limpiar cualquier error
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Calculadora</h1>

            <input
                type="text"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value))}
                placeholder="Ingresar un número"
                style={{ padding: '10px', fontSize: '16px', margin: '10px', width: '200px' }}
            />

            <input
                type="text"
                value={num2}
                onChange={(e) => setNum2(Number(e.target.value))}
                placeholder="Ingresar un número"
                style={{ padding: '10px', fontSize: '16px', margin: '10px', width: '200px' }}
            />

            <div style={{ marginTop: '20px' }}>
                
                <button 
                    style={{
                        background: 'linear-gradient(to right, blue, cyan)',
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
                    onClick={manejarSuma}
                    onMouseOver={(e) => {
                        e.target.style.transform = 'scale(1.1)';
                        e.target.style.background = 'linear-gradient(to right, cyan, blue)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.background = 'linear-gradient(to right, blue, cyan)';
                    }}
                >
                    Sumar
                </button>

                <button 
                    style={{
                        background: 'linear-gradient(to right, green, lightgreen)',
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
                    onClick={manejarMultiplicacion}
                    onMouseOver={(e) => {
                        e.target.style.transform = 'scale(1.1)';
                        e.target.style.background = 'linear-gradient(to right, lightgreen, green)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.background = 'linear-gradient(to right, green, lightgreen)';
                    }}
                >
                    Multiplicar
                </button>

                <button 
                    style={{
                        background: 'linear-gradient(to right, red, orange)',
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
                    onClick={manejarDivision}
                    onMouseOver={(e) => {
                        e.target.style.transform = 'scale(1.1)';
                        e.target.style.background = 'linear-gradient(to right, orange, red)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.background = 'linear-gradient(to right, red, orange)';
                    }}
                >
                    Dividir
                </button>

                <button 
                    style={{
                        background: 'linear-gradient(to right, gray, yellow)',
                        color: 'black',
                        padding: '10px 20px',
                        borderRadius: '10px',
                        border: 'none',
                        fontSize: '16px',
                        margin: '5px',
                        cursor: 'pointer',
                        boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.3s ease, background 0.3s ease',
                    }}
                    onClick={manejarReiniciar}
                    onMouseOver={(e) => {
                        e.target.style.transform = 'scale(1.1)';
                        e.target.style.background = 'linear-gradient(to right, yellow, gray)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.background = 'linear-gradient(to right, gray, yellow)';
                    }}
                >
                    Reiniciar
                </button>
            </div>

            
            {resultado !== null && <h3 style={{ marginTop: '20px' }}>Resultado: {resultado}</h3>}
            {error && <h3 style={{ color: 'red', marginTop: '20px' }}>{error}</h3>}
        </div>
    );
}

export default Calculadora;
