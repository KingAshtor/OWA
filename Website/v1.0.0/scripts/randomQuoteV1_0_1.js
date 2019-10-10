/*
Name:randomQuoteV1_0_1
Author: Ashton Sisson
Verion: 1.0.1
Description: Random Quote Script for OWA company home page
Purpose: To display a random quote when a button is
*/

function randomQuote() { //assigned function random

  let rQuoteStoreage = //Used to assign array that stores random quotes
    ["I'm lost -Daniel Williams",
      "I'm sorry Nate, but Harry is not here for me to assault today -Ashton Sisson",
      "Use slack -Mr. Smith",
      "Life Tip: Dolphins are just smooth sharks",
      "Outcome hazy, try again later",
      "Beep Beep Lettuce",
      "Fun Fact:ℸ ̣ ᒷᔑᒲ ʖ is the best company",
      "Sir can you not assault the image person's chair- Nathan Cunningham",
      "SUB TO NATE PLAYS GAMES!!! https://www.youtube.com/channel/UCHSDJZkW8WWwME36ZMvfuFg",
      "Oh no this can't be good -Daniel Williams",
      "Its a hoodie hoodie - Mykal Luciano",
      "Beans",
      "NO - Daniel Williams",
      "I will never be as smart as function -Daniel Williams",
      "He's literally just wrighting stuff down while im saying it -Daniel Williams",
      "My whole life is a lie -Daniel Williams",
      // "<img src='../images/OWA.png' alt='OWA.png is supossed to be here...'>",
      "Im an airplaine! PRPRPRPRPRPPRRPPRPRPRPRPRPRPPRPRPRRRPPPP -Ashton Sisson",
    ];

  //Picks random quote. we generate a random whole number by combining math.floor, and math.random, and makes sure it is under the max array leangth
  let rQuote =
    rQuoteStoreage[Math.floor(Math.random() * rQuoteStoreage.length)];

  //outputs varible rQuote (the Random Quote) into the html under the tag output
  document.getElementById("output").innerHTML = rQuote
}
