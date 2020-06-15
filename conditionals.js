var beerPrice = 455;
if(beerPrice < 400){
    console.log("I will drink beer !");
}
else if(beerPrice == 455){
    console.log("It's too expensive");
}
else if(beerPrice != 450){
    console.log("Then what's the price?");
}
else{
    console.log("Damn i cannot have it");
}

var gotJob = true;
var savingAmmount = 30000;

if(gotJob == true && savingAmmount > 200000){
    console.log("Lets find a bride for you !");
}
else if(gotJob == false || savingAmmount < 200000){
    console.log("oh there is no marrige in your luck");
}
else if(gotJob == true || savingAmmount != 200000){
    console.log("Okay lets just wait for some time until you get enough savings");
}
else{
    console.log("oh there is no marrige in your luck");
}