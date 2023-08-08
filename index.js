function getComputerChoice() {
const choices = ['Rock', 'Paper', 'Scissors'];
const randomReturn = Math.floor(Math.random() * choices.length);
return choices[randomReturn]
}

const computerChoice = getComputerChoice();


function gameRound(playerSelection, computerSelection) {	
	playerSelection = playerSelection.toLowerCase();
	
	if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors'){
	return "Invalid Selection! Please select Rock, Paper, or Scissors.";
	} 

	if (playerSelection === computerSelection.toLowerCase()){
		return "This round is a tie.";
	}else if (
		(playerSelection === 'rock' && computerSelection === 'Scissors')||
		(playerSelection === 'paper' && computerSelection === 'Rock')||
		(playerSelection === 'scissors' && computerSelection === 'Paper')	
	) {
	return `You WIN! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`;
	}else{
	return `You LOSE! ${computerSelection} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
	}
	
	
	
	
}


function game() {
	let playerScore = 0;
	let computerScore = 0;
	
	for (let round = 1; round <=5; round++) {
		const playerSelection = prompt("Round " + round + ": Enter your choice (Rock/Paper/Scissors):");
		const computerSelection = computerChoice;
		const result = gameRound(playerSelection, computerSelection);

		if (result === `You WIN! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`) {
		playerScore++;
		}else if (result === `You LOSE! ${computerSelection} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`) {
		computerScore++;
		}else if(result === "Invalid Selection! Please select Rock, Paper, or Scissors."){
		++playerScore, ++computerScore;
		}
		console.log(result);
	}
	
	if (playerScore > computerScore){
	console.log("Congratulations! You won the game!");
	}else if(playerScore < computerScore){
	console.log("Sorry, you lost the game! Better luck next time.");
	}else{
	console.log("It is a tie. The game ended in a draw.");
	}
	
}

game();

