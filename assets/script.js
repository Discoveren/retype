// Array of quotes
const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
  "The way to get started is to quit talking and begin doing. -Walt Disney",
  "Your time is limited, so don't waste it living someone else's life. -Steve Jobs",
  "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
  "Believe you can and you're halfway there. -Theodore Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. -Confucius",
  "The only way to do great work is to love what you do. -Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston Churchill",
  "Happiness is not something ready-made. It comes from your own actions. -Dalai Lama",
  "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
];

// Function to get a random quote
function getRandomQuote() {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  return quotes[quoteIndex];
}

// Display a random quote on the page
const quoteDisplayElement = document.querySelector(".text-display");
const quoteInputElement = document.querySelector(".input-field");
const feedbackElement = document.querySelector(".feedback");
const startButton = document.querySelector(".start-btn");
const timerElement = document.querySelector(".timer");

//add the timer variable
let timeRemaining = 20;
let timeInterval;
let isTimerStarted = false;

// Function to start the game
function startGame() {
  const selectedQuote = getRandomQuote();
  quoteDisplayElement.textContent = selectedQuote;
  quoteInputElement.disabled = false;
  quoteInputElement.focus();
  startButton.style.display = "none";
  startTimer();
  isTimerStarted = true;
}

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay(); // Call the function to update the timer display

    if (timeRemaining === 0) {
      clearInterval(timerInterval);
      endGame(); // Call a function to handle the game ending
    }
  }, 1000); // Update every 1 second (1000 milliseconds)
}

// Function to update the timer display
function updateTimerDisplay() {
  if (isTimerStarted) {
    timerElement.textContent = timeRemaining;
  }
}
function displayNextQuote() {
  const selectedQuote = getRandomQuote();
  quoteDisplayElement.textContent = selectedQuote;
  quoteInputElement.value = "";
  feedbackElement.innerHTML = "";
}

// Add event listener to capture user input

quoteInputElement.addEventListener("input", handleInput);
// Function to handle user input
function handleInput() {
  const userInput = quoteInputElement.value;
  compareInput(userInput);
}

// Function to compare user input with the generated quote

function compareInput(userInput) {
  const quote = quoteDisplayElement.textContent;
  let feedbackHTML = "";

  for (let i = 0; i < quote.length; i++) {
    if (i < userInput.length) {
      if (userInput[i] === quote[i]) {
        feedbackHTML += `<span class = "correct" >${quote[i]}</span>`;
      } else {
        feedbackHTML += `<span class = "incorrect" >${quote[i]}</span>`;
      }
    }
  }

  feedbackElement.innerHTML = feedbackHTML;
  // Check if the user has completed the quote
  if (userInput === quote) {
    {
      alert("Congratulations! You typed the quote correctly.");
    }
    displayNextQuote();
  }
}

function endGame() {
  console.log("Game ended");
  alert("Time's up! Game over.");
  // Optionally, you can reset the game or perform other actions
  displayNextQuote();
  timeRemaining.value = 20;
}

// Add event listener to the start button
startButton.addEventListener("click", startGame);
