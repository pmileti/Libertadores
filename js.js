fetch('https://libertadores-1-r1902821.deta.app/libertadores/2023')
    .then(response => response.json())
    .then(groups => {
        for (const key in groups)
            addSquad(key, groups[key]);
    })
    .catch(err => alert('ocurrio un error al llamar la api :(' + err))

/**
 * Setea un InputElement agregando el nombre del equipo
 * @param {string} idInp id del InputElement
 * @param {string} squad nombre del equipo
 */
const addSquad = (idInp, squad) => {
    document.getElementById(idInp).value = squad;
}

const Libertadores = ["GRUPO A", "GRUPO B", "GRUPO C", "GRUPO D", "GRUPO E", "GRUPO F", "GRUPO G", "GRUPO H"];
let marco = document.getElementById("marco");
let btnRevelar = document.getElementById("btn-revelar");
let revelado = false;


Libertadores.forEach((grupo) => {
    let div = document.createElement('div');
    div.id = grupo;
    div.className = "grupo";
    div.innerText = grupo;
    for (let i = 1; i <= 4; i++) {
        let input = document.createElement('input');
        input.id = grupo + "_equipo" + i;
        div.appendChild(input);
    }
    marco.appendChild(div);
});

function campeon() {
    if (!revelado) {
        btnRevelar.disabled = true; // deshabilitar el boton una vez ya pulsado
        setTimeout(function () { // delay para evitar tocar el botón antes de que carguen los grupos
        Libertadores.forEach((grupo) => {
            let num1 = Math.floor(Math.random() * 4) + 1;
            let num2 = Math.floor(Math.random() * 4) + 1;
            while (num1 === num2) {
                num2 = Math.floor(Math.random() * 4) + 1;
            }
            let clas1 = document.getElementById(grupo + "_equipo" + num1);
            let clas2 = document.getElementById(grupo + "_equipo" + num2);
            clas1.style.backgroundColor = "yellow";
            clas2.style.backgroundColor = "yellow";
        });
        }, 540);

        var inputs = document.querySelectorAll("input");
        var inputsAmarillos = [];

        setTimeout(function () { 
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].style.backgroundColor == "yellow") {
                inputsAmarillos.push(inputs[i]);
            }
        }
    }, 2000);

        setTimeout(function () { // delay para esperar antes de revelar al campeon
        var indiceAleatorio = Math.floor(Math.random() * inputsAmarillos.length);
        var inputSeleccionado = inputsAmarillos[indiceAleatorio];
        inputSeleccionado.style.backgroundColor = "lightgreen";
        btnRevelar.innerText = "Campeón: " + inputSeleccionado.value;
        revelado = true;
        }, 2000);
    }
}

