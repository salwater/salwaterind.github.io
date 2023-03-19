//board
var blockzise = 25;
var rows = 20;
var cols = 20;
var board;
var context;

//kepala ular
var snakeX = blockzise * 5;
var snakeY = blockzise * 5;

var velocityX = 0;
var velocityY = 0;

//makanan
var foodX;
var foodY; 

window.onload = function () {
    board = document.getElementById("board");
    board.height = rows * blockzise;
    board.width = cols * blockzise;
    context = board.getContext("2d"); //digunakan untuk menggambar board

    PlaceFood();
    document.addEventListener("keyup", changeDirection);
    // update();
    setInterval(update, 1000/10); //100 milliseconds
}

function update() {
    context.fillStyle="black"
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle="lime"
    snakeX += velocityX * blockzise;
    snakeY += velocityY * blockzise;
    context.fillRect(snakeX, snakeY, blockzise, blockzise);

    context.fillStyle="red"
    context.fillRect(foodX, foodY, blockzise, blockzise)
}

function changeDirection() {
    if (e.code == "ArrowUp") {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown") {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft") {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight") {
        velocityX = 1;
        velocityY = 0;
    }
}

function PlaceFood() {
    //0-1) *cols => (0-19.9999) -> * 25
    foodX = Math.floor(Math.random() * cols) * blockzise;
    foodY = Math.floor(Math.random() * rows) * blockzise;
}