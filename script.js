let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".score").textContent = score;

console.log("secretNumber", secretNumber);
console.log("score", score);
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "🤔 No Number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🤑 Correct Answer";
    document.body.style.backgroundColor = "green";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🤒 Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😌 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "😈 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😌 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing";
  document.querySelector(".guess").value = "";
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
