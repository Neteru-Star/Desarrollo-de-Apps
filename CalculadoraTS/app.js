"use strict";
const inputNum1 = document.getElementById('numero1');
const inputNum2 = document.getElementById('numero2');
const selectOperacion = document.getElementById('operacion');
const btnCalcular = document.getElementById('btn-calcular');
const textoResultado = document.getElementById('texto-resultado');
const listaHistorial = document.getElementById('lista-historial');
function calcular() {
    const num1 = parseFloat(inputNum1.value);
    const num2 = parseFloat(inputNum2.value);
    const operacion = selectOperacion.value;
    if (isNaN(num1) || isNaN(num2)) {
        textoResultado.innerText = "Error: Ingrese ambos números.";
        return;
    }
    let resultadoFinal = 0;
    switch (operacion) {
        case '+':
            resultadoFinal = num1 + num2;
            break;
        case '-':
            resultadoFinal = num1 - num2;
            break;
        case '*':
            resultadoFinal = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                textoResultado.innerText = "Error: No se puede dividir por cero.";
                return;
            }
            resultadoFinal = num1 / num2;
            break;
    }
    textoResultado.innerText = "El resultado es: " + resultadoFinal;
    const nuevoItem = document.createElement('li');
    nuevoItem.innerText = `${num1} ${operacion} ${num2} = ${resultadoFinal}`;
    listaHistorial.appendChild(nuevoItem);
}
btnCalcular.addEventListener('click', calcular);
