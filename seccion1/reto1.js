const destino = prompt ("Which will be your destination?");
let duracion =  Number(prompt ("How many days would you like to stay?"));
let budget = Number(prompt ("How much is the maximun that your are will to pay for the whole trip including emergencies?"));
// let presupuesto = Number(prompt("How much is your budget for this trip?"));
let presupuestodia = Number(prompt("How much is your budget each day?"));
let presupuestoT = presupuestodia*duracion


// para verificar si el presupuesto que Julian ha calculado inicialmente es suficiente

if (presupuestoT>budget){
console.log("Your budget your trip to",destino,"it´s not enough. Fixed your budget or change your destination");}
else 
    console.log("You are on budget enjoy your trip to",destino);
