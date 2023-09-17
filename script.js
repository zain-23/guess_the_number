// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉Correct Answer!";
// document.querySelector(".number").textContent = 20;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 10;

// function hanfleDaa(){

// }
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".score").textContent = score;
document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log("guess", guess);
  if (!guess) {
    document.querySelector(".message").textContent = "🤔 No Number";
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
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🤑 Correct Answer";
    document.body.style.backgroundColor = "green";
  }
});
