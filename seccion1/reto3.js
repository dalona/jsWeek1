


const itemsList= []

let iBudget = Number(prompt("How much is your initial budget?"));

const emergencies = Number(prompt("How much will be the minimun you are willing to pay in case of Emergency?"));

let transportation = Number(prompt("How much is the estimated cost of ´Transportation´ on this trip?"));

let acommodation = Number(prompt("How much is the estimated cost of ´Acommodation´ on this trip?"));

let food = Number(prompt("How much is the estimated cost of ´Food´ on this trip?"));

let fixedCostsTotal = transportation + acommodation + food + emergencies;


while(true){
    if (iBudget>fixedCostsTotal){
            
            console.log("YOU HAVE ENOUGH MONEY :) - You can afford an extra item in your luggage");
            let itemQuestion=confirm("Do you want to purchase an extra item?");
            if (itemQuestion){

                let itemName =prompt("What is the extra item name?");
                let itemPrice=Number (prompt("What is the extra item price?"));
    
                const extraItem ={
                    itemName,
                    itemPrice,
                }    
                itemsList.push(extraItem)
    
                fixedCostsTotal+= itemPrice;
                
            }else{
                break
            }

        }else {
            console.log("You don´t have enough money to afford an extra item in your luggage. STAY ON BUDGET!");
        break}
     
console.log(itemsList)
}


