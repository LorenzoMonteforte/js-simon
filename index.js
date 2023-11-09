let divNumeri = document.getElementById("divNumeri");
let numeriPC = [];
for(let i=0; i<5; i++){
    let numero = Math.trunc(Math.random() * 10 + 1);
    divNumeri.append(numero + " ");
    numeriPC.push(numero);
}
let x = 0;
let indovinate = 0;
function nascondi_numeri(){
    divNumeri.innerHTML = "";
    let input = document.createElement("input");
    divNumeri.appendChild(input);
    let bottone = document.createElement("button");
    bottone.textContent = "Verifica";
    bottone.addEventListener("click", function(){
        x++;
        if(x<=5){
            numeriUtente.push(parseInt(input.value));
            if(x==5){
                for(let i=0; i<5; i++){
                    if(numeriPC[i]==numeriUtente[i]){
                        indovinate++;
                        console.log("Hai indovinato il numero in posizione " + (i+1) + "; Il numero era " + numeriPC[i]);
                    }else{
                        console.log("Non hai indovinato il numero in posizione " + (i+1) + "; Il numero estratto era " + numeriPC[i] + " mentre tu hai detto " + numeriUtente[i]);
                    }
                }
                console.log("In totate hai indovinato " + indovinate + " numeri");
            }
        }
    });
    divNumeri.appendChild(bottone);
    let numeriUtente = [];
}
let nascondiNumeri = setTimeout(nascondi_numeri, 30000);