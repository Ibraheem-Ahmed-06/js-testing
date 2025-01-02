
// Globals
let score = 0,
    timeLeft = 30,
    gameInterval;

// Colosr to be used and total deck of cards
// Card deck should have 4 * 6 = 24 items
let colors = "red,green,blue,orange,purple,pink".split(",");
let cards;

// To be used to track cards that are selected
let selectedCards = [];

// Credit to https://stackoverflow.com/a/48102850
const duplicateArray = (arr, times) =>
    Array(times)
        .fill([...arr])
        .reduce((a, b) => a.concat(b));

// DOM elements
const startBtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

// Function to create a single card element
function createCardElement (color) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.color = color;
    card.textContent = "?";

    return card;
}

// Function to populate the game-container element
function generateCards (deck) {
    gameContainer.innerHTML = "";
    deck = shuffleArray(deck);
    for (const color of deck) {
        gameContainer.appendChild(
            createCardElement(color)
        );
    }
}

// Shuffles an array with Fisher-Yates
function shuffleArray (arr) {
    for (let i = arr.length - 1; i > 0; i --) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

// Handles when a card is clicked
function handleCardClick (event) {
    if (selectedCards.length === 2) {
        return;
    }

    const card = event.target;
    if (!card.classList.contains("card") || card.classList.contains("matched")) {
        return;
    }

    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);

    if (selectedCards.length === 2) {
        setTimeout(() => handleMatch(...selectedCards), 500);
    }
}

// Checks if two given cards match
function handleMatch (card1, card2) {
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add("matched");
        card2.classList.add("matched");
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        card1.textContent = "?";
        card2.textContent = "?";
        card1.style.backgroundColor = "#ddd";
        card2.style.backgroundColor = "#ddd";
    }

    selectedCards = [];
}

// Function to start the game
function startGame () {
    // Resets globals
    timeLeft = 30;
    startBtn.disabled = true;
    score = 0;
    scoreElement.textContent = `Score: ${score}`;

    // Creates cards from scratch
    cards = duplicateArray(colors, 4);
    selectedCards = [];
    generateCards(cards);

    // Handles game timer
    handleGameTimer();

    // Handles clicks
    gameContainer.addEventListener('click', handleCardClick);
}

// Function to handle the game timer
function handleGameTimer () {
    timerElement.textContent = `Time left: ${timeLeft} seconds`;
    gameInterval = setInterval(() => {
        timeLeft --;
        timerElement.textContent = `Time left: ${timeLeft} seconds`;
        
        if (timeLeft <= 0) {
            clearInterval(gameInterval);
            timeLeft = 30;
            alert("Game Over!");
            startBtn.disabled = false;
        }
    }, 1000)
}

// Event listener for startBtn
startBtn.addEventListener("click", startGame);

