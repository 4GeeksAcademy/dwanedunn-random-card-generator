import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //What are the CardNumbers in a suit of cards?
const CARDNUMBER = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const SUIT = ["DIAMONDS", "SPADES", "HEARTS", "CLUBS"];
let randomCardNumber = Math.floor(Math.random()*CARDNUMBER.length);
let randomSuitNumber = Math.floor(Math.random()*SUIT.length);
let finalSuite = SUIT[randomSuitNumber];

  
};
