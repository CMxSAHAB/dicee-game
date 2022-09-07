var randomnum1=Math.random()*6+1;
randomnum1=Math.floor(randomnum1);
console.log("Num1 :"+ randomnum1);

var randomnum2=Math.random()*6+1;
randomnum2=Math.floor(randomnum2);
console.log("Num2 :"+ randomnum2);
// for dice 1
var imgnum1="images/dice"+randomnum1+".png";

var element =document.getElementsByClassName('img1');
element[0].src= imgnum1;
//for dice 2
var imgnum2="images/dice"+randomnum2+".png";
var element=document.getElementsByClassName('img2');
element[0].src= imgnum2;
// the player who have won
var headcontainer = document.getElementById('head-container');
if(randomnum1>randomnum2){
headcontainer.textContent= "player 1 Won 🏁";
}
else if (randomnum1<randomnum2){
    headcontainer.textContent= "player 2 Won 🏁";
    }
    else{
        headcontainer.textContent= "draw!!";
    }

