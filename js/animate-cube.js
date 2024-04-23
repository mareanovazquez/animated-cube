let numero = document.getElementById('contador1');
let numero2 = document.getElementById('contador2');
let numero3 = document.getElementById('contador3');
let ladoA = document.getElementById('ladoA');
let ladoB = document.getElementById('ladoB');
let ladoC = document.getElementById('ladoC');
let dado = document.getElementById('dado');

function incrementarNumero() {
    let contador = 0;

    let intervalo = setInterval(function () {

        numero.textContent = contador + "%";
        contador += 1;

        if (contador > 31) {
            clearInterval(intervalo);
            dado.style.transform = 'rotateX(90deg)';
            ladoA.style.boxShadow = 'none'

            setTimeout(function () {

                let contador2 = 32;
                
                let intervalo2 = setInterval(function () {
                    numero2.textContent = contador2 + "%";
                    contador2 += 1;
                    if (contador2 > 63) {
                        clearInterval(intervalo2);
                        dado.style.transform = 'rotateX(180deg)';
                        ladoA.style.display = 'none';
                        ladoB.style.boxShadow = 'none';

                        setTimeout(function () {
                            let contador3 = 64;
                            let intervalo3 = setInterval(function () {
                                numero3.textContent = contador3 + '%';
                                contador3 += 1;
                                if (contador3 > 100) {
                                    clearInterval(intervalo3);



                                }
                            }, 30);
                        }, 500);
                    }

                }, 30);

            }, 200); // Esperar 500ms antes de iniciar el segundo contador
        }
    }, 30);

}

// Llamar a la función cuando se carga el documento
document.addEventListener("DOMContentLoaded", function () {
    incrementarNumero();
});
