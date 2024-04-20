


let dailyBudget,estBooks,estEatingOut,eatA,bookA;
let totalCosts= estEatingOut + estBooks;



dailyBudget= Number(prompt("Enter your Daily Budget"));
const dailySavings= Number(prompt("Enter the minimun amount that you would like to save daily"));
estEatingOut= Number(prompt("Enter the costs of eating out"));
estBooks= Number(prompt("Enter the costs of purchasing books"));


// let canAfford = totalCosts-dailySavings;

let exit=true;
while(exit){


    let priority=prompt("Which is you priority including the ´Savings´?: EAT / BOOK").toUpperCase();
    if(priority==="EAT"){
       
        if(dailySavings+estEatingOut+estBooks <  dailyBudget){
            console.log("You can afford Eating Out the Book purchasen and SAVE!.");
        }else if(dailySavings+estEatingOut< dailyBudget){
            console.log("You can only afford Food.");
        }else{
            console.log("You can afford nothing");
            exit= confirm("Do you want to try again or exit")
        }break
    }else if(priority==="BOOK"){
        
        if(dailySavings+estEatingOut+estBooks <  dailyBudget){
            console.log("You can afford the Book purchase and Eating Out and SAVE!.")
        }else if(dailySavings+estBooks< dailyBudget){
            console.log("You can only afford the Book purchase.")
        }else{
            console.log("You can afford nothing")
        }
        exit= confirm("Do you want to try again or exit")
    }

}

