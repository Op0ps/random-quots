const quotes = [
    ':Ldsgs;dlgjsd  ;dlsjg;sj j sdg ksd',
    'hi my name Grisha',
    'dlgjsd  ksd as kfgds jr',
];

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener('click', generateRandomQuote);

// generateRandomQuote();
