let divNumeri = document.getElementById("divNumeri");
for(let i=0; i<5; i++){
    let numero = Math.trunc(Math.random() * 10 + 1);
    divNumeri.append(numero + " ");
}
let x = 0;
function nascondi_numeri(){
    divNumeri.innerHTML = "";
    let input = document.createElement("input");
    divNumeri.appendChild(input);
    let bottone = document.createElement("button");
    bottone.textContent = "Verifica";
    bottone.addEventListener("click", function(){
        x++;
        if(x<=5){
            numeriUtente.push(input.value);
            console.log(numeriUtente);
        }
    });
    divNumeri.appendChild(bottone);
    let numeriUtente = [];
}
let nascondiNumeri = setTimeout(nascondi_numeri, 30000);