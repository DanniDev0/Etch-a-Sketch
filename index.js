const container = document.querySelector('#container');
const btnGrid = document.querySelector('#btn-grid');
const btnClear = document.querySelector('#btn-limpiar');
const btnAzul = document.querySelector('.azul');
const btnRojo = document.querySelector('.rojo');
const btnBlack = document.querySelector('.black');
let colorActual = 'black';
btnBlack.addEventListener('click', () => {
    colorActual = "black";
});

btnAzul.addEventListener('click', () => {
    colorActual = "blue";
});

btnRojo.addEventListener('click', () => {
    colorActual = "red";
});

function crearGrid(tamano){
    container.innerHTML = '';

    const totalCeldas = tamano * tamano;
    const tamanoCelda = 500 / tamano;

    for (let i = 0; i < totalCeldas; i++) {
        const celda = document.createElement("div");
        celda.classList.add("celda");
        
        celda.style.width = `${tamanoCelda}px`;
        celda.style.height = `${tamanoCelda}px`;

        celda.addEventListener('mouseenter', () => {
            celda.style.backgroundColor = colorActual; 
        });
        container.appendChild(celda);
    }
}

crearGrid(16);

btnGrid.addEventListener('click', () => {
    let eleccion = prompt('¿De cuantos cuadros quiere la cuadricula? (Máximo 100): ');
    eleccion = parseInt(eleccion);
    if (isNaN(eleccion) || eleccion < 1 || eleccion > 100) {
        alert('Por favor ingresa un número válido entre 1 y 100.');
    } else {
        crearGrid(eleccion);
    }
});


btnClear.addEventListener('click', () => {
    let celdas = document.querySelectorAll('.celda');
    celdas.forEach(i => {
        i.style.backgroundColor = 'white';
    });
});