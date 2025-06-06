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

//Array Helper Method Project: Mini Linter

let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];

let unnecessaryWords = ["extremely", "literally", "actually"];

console.log(story.length);
//978 Words
