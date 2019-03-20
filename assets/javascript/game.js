$(document).ready(function() {

//game counter
var counter = 0;
var wins = 0;
var losses = 0;

//set the target randomNumber(19 - 120) and the values of crystals (1 - 12)
var randomNumber = Math.floor(Math.random() * 101) + 19;
$("#random-number").text("Target number : " + randomNumber);

var yellow = Math.floor(Math.random() * 11) + 1;
var red = Math.floor(Math.random() * 11) + 1;
var blue = Math.floor(Math.random() * 11) + 1;
var diamond = Math.floor(Math.random() * 11) + 1;

console.log(randomNumber);
console.log(yellow);
console.log(red);
console.log(blue);
console.log(diamond);
   
//reset fucntion for when the game starts, and ends

function reset(){
    counter = 0;
    randomNumber = Math.floor(Math.random() * 101) + 19;
    $("#random-number").text("Target number : " + randomNumber);
    yellow = Math.floor(Math.random() * 11) + 1;
    red = Math.floor(Math.random() * 11) + 1;
    blue = Math.floor(Math.random() * 11) + 1;
    diamond = Math.floor(Math.random() * 11) + 1;
}

//increase counter by the value of a crystal when the crytal is clicked
$("#yellow").on('click',function(){
    counter += yellow;
    checkValue();
    $("#score").text("Your score: "+counter);
})

$("#red").on('click',function(){
    counter += red;
    checkValue();
    $("#score").text("Your score: "+counter);
})

$("#blue").on('click',function(){
    counter += blue;
    checkValue();
    $("#score").text("Your score: "+counter);
})

$("#diamond").on('click',function(){
    counter += diamond;
    checkValue();
    $("#score").text("Your score: "+counter);
})


//check if crystal value adds up to the target number
    //if counter is less than the random number, keep running the game
    //if counter is equal than the random, user wins: wins++, start()
    //if counter is bigger than the random number, user loses: losses++, start()

function checkValue (){
    if(counter === randomNumber){
        alert("You won!")
       wins ++;
       $("#wins").text("Wins: "+ wins);
       reset();
        
    }

    else if (counter > randomNumber){
        alert("You lost!");
        losses ++;
        $("#losses").text("losses: "+ losses);
        reset();
    }
   
}

});