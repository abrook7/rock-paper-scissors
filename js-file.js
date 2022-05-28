const rpsButtons = document.querySelectorAll("button");
const result = document.createElement("div");
const scores = document.querySelectorAll("span");
const footer = document.querySelector(".winner");
let compCount = 0;
let playerCount = 0;

rpsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    result.textContent = playRound(button.innerHTML, computerPlay());
    if (result.textContent == "You lose this round") {
      result.style.color = "red";
      ++compCount;
      scores[1].textContent = `${compCount}`;
      if (compCount == 5) {
        result.textContent = "The Computer Wins Overall!";
        compCount = 0;
        playerCount = 0;
        scores[1].textContent = `${compCount}`;
        scores[0].textContent = `${playerCount}`;
      }
    } else if (result.textContent == "You win this round") {
      result.style.color = "green";
      ++playerCount;
      scores[0].textContent = `${playerCount}`;
      if (playerCount == 5) {
        result.textContent = "The Player Wins Overall!";
        compCount = 0;
        playerCount = 0;
        scores[1].textContent = `${compCount}`;
        scores[0].textContent = `${playerCount}`;
      }
    } else result.style.color = "black";
    footer.append(result);
  });
});

function computerPlay() {
  let rand_num = Math.round(Math.random() * 100);
  if (rand_num % 3 == 0) {
    return "rock";
  } else if (rand_num % 3 == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let p_select = playerSelection.toLowerCase();
  if (p_select == computerSelection) {
    return "Draw";
  } else if (p_select == "rock") {
    return computerSelection == "paper"
      ? "You lose this round"
      : "You win this round";
  } else if (p_select == "paper") {
    return computerSelection == "scissors"
      ? "You lose this round"
      : "You win this round";
  } else if (p_select == "scissors") {
    return computerSelection == "rock"
      ? "You lose this round"
      : "You win this round";
  } else {
    return "Error";
  }
}
