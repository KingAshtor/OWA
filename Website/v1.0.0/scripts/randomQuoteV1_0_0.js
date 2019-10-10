/*
Name:randomQuoteV1_0_0
Author: Ashton Sisson
Verion: 1.0.0
Description: Random Quote Script for OWA company home page
Purpose: To display a random quote when a button is
*/

function randomQuote() { //assigned function random

let rQuoteStoreage = //Used to assign array that stores random quotes
  ["I'm lost -Daniel Williams",
    "I'm sorry Nate, but Harry is not here for me to assault today -Ashton Sisson",
    "Use slack -Mr. Smith",
    "Life Tip: dolphins are just smooth sharks",
    "Outcome Hazy, Try again later",
    "Beep Beep Lettuce",
    "Fun Fact:ℸ ̣ ᒷᔑᒲ ʖ is the best company",
    "sir can you not assault the image person's chair- Nathan Cunningham"
  ];

//Picks random quote. we generate a random whole number by combining math.floor, and math.random, and makes sure it is under the max array leangth
let rQuote =
  rQuoteStoreage[Math.floor(Math.random() * rQuoteStoreage.length)];

//outputs varible rQuote (the Random Quote) into the html under the tag output
document.getElementById("output").innerHTML = rQuote
}
