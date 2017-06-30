

// Require
const express = require('express');
const session = require('express-session');
const mustacheExpress = require('mustache-express');
// const router = express.Router();
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const fs = require('fs');
// const words = './models/words.js';

// Move this to app.get /play   //eventually move this to words.js and require the file words.js
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");



// Create app
const app = express();


// Views
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');


// Middleware: Parser + Validator
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

// Static/Public (styles)
app.use(express.static('public'));

// Middleware: session
app.use(session({
  secret: 'ssshhh',
  resave: false,
  saveUninitialized: true
}));




// Port
app.listen(3000, function(){
  console.log('Started App!')
});



// WORDS README------------------
// When a user that is not in a current game arrives at your root page, your app must select a word at random from the list of words in the file /usr/share/dict/words. This file exists on your computer already. You will have to read it with Node. The following line will read it and split it into words:

// Store the word the user is trying to guess in a session.
// ----------------------------


// OPT 1!
// random word pull (MODIFY OR DRAG THE 2nd half into app.js. it applies to actually rendering it. useful for printing it to the div)
// VVVVVVVVVVVVVVVVVVVVVVVV
// 1)
// var myArray = ['January', 'February', 'March'];
// var rand = Math.floor(Math.random() * myArray.length);
// console.log(myArray[rand]);
// 2)
// function showquote(){
//     document.getElementById('quote').innerHTML = myArray[rand];
// }
// showquote();

// your modification:VVVVVVVVVVVVVVVVVVV
// .floor rounds down int.... .random will generate a random floating point int...
// this is kind of exclusive
 // var rand = Math.floor(Math.random() * words.length);
 // console.log(words[rand]);




// OPT 2!
// Getting a random integer between two values
// This example returns a random integer between the specified values. The value is no lower than min (or the next integer greater than min if min isn't an integer), and is less than (but not equal to) max.  src=MDN  //min is inclusive. use this to add to custom gen function
 // function getRandomIntInclusive(min, max) {
 //   min = Math.ceil(min);
 //   max = Math.floor(max);
 //   return Math.floor(Math.random() * (max - min + 1)) + min;
 // }
