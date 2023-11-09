// Recupera l'elemento div in cui mostrare i numeri
const divNumeri = document.getElementById("divNumeri");
// Inizializza un array vuoto in cui inserire i numeri generati dal PC
const numeriPC = [];
// Genera 5 numeri random, li manda a schermo e li inserisce nell'array
for(let i=0; i<5; i++){
    const numero = Math.trunc(Math.random() * 10 + 1);
    divNumeri.append(numero + " ");
    numeriPC.push(numero);
}
// Inizializza la variabile che terrà il conto dei numeri inseriti dall'utente
let x = 0;
// Inizializza la variabile che terà il conto dei numeri indovinati dall'utente
let indovinate = 0;
// Funzione nascondi_numeri
function nascondi_numeri(){
    // Nasconde i numeri
    divNumeri.innerHTML = "";
    // Crea l'input e il bottono Verifica e li appende in pagina
    const input = document.createElement("input");
    divNumeri.appendChild(input);
    const bottone = document.createElement("button");
    bottone.textContent = "Verifica";
    // Aggiunge un eventListener sul bottono Verifica
    bottone.addEventListener("click", function(){
        x++;
        // Permette all'utente di inserire un massimo di 5 numeri
        if(x<=5){
            if(input.value!=""){
                numeriUtente.push(parseInt(input.value));
                input.value = "";
                // Al quinto input controlla se i numeri inseriti dall'utente sono uguali a quelli generati dal PC
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
            }else{
                x--;
                console.log("E provaci almeno!!!");
            }
        }
    });
    divNumeri.appendChild(bottone);
    let numeriUtente = [];
}
// Invoca la funzione nascondi_numeri dopo 30 secondi dal caricamento della pagina
const nascondiNumeri = setTimeout(nascondi_numeri, 3000);