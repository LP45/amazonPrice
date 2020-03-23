// Green means minor fee! Red means apply fee. Black means apply major discount! Yellow = 10% off 

// const msg1 = prompt("What is the name of the item?")
// let msg2 = prompt("Is today 'Black Friday?'")

let msg3 = prompt("Did the purchaser find the product through a search engine");
//  let msg4 = prompt("What is the base price")
let msg5 = prompt("Did purchaser visit a comparison-shopping site?");

// alert(msg1);
// alert(msg2);
// alert(msg3);
// if(msg2==yes)

let finalPrice;

let message = "GREEN!";
if (msg3 === "yes") 
{
let price = prompt("What is the base price?");
message = message + "The purchaser came through a search engine, so we will increase the price by 1%. ";
alert(message);
finalPrice = price * 1.01;
alert(finalPrice);
}



message = "Yellow!";
if(msg5 === "yes")
{
    let price = prompt("What is the base price?");
    message = message + "Purchaser visited A comparison-shopping site! ";
    alert(message);
    betweenPrice = price / 10;
    finalPrice = price - betweenPrice;
    alert("This is the final price " + finalPrice);
}



