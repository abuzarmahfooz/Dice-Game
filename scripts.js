// Generate a random number between 1 and 6 for Player 1
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
// Construct the file name for the dice image for Player 1
var randomDiceImg = "dice" + randomNumber1 + ".png";
// Construct the path to the image file for Player 1
var randomImgPath = "images/" + randomDiceImg;

// Find the HTML element with the class "img1" and set its "src" attribute to the generated image path
var image1 = document.querySelector(".img1");
image1.setAttribute("src", randomImgPath);

// Generate a random number between 1 and 6 for Player 2
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
// Construct the file name for the dice image for Player 2
var randomDiceImg = "dice" + randomNumber2 + ".png";
// Construct the path to the image file for Player 2
var randomImgPath = "images/" + randomDiceImg;

// Find the HTML element with the class "img2" and set its "src" attribute to the generated image path
var image2 = document.querySelector(".img2"); 
image2.setAttribute("src", randomImgPath);

// Determine the winner or declare a tie based on the generated random numbers
if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 2 Wins!";
} else {
    document.querySelector('h1').innerHTML = "It's a tie!";
}
