//Wait for the dom to finish loading before running the game
//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function()  {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`you clicked ${gameType}`)
            }

        })
    }
    

})

/**
 * The main game "loop", called when the script is 1 and 25
 * and after the user's answer has been processed
 */
function runGame() {

    // Creates two random number between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

}

function checkAnswer() {
    
}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function ncrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}
