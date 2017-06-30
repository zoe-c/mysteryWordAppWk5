'use strict'
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
// -----------------------------------------------

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


// Requests
app.get('/', function (req, res) {
  res.render('welcome');
});

app.post('/', function(req,res) {
   // code for saving this in a session.
   // want to configure a session on submit : I'm game or  modal: BYE on submit: I'm lame
   res.redirect('/play');
});

// Wrap this in a function and throw in SEP JS FILE
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");
var rand = Math.floor(Math.random() * words.length);
var randWord = words[rand];
var randWordArr = words[rand].split("");
console.log(randWordArr);
console.log(typeof randWordArr);

app.get('/play', function (req,res) {
   // to render randWordArr ((array))
   // UNCOMMENT AND RENDER ARR INSTEAD OF WORD
   // res.render('play', {randWordArr: randWordArr});

   // to render randWord ((arr: 1 string))
   // for styling purposes only VVVVVVVVVV
   res.render('play', {randWord: randWord});

   // store this word in a session
});


app.post('/play', function (req,res) {
   // console.log(req.body.letter);

   var letter = req.body.letter;
   for (var i = 0; i < randWordArr.length; i++) {
      if (randWordArr[i] === letter === true ) {
         var match = randWordArr[i];
      // //  console.log(letter);
       console.log(match);
       console.log(randWordArr.indexOf(randWordArr[i]));
       console.log("there is a match");
      }
   };
   //    // checking for if user entered a letter or not
         // store in displayArray at the same index.... OR let it be stored in the cookies
         // somehow
   //    // getElementById('letter-graveyard').innerHTML(displayArray)
   //     req.checkBody('letter','You forgot to sumbit a letter! Guess again.').notEmpty();
   //    // validation
   //    var errors = req.validationErrors();
   //      if (errors) {
   //       //make res.send a modal so that you can refresh by:   res.redirect('/play');
   //        res.send( 'You forgot to submit a letter! Guess again.');
   //     } else if {
   //       // INCORRECT GUESS
   //       //   let badLett  = {'letter': req.body.letter};
   //         res.render('play', {letter});
   //      } else {
   //       //   CORRECT GUESS
   //       //  let winLett =
   //
   //      }

   res.redirect('/play');
});
//
// ----------------------------------------------

app.post('/lame', function (req, res) {
   res.render('bye');
})


// Port
app.listen(3000, function(){
  console.log('Started App!')
});
