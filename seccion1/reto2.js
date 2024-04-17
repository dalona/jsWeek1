const listOfSouvenirs = [];

let nombre, price, availability;

let areCorrectDataTypes = false;

while (!areCorrectDataTypes){

    s=prompt("Do you want to add a souvenir?").toUpperCase()
    if (s===('YES'))

    nombre=prompt("Enter the name of the souvenir");
    price= Number(prompt("Enter the price of the souvenir"));
    availability= confirm ("Click OK if the souvenir is available");

    areCorrectDataTypes = typeof nombre=== 'string' && !isNaN(price) && availability;
    if (areCorrectDataTypes) {
        alert("You have entered correct data types")
        break
    } 
}

const souvenir={
    nombre,
    price,
    availability,   
}

listOfSouvenirs.push(souvenir)

console.log(listOfSouvenirs)
// souvenir = {
//     nombre: ,
//     price:,
//     availability:,
    
// }


