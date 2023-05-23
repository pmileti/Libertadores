const Libertadores=["GRUPO A", "GRUPO B", "GRUPO C", "GRUPO D", "GRUPO E", "GRUPO F", "GRUPO G", "GRUPO H"];
let marco= document.getElementById("marco");

Libertadores.forEach((grupo)=>{
    let div=document.createElement('div');
    div.id=grupo;
    div.className="grupo";
    div.innerText=grupo;
    for(let i=1;i<=4;i++){
        let input=document.createElement('input');
        input.id=grupo + "_equipo" + i;
        div.appendChild(input);
    }
    marco.appendChild(div);
    
});


function campeon(){
    Libertadores.forEach((grupo)=>{
        let num1 = Math.floor(Math.random() * 4) + 1;
        let num2 = Math.floor(Math.random() * 4) + 1;
        while(num1===num2){
            num2 = Math.floor(Math.random() * 4) + 1;
        }
        let clas1=document.getElementById(grupo + "_equipo" + num1);
        let clas2=document.getElementById(grupo + "_equipo" + num2);
        clas1.style.backgroundColor="yellow";
        clas2.style.backgroundColor="yellow";



    });

var inputs = document.querySelectorAll("input");
var inputsAmarillos = [];

for (var i = 0; i < inputs.length; i++) {
  if (inputs[i].style.backgroundColor == "yellow") {
    inputsAmarillos.push(inputs[i]);
  }
}

var indiceAleatorio = Math.floor(Math.random() * inputsAmarillos.length);

var inputSeleccionado = inputsAmarillos[indiceAleatorio];

inputSeleccionado.style.backgroundColor="lightgreen";


}