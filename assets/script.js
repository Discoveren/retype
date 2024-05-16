//logic of the game//
const timerElement = document.getElementById("timer");
//Add the constants
// all of our quotes
const quotes = [
  "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
  "There is nothing more deceptive than an obvious fact.",
  "I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.",
  "I never make exceptions. An exception disproves the rule.",
  "What one man can invent another can discover.",
  "Nothing clears up a case so much as stating it to another person.",
  "Education never ends, Watson. It is a series of lessons, with the greatest for the last.",
];

document.getElementById("start").addEventListener("click", () => {
  // Your existing code here...

  // Start the timer
  startTime = Date.now();

  // Update timer every second
  timerInterval = setInterval(updateTimer, 1000);
});

function updateTimer() {
  const currentTime = Date.now();
  const elapsedTime = (currentTime - startTime) / 1000; // Convert milliseconds to seconds

  // Display the elapsed time in seconds
  timerElement.innerText = `${Math.floor(elapsedTime)} seconds`;
}
