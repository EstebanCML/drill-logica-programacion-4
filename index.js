// Función para generar la serie de Fibonacci
function generarFibonacci(cantidad) {
    let serie = [];
    let a = 0, b = 1;

    for (let i = 0; i < cantidad; i++) {
        serie.push(a);
        let temp = a + b;
        a = b;
        b = temp;
    }

    return serie;
}

// Función para manejar el evento de generación de la serie
function manejarGeneracion() {
    const entrada = document.getElementById("numero").value;
    const mensajeError = document.getElementById("mensaje-error");
    const resultadoDiv = document.getElementById("resultado");

    // Limpiar mensajes previos
    mensajeError.textContent = "";
    resultadoDiv.textContent = "";

    const numero = parseInt(entrada);

    if (!isNaN(numero) && numero > 0) {
        // Generar la serie de Fibonacci
        const serieFibonacci = generarFibonacci(numero);

        // Mostrar el resultado en el DOM
        resultadoDiv.textContent = `Serie de Fibonacci (${numero} números): ${serieFibonacci.join(", ")}`;
    } else {
        // Mostrar mensaje de error
        mensajeError.textContent = "Por favor, ingresa un número entero positivo.";
    }
}

// Asociar el evento al botón
document.getElementById("generar").addEventListener("click", manejarGeneracion);

// Asociar el evento Enter al campo de entrada
document.getElementById("numero").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        manejarGeneracion();
    }
});

