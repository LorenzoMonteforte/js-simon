let divNumeri = document.getElementById("divNumeri");
for(let i=0; i<5; i++){
    let numero = Math.trunc(Math.random() * 10 + 1);
    divNumeri.append(numero + " ");
}
function nascondi_numeri(){
    
}
let nascondiNumeri = setTimeout(nascondi_numeri, 30000);