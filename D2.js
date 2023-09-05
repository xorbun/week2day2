/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val1=5;
let val2=10;
if (val1>val2)
{
  console.log("il primo valore è più grande" + " " + (val1));
}
else
{
  console.log("il secondo valore è più grande" + " " + (val2))
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val3= 15;
let val4= 5;
if(val3!==val4)
{
  console.log("not equal");
}
else
{
  console.log("equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
val5= 10;
val6=5;
val6=(val5%val6);
if (val6===0)
{
  console.log("perfettamente divisibile per 5");
}
else
{
  console.log("non perfettamente divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val7=6;
let val8=2;
if(val7===8)
{
  console.log("evviva, il primo numero è 8");
}
else if (val8===8)
{
  console.log("almeno il secondo è 8");
}
else if (val7+val8===8)
{
  console.log("tramite somma il risultato è 8");
}
else if(val7-val8===8)
{
  console.log("tramite sottrazione il risultato è 8");
}
else
{
  console.log("mi arrendo...");
}
  




/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart= 90;
let shippingCost=10;
let discount=((totalShoppingCart*20)/100);
totalShoppingCart -= discount;
if (totalShoppingCart > 50)
{
 
  console.log("spedizione gratuita. costo totale"+ " "+ (totalShoppingCart));
}
else
{
  totalShoppingCart +=shippingCost;
  console.log("il costo totale"+ " "+ (totalShoppingCart));
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
 
//controllare esercizio precedente(sconto applicato prima del calcolo delle spese di spedizione)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1=9;
let num2=8;
let num3=13;
let vett=[num1,num2,num3];
console.log(vett);
vett.sort(function(a,b){return a - b});
for(let j=0; j< vett.length;j++)
{
  let a=vett[0];
  vett[0]=vett[2];
  vett[2]=a;
}
console.log(vett);





/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let valor=2;
let a= typeof(valor);
if(a==="number")
{
  console.log("è un numero");
}
else
{
  console.log("non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let v1=50;
if (v1%2===0)
{
  console.log("numero pari");
}
else
{
  console.log("numero dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 3
  if (val < 5) 
  {
      console.log("Meno di 5");
  } 
  else if (val < 10)
  {
      console.log("Meno di 10");
  } 
  else 
  {
      console.log("Uguale a 10 o maggiore");
  }
  

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = 
{
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city:["Toronto"],
}
console.log(me);
console.log(me.skills);
console.log(me.city);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me.skills);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cont=[0];
for(let i=0; i<10;i++)
{
  cont[i]=i+1;
}
console.log(cont);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
cont[cont.length-1]= 100;
console.log(cont);