
const inputNum1 = document.getElementById('numero1') as HTMLInputElement;
const inputNum2 = document.getElementById('numero2') as HTMLInputElement;
const selectOperacion = document.getElementById('operacion') as HTMLSelectElement;
const btnCalcular = document.getElementById('btn-calcular') as HTMLButtonElement;
const textoResultado = document.getElementById('texto-resultado') as HTMLHeadingElement;
const listaHistorial = document.getElementById('lista-historial') as HTMLUListElement;


function calcular(): void {
    
    const num1: number = parseFloat(inputNum1.value);
    const num2: number = parseFloat(inputNum2.value);
    const operacion: string = selectOperacion.value;

    
    if (isNaN(num1) || isNaN(num2)) {
        textoResultado.innerText = "Error: Ingrese ambos números.";
        return;
    }

    let resultadoFinal: number = 0;

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

    const nuevoItem: HTMLLIElement = document.createElement('li');
    nuevoItem.innerText = `${num1} ${operacion} ${num2} = ${resultadoFinal}`;
    
    listaHistorial.appendChild(nuevoItem);
}

btnCalcular.addEventListener('click', calcular);