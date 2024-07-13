function checkAnswer() {
  // Identify the correct answer
  const correctAnswer = "4";

  // Retrieve the user's answer
  const userAnswer = document.querySelector('input[name="quiz"]:checked');

  // Check if an answer was selected
  if (userAnswer) {
    // Compare the user's answer with the correct answer
    if (userAnswer.value === correctAnswer) {
      document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
      document.getElementById("feedback").textContent =
        "That's incorrect. Try again!";
    }
  } else {
    document.getElementById("feedback").textContent =
      "Please select an answer.";
  }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
