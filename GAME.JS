//  OBJECT
let scoreStr = localStorage.getItem('score');
let score = JSON.parse(scoreStr) || {
        win: 0,
        Tie: 0,
        loss: 0,
    }
// creating function for computer chioce
function playGame(userChoice) {
    let computerChoice = generateComputerChoice();
    let resultMsg = getResult(userChoice, computerChoice);

    //-> for storing the data in local stroage.
    localStorage.setItem('score', JSON.stringify(score));

    //-> show the result 
    document.querySelector('#moves').innerHTML =
        `You: ${userChoice} &nbsp;&nbsp; vs &nbsp;&nbsp; Computer: ${computerChoice}`;
    document.querySelector('#result-text').innerText = resultMsg;
    document.querySelector('#totalScore').innerText =
        (`WIN = ${score.win} 
        LOSS = ${score.loss} 
        TIE = ${score.Tie}`);
}
// creating function for computer choice
function generateComputerChoice() {
    let randomNum = Math.random() * 3;
    if (randomNum > 0 && randomNum <= 1) {
        return 'Stone';
        // console.log('computer chosen 📑');
    }
    else if (randomNum > 1 && randomNum <= 2) {
        return 'Ceaser';
        // console.log('computer chosen 🥌');
    }
    else {
        return 'Paper';
        //console.log('computer chosen 🗡️');
    }
}
// creation function for result
function getResult(userChoice, computerChoice) {
    // 1. Check for TIE
    if (computerChoice === userChoice) {
        score.Tie++;
        return 'This is a TIE match 🤝';
    }
    // 2. Check Winning Conditions
    if (computerChoice === 'Stone') {
        if (userChoice === 'Paper') {
            score.win++;
            return 'You WON 🏆! (Paper covers Stone)';
        } else {
            score.loss++;
            return 'You lost! (Stone breaks Ceaser)';
        }
    }
    else if (computerChoice === 'Paper') {
        if (userChoice === 'Ceaser') {
            score.win++;
            return 'You WON 🏆! (Ceaser cuts Paper)';
        } else {
            score.loss++;
            return 'You lost! (Paper covers Stone)';
        }
    }
    else if (computerChoice === 'Ceaser') {
        if (userChoice === 'Stone') {
            score.win++;
            return 'You WON 🏆! (Stone breaks Ceaser)';
        } else {
            score.loss++;
            return 'You lost! (Ceaser cuts Paper)';
        }
    }
}