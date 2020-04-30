let msg3 = prompt("Did the purchaser find the product through a search engine");
let msg5 = prompt("Did purchaser visit a comparison-shopping site?");
let msg2 = prompt("Is today 'Black Friday?'");


for (let i = 0; i < 4 ; i++) {
if (msg3 === "" || msg2 === "" || msg5 === "") {
     alert("Please Enter the correct information");
    msg3 = prompt("Did the purchaser find the product through a search engine");
    msg5 = prompt("Did purchaser visit a comparison-shopping site?");
    msg2 = prompt("Is today 'Black Friday?'");   
        
    }
    else
    {
    break;
 }
}



for (let i = 0; i < 3; i++) {
    

let finalPrice;

let message = "GREEN!";
if (msg3 === "yes") {
    uno();
    
}




function uno(){

const msg1 = prompt("What is the name of the item?");
let price = prompt("What is the base price?");
message = message + "The purchaser came through a search engine, so we will increase the price by 1%. ";
alert(message);
finalPrice = price * 1.01;
alert(finalPrice);
}



message = "Yellow!";

if(msg5 === "yes"){
    dos();
    
}


function dos(){

    const msg1 = prompt("What is the name of the item?")
    let price = prompt("What is the base price?");
    message = message + "Purchaser visited A comparison-shopping site! ";
    alert(message);
    betweenPrice = price / 10;
    finalPrice = price - betweenPrice;
    alert("This is the final price " + finalPrice);
}


//Black Friday
if (msg2 === "yes") {
    tres();
    
}



function tres(){

const msg1 = prompt("What is the name of the item?")
let price = prompt("What is the base price?");
message = message + "Today is BLACK FRIDAY. DISCOUNT 25% ";
alert(message);
finalPrice = price * .25;
let discount = price - finalPrice
alert(discount);
}
}