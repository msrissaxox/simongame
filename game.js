let gamePattern = [];


let buttonColours = ["red", "blue", "green", "yellow"];

let randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);

//Use nextSequence function to select a random color from the buttonColours array

//let randomChosenColour 

function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
};
console.log(nextSequence());


