const itemsListSunny = [];
const itemslistRainy = [];
let weather, space,overweight,item

let trip= true;

while(trip){
    overweight=confirm("Is your luggage under the limit of weight?:");
    if(overweight){
        space=confirm("Do you have enough space in your luggage?:");
        if(space){
            weather=prompt("How´s the weather?, Sunny or Rainy?").toUpperCase();
            if(weather==="SUNNY"){
                item=prompt("Which item do you want to take?:");
                itemsListSunny.push(item);

            }else if (weather==="RAINY"){
                item=prompt("Which item do you want to take?:");
                itemslistRainy.push(item);

            }
        }
        else{
            alert("You don´t have enough space in your luggage")
            itemDelete=confirm("Do you want to delete an item from your luggage?")
            if(itemDelete){
                console.log("Items for Sunny Day:",itemsListSunny);
                console.log("Items for Rainy Day:",itemslistRainy);
                item=prompt("Which item do you want to delete?");
                afterDeleted = itemsListSunny.filter(elemento => {
                    return (elemento === item);
                    })
                    
                    const afterDeleted = itemslistRainy.filter(elemento => {
                    return (elemento === item);
                    })
                    
                }else break
                    
            }
    }else {
        alert("Your luggage is overweight");
        itemDelete=confirm("Do you want to delete an item from your luggage?")
            if(itemDelete){
                console.log("Items for Sunny Day:",itemsListSunny);
                console.log("Items for Rainy Day:",itemslistRainy);
                item=prompt("Which item do you want to delete?");
                afterDeleted = itemsListSunny.filter(elemento => {
                    return !(elemento === item);
                    })
                    
                    const afterDeleted = itemslistRainy.filter(elemento => {
                    return !(elemento === item);
                    })
                }else break
    }            
        
    
    



}
// const studentsList= [3,5,6,4,3];

// const multiplosDe2= studentsList.filter(funcion);

// function funcion (resultado){
//     return resultado % 2 === 0;
// }

// console.log (multiplosDe2);
