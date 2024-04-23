let numero = document.getElementById('contador1');
let numero2 = document.getElementById('contador2');
let ladoA = document.getElementById('ladoA');
let ladoB = document.getElementById('ladoB');

function incrementarNumero() {
    let contador = 0;

    let intervalo = setInterval(function () {
        numero.textContent = contador + "%";
        contador += 1;
        if (contador > 48) {
            clearInterval(intervalo);
            document.querySelector('.dado').style.transform = 'rotateX(89deg)';

            setTimeout(function () {
                let contador2 = 49;

                let intervalo2 = setInterval(function () {
                    numero2.textContent = contador2 + "%";
                    contador2 += 1;
                    if (contador2 > 100) {
                        clearInterval(intervalo2);
                    }
                }, 30);
                numero2.style.animation = "cargaContador2 2s ease-out";
                ladoA.style.boxShadow = "none";
            }, 500); // Esperar 1000ms (1 segundo) antes de iniciar el segundo contador
        }
    }, 30);


}

// Llamar a la función cuando se carga el documento
document.addEventListener("DOMContentLoaded", function () {
    incrementarNumero();
});