document.addEventListener("DOMContentLoaded", function(){

    document.querySelector("#name").innerHTML = localStorage.getItem("name")

    document.querySelector("#text").style.background = localStorage.getItem("color")
})

// function to calculate the result of the survey
function tabulateAnswers() {
    // initialize variables for each choice's score
    // If you add more choices and outcomes, you must add another variable here.
    var c1score = 0;
    var c2score = 0;
    var c3score = 0;
    var c4score = 0;
    var c5score = 0;
    var c6score = 0;
    var c7score = 0;
    var c8score = 0;
    var c9score = 0;
    
    // get a list of the radio inputs on the page
    var choices = document.getElementsByTagName('input');
    // loop through all the radio inputs
    for (i=0; i<choices.length; i++) {
      // if the radio is checked..
      if (choices[i].checked) {
        // add 1 to that choice's score
        if (choices[i].value == 'c1') {
          c1score = c1score + 1;
        }
        if (choices[i].value == 'c2') {
          c2score = c2score + 1;
        }
        if (choices[i].value == 'c3') {
          c3score = c3score + 1;
        }
        if (choices[i].value == 'c4') {
          c4score = c4score + 1;
        }
        if (choices[i].value == 'c5') {
          c5score = c5score + 1;
        }
        if (choices[i].value == 'c6') {
          c6score = c6score + 1;
        }
        if (choices[i].value == 'c7') {
          c7score = c7score + 1;
        }
        if (choices[i].value == 'c8') {
          c8score = c8score + 1;
        }
        if (choices[i].value == 'c9') {
          c9score = c9score + 1;
        }
        // If you add more choices and outcomes, you must add another if statement below.
      }
    }
    
    // Find out which choice got the highest score. ALL OF THESE WERE LITERALLY COPY AND PASTED FOR NOW JUST AS A PLACEHOLDER
    // If you add more choices and outcomes, you must add the variable here.
    var maxscore = Math.max(c1score,c2score,c3score,c4score,c5score,c6score,c7score,c8score,c9score);
    
    // Display answer corresponding to that choice
    var answerbox = document.getElementById('answer');
    if (c1score == maxscore) { // If user chooses the first choice the most, this outcome will be displayed.
      answerbox.innerHTML = "Your game is: Valheim (survival, builder)";
    }
    if (c2score == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
      answerbox.innerHTML = "Your game is: Tiny Tina's Wonderlands or the borderlands series (silly, villans)";
    }
    if (c3score == maxscore) { // If user chooses the third choice the most, this outcome will be displayed.
      answerbox.innerHTML = "Your game is: Slimerancher (this game is just adorable)";
    }
    if (c4score == maxscore) { // If user chooses the fourth choice the most, this outcome will be displayed.
      answerbox.innerHTML = "Your game is: BioShock series or Spiritfarer (both wonderful and sad)";
    }
    if (c5score == maxscore) { // If user chooses the fourth choice the most, this outcome will be displayed.
      answerbox.innerHTML = "Your game is: Doom Eternal (hell, shooter) or Halo Infinite (action, adventure)";
    }
    if (c6score == maxscore) { // If user chooses the fourth choice the most, this outcome will be displayed.
      answerbox.innerHTML = "Your game is: Far Cry 6 (another shooter but you can have a bear) or It Takes Two";
    }
    if (c7score == maxscore) { // If user chooses the fourth choice the most, this outcome will be displayed.
      answerbox.innerHTML = "Your game is: All of the Souls games (if you like difficulty) or Dragon's Dogma: Dark Arisen";
    }
    if (c8score == maxscore) { // If user chooses the fourth choice the most, this outcome will be displayed.
      answerbox.innerHTML = "Your game is: Castle Crashers, Battleblox theater, The DIshwasher, and Scott Pilgrim (some of the best ever if you have not played them)";
    }
    if (c9score == maxscore) { // If user chooses the fourth choice the most, this outcome will be displayed.
      answerbox.innerHTML = "Platformer/rougelike";
    }
    // If you add more choices, you must add another response below.
  }
  
  // program the reset button
  function resetAnswer() {
    var answerbox = document.getElementById('answer');
    answerbox.innerHTML = "The game for you will display here!";
  }
