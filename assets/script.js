//logic of the game//
//Add the constants
// all of our quotes
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
const textDiplay = document.querySelector(".text-display");
const inputField = document.querySelector(".input-field");
const scoreDiplay = document.querySelector(".score-display");

// function that selects a random quote from the array/

function getRandomQuote() {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  return quotes[quoteIndex];

  // to display the random quote selected to the page/
}
const selectedQuote = getRandomQuote();
document.querySelector(".score-display").textContent = selectedQuote;
// textDiplay.textContent = selectedQuote;
