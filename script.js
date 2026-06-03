const numero = document.getElementById("numero");

let contador = 0;
const meta = 1000;

const intervalo = setInterval(() => {

    contador += 10;

    numero.textContent = contador;

    if(contador >= meta){
        clearInterval(intervalo);
    }

}, 20);
