let container = document.querySelector("#container");
let dino = document.querySelector("#dino");
let block = document.querySelector("#block");
let road = document.querySelector("#road");
let cloud = document.querySelector("#cloud");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");
let startButton = document.querySelector("#startButton");

// Declaring variables for score and game state
let interval = null;
let playerScore = 0;
let gameStarted = false;

// Function for score
let scoreCounter = () => {
    if (gameStarted) {
        playerScore++;
        score.innerHTML = `Score <b>${playerScore}</b>`;
    }
}

// Function to start the game
function startGame() {
    gameOver.style.display = "none";
    block.classList.add("blockActive");
    road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
    cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite";

    // Reset score and start score counter
    playerScore = 0;
    gameStarted = true;
    interval = setInterval(scoreCounter, 200);
}

// Function to jump the character
function jump() {
    if (!dino.classList.contains("dinoActive")) {
        dino.classList.add("dinoActive");
        setTimeout(() => {
            dino.classList.remove("dinoActive");
        }, 500);
    }
}

// Event listener for the start button
startButton.addEventListener("click", () => {
    if (!gameStarted) {
        startGame();
    }
});

// Event listener for the space bar to start the game and jump
window.addEventListener("keydown", (e) => {
    if (e.code == "Space") {
        if (!gameStarted) {
            startGame();
        } else {
            jump();
        }
    }
});

// Jump your character (For PC)
window.addEventListener("click", jump);

// Jump your character (For Mobile)
window.addEventListener("touchstart", jump);

// 'Game Over' if 'Character' hits the 'Block'
let result = setInterval(() => {
    let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));

    if (dinoBottom <= 90 && blockLeft >= 20 && blockLeft <= 145) {
        gameOver.style.display = "block";
        block.classList.remove("blockActive");
        road.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";
        clearInterval(interval);
        gameStarted = false;
        playerScore = 0;
    }
}, 10);
