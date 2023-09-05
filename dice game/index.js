var randomNum1 = Math.floor(Math.random()*6)+1;

var randomDieImgSource1 = "./images/dice" + randomNum1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDieImgSource1);

var randomNum2 = Math.floor(Math.random()*6)+1;

var randomDieImgSource2 = "./images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDieImgSource2);

if (randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "1️⃣ Player 1 Wins";
}
else if (randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML = "Player 2 Wins 2️⃣";
}
else if (randomNum1 == randomNum2){
    document.querySelector("h1").innerHTML = "It's a Tie!";
}