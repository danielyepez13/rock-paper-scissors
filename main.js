game()

function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors";
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";
    }

    if (playerSelection === "scissors" && computerSelection === "paper") return "You win! Scissors beats Paper";

    if(playerSelection === computerSelection){
        return "Draw, no one wins";
    }

    return "You lose! "+computerSelection+" beats "+playerSelection;
}



function game(){
    let finalCountResult = 0;
    let finalCountPlayer = 0;
    let finalCountCPU = 0;

    while (finalCountResult < 5) {
        let responsePlayer1 = prompt("what do you choose? Rock, paper or scissors?");
        const cpu1 = getComputerChoice();
        const result1 = playRound(responsePlayer1, cpu1);
        alert(result1)
        if (result1[4] === "w") {
            finalCountPlayer++;
            finalCountResult++;
        } else if (result1[4] === "l") {
            finalCountCPU++;
            finalCountResult++;
        } 
        if (result1[0] === "D" && finalCountResult > 0 ) {
            finalCountResult--;
        }
    }

    if(finalCountPlayer > finalCountCPU){
        console.log("You win the game!");
    } else if (finalCountPlayer < finalCountCPU){
        console.log("You lose the game!");
    }else {
        console.log("Draw! No ones win!")
    }
}