
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


   // SANITIZE INPUT: needs to not be case-sensitive

   // Store GUESSES in SESSION
   // EX----> req.session.wordToGuess
   // EX---->req.session.guessedLettersArray

   // Render CORRECT WORDS in their correct spots
   // Render INCORRECT in DIV/ graveyard


   // GAME ENDS :
   // 1)constructs the full word
   // 2)runs out of guesses. Reveal word when game ends.
   //
   // ASK FOR PLAY AGAIN:
      // starts game if they respond positively
