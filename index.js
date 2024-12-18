const canvas = document.getElementById("game");
const context = canvas.getContext("2d");
const fps = 100;
let screenX = canvas.clientWidth/2;
let screenY = canvas.clientHeight/2;
let roomX = 1000;
let roomY = 1000;
const playerWidth = 50;
const playerHeigth = 75;
let goingLeft = false;
let goingRight = false;
let goingUp = false;
let goingDown = false;
let playerSpeed = 3;

window.onload = function() {
    document.addEventListener("keydown", keydown);
	document.addEventListener("keyup", keyup);
    setInterval(gameloop, 1000/fps);
}

function gameloop() {
    gameLogic();
    screen();
}

function gameLogic() {
    movementLogic();
}

function movementLogic() {
    if (goingLeft) screenY -= playerSpeed;
    if (goingRight) screenY += playerSpeed;
    if (goingUp) screenY -= playerSpeed;
    if (goingDown) screenY += playerSpeed;
}

function screen() {
    context.fillStyle = "rgb(0 0 0)";
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientWidth);

    context.fillStyle = "rgb(255 0 0)";
    context.fillRect(screenY, screenY, playerWidth, playerHeigth);
}

function keydown(evt) {
    switch(evt.keyCode) {
        case 38: goingUp = true; break;
        case 37: goingLeft = true; break;
        case 40: goingDown = true; break;
        case 39: goingRight = true; break;
    }
}

function keyup(evt) {
    switch(evt.keyCode) {
        case 38: goingUp = false; break;
        case 37: goingLeft = false; break;
        case 40: goingDown = false; break;
        case 39: goingRight = false; break;
    }
}