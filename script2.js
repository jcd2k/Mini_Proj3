// From instructor during class

// prompt user for r, p, or s 

var playGame = function() {
    // Ask user for their choice
    var userChoice = window.prompt("Enter R, P, or S.");

    // if user pressed cancel, end function
    if (!userChoice) {
        return;
    }

    // convert to uppsercase to make comparisons easier
    userChoice = userChoice.toUpperCase();

    // get random index from array of options
    var index = Math.floor(Math.random()) * options.length);
    var computerChoice = options[index];

    window.alert("The computer chose " + computerChoice);

    // if choices are the same it's a tie
    if (userChoice === computerChoice) {
        ties++;
        window.alert("It's a tie!");

    // check every user condition
        
        

    }

    // Check Every win condition for the player


}