








// ***YOUR PSEUDO CODE---------------------------------------------------------
// WORDS.JS
// const words will read it and split it into words.
// NEED:
   // PULL A RANDOM WORD FROM THE ARRAY

   // SANITIZE THE WORD: to lowercase is attached to const and this may already be done
      // -express-validator

   // STORE WORD IN A SESSION:                   ./models/userSession.js
   // http://expressjs-book.com/index.html%3Fp=128.html
   // (to define a session variable AKA SOMETHING TO STORE IN THE SESSION, JUST CHAIN OR DOT NOTATE CONNECT IT TO THE REQ.SESSION OBJECT!!! )

         // EX----> req.session.wordToGuess
         // EX---->req.session.guessedLettersArray


   // NOTE: limit guesses by defining cookie maxAge? the view-count example in the login?
               // make function to refresh page or adjust cookie with each incorrect guess?


   // STORE LETTERS GUESSED IN SESSION//    ./models/userSession.js
      // WRONG IN DIV TO THE SIDE  (getbyid ..chain.. innerHTML)
      // RIGHT IN THEIR CORRECT SPACES


   // RENDER SPACES UNTIL CORRECT LETTERS ARE GUESSED
      // NOTE: accomplish this with assigning sep child DIV (within parent div) to each item in the displayArray (each letter). make them hidden until post value === the value of that index.
      // before: hidden after: display   kind of thing



// *** PROJECT RULES------------------------------------------------------------

   // 8 guesses.

   // Keep track of guesses left after each round.
   // (determined by what you've stored in the session)
      // IF INCORRECT = loses guess    IF CORRECT = doesn't lose guess

   // Ask user to supply 1 guess (letter) at a time, use form.
   //form should be validated: 1 letter @ a time
   // if (guess > 1 char) --> must alert "input is invalid" + let them try again.

   // User GUESSES SAME LETTER:
   // -doesn't lose guess
   // -alert ("already guessed")
   // -try again.


   // SANITIZE INPUT: (uppercase) needs to not be case-sensitive

   // Store GUESSES in SESSION
   // Render CORRECT WORDS in their correct spots
   // Render INCORRECT in DIV/ graveyard


   // GAME ENDS :
   // 1)constructs the full word
   // 2)runs out of guesses. Reveal word when game ends.
   //
   // ASK FOR PLAY AGAIN:
      // starts game if they respond positively
