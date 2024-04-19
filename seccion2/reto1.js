




exit=true;

while(exit){

    let energyLevel = confirm ("Do you have enough energy today?")
    let wheather = confirm("Is the weather proper to go out?")
    let chores = confirm("Do you have a high workload? ")


    if (energyLevel && wheather && chores){
        console.log("You could running today")
         exit = confirm("Do you want to try again or exit")
    }else if (!energyLevel && wheather && chores){
        console.log("You should take the day off")
         exit = confirm("Do you want to try again or exit")
    }else if(!wheather && chores && energyLevel){
        console.log("You must finish work. Let´s Go!")
         exit = confirm("Do you want to try again or exit")
    }
}
    