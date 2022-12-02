function getComputerChoice(){
    let randomNum = Math.round(Math.random()*100);
    let num = (randomNum % 3) + 1;
    
    if(num == 1){
        alert("Computer chose rock!");
        return "rock";
    }
    else if(num == 2){
        alert("Computer chose paper!");
        return "paper";
    }
    else{
        alert("Computer chose scissors!");
        return "scissors";
    }
}

function getPlayerChoice(){
    let playerChoice = prompt("Choose rock, paper or scissors").toLowerCase();

    while(playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
        alert("You gave incorrect input! Try again");
        playerChoice = prompt("Choose rock, paper or scissors").toLowerCase();
    }
    return playerChoice;
}

function playRound(playerSelection, computerSelection){
    if((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")){
        if(playerSelection == "scissors")
            alert("You won, " + playerSelection + " beat "+ computerSelection + "!");
        else
            alert("You won, " + playerSelection + " beats "+ computerSelection + "!");
        
        return 1;
    }
        
    else if( playerSelection == computerSelection){
        alert("It was a draw, both of you chose the same thing!");
        return 0;
    }
    else{
        if(computerSelection == "scissors")
            alert("You lost, " + computerSelection + " beat "+ playerSelection + "!");
        else
            alert("You lost, " + computerSelection + " beats "+ playerSelection + "!");

        return -1;
    }
}

function game(){
    let computerScore = 0;
    let playerScore = 0;

    for(let i = 0; i < 5; i++){
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        
        if(roundResult == 1)
            playerScore++;
        else if(roundResult == 0){
            playerScore++;
            computerScore++;
         }
        else
            computerScore++;

        if(computerScore == 3 && playerScore != 3){
            alert("You lost " + playerScore + ":" + computerScore);
            return 1;
        }
        else if(playerScore == 3 && computerScore != 3){
            alert("You won " + playerScore + ":" + computerScore);
            return 1;
        }
        else if(playerScore == 3 && computerScore == 3){
            alert("It was a tie " + playerScore + ":" + computerScore);
            return 1;
        }
        else
            alert("The score is " + playerScore + ":" + computerScore);       
    }
    return 0;  
}
console.log(game());