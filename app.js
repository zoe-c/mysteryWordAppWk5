// Require
const express = require('express');
const session = require('express-session');
const mustacheExpress = require('mustache-express');
// const router = express.Router();
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const fs = require('fs');
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");
// const words = './models/words.js';


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
   // code for saving this shit in a session.
   // want to configure a session on submit : I'm game or  modal: BYE on submit: I'm lame
   res.redirect('/play');
});

app.get('/play', function (req,res) {
   // generate a random word and store it in an array of sep. char strings
   var rand = Math.floor(Math.random() * words.length);
   // var randWord = words[rand];
   var randWordArr = words[rand].split("");
   console.log(randWordArr);
   for (var i = 0; i < randWordArr.length; i++) {
      if (letter === randWordArr[i] === true ) {
       console.log(letter);
       console.log(randWordArr[i]);
       console.log(randWord.indexOf(randWord[i]));
       console.log("there is a match");
      };
   };



   // NEED A WAY TO LIMIT THE LENGTH OF THE WORD IF THE USER ONLY GETS 8 GUESSES...LIMIT WORD.LENGTH to 8 mx? to 10 mx?
   // -----------------------------------------------
   res.render('play', {randWordArr: randWordArr});

   // res.render('play', {
   //    randWordArr: randWordArr,
   //    letter: letter
   // });
   // // need to be able to store this word in a session
});

// app.post('/play', function (req,res){
//    // NEED TO DRAG THIS INTO A VALIDATION FUNCTION// SEP JS
//    // checking for if user entered a letter or not
//    // ALSO: need to loop through word array and check IF letter guessed === words[i] >> store in displayArray at the same index.... OR let it be stored in the cookies somehow
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
// });
//
// ----------------------------------------------
// app.get('/lame', function (req, res) {
//   res.render('bye');
// });

app.post('/lame', function (req, res) {
   res.render('bye');
})



// Port
app.listen(3000, function(){
  console.log('Started App!')
});
