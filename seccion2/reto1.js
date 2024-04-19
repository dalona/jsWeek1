




exit=true;

while(exit){

    let energyLevel = confirm ("Do you have enough energy today?")
    let wheather = confirm("Is the weather proper to go out?")
    let chores = confirm("Do you have a high workload? ")
    let result = 1

    if (energyLevel && wheather && chores){
        console.log("result",result,"You could run today")
        choice++
         exit = confirm("Do you want to try again or exit")
    }else if (!energyLevel && wheather && chores){
        console.log("result",result,"You could take some rest and advance in your work ")
        choice++
         exit = confirm("Do you want to try again or exit")
    }else if(!wheather && chores && energyLevel){
        console.log("result",result,"You must finish your work. Let´s Go!")
        choice++
    }else if(!wheather && !chores && energyLevel){
            console.log("result",result,"You could run today must finish")
            choice++
    }else if(!wheather && !chores && !energyLevel){
                console.log("result",result,"You need a Time Management class")
                choice++
    }else if(wheather && !chores && energyLevel){
                    console.log("result",result,"You could take your day off or get in shape and go for a run.")
                    choice++            
         exit = confirm(choice,"Do you want to try again or exit")
    }
    
}
    