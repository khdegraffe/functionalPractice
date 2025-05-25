//Function Exercises

function welcome() {
  alert("Hello World");
}

function multiply(x, y) {
  return x * y;
}

//Rock Paper Scissors

function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else console.log(`Error: ${userInput} is not a valid input.`);
}

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else if (num === 2) {
    return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "TIE";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer Wins!";
    } else return "User Wins!";
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer Wins!";
    } else return "User Wins!";
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer Wins!";
    } else return "User Wins!";
  }
  if (userChoice === "bomb") {
    return "User Wins!";
  }
}

function playGame() {
  let userChoice = getUserChoice("bomb");
  let computerChoice = getComputerChoice();
  console.log(`User chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}
