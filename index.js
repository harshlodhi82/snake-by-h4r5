const speed = 5
const frameRate = 10
const canvas = document.getElementById('myCanvas')
const sign = document.getElementById('sign')
const score = document.getElementById('score')
canvas.width = window.screen.width
canvas.height = window.screen.height-100
console.log(canvas.width, window.screen.width);
signStyle()
const ctx = canvas.getContext("2d")

const snake = new Snake()
const food = new Food()
document.addEventListener("keyup", keyHandeler)

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    scoreStyle (snake.total)

    snake.show()
    // snake.update()
    snake.move()
    // snake.gameOver()
    food.show()
    if (snake.isEating(food)) {
        snake.eats(food)
        canvas.style.backgroundColor = snake.tails[snake.tails.length-1].snakeColor
    }
}

function positionShifer(currSnake, prevSnake){
    switch (snake.dir) {
        case "TOP":
            currSnake.x = prevSnake.x
            currSnake.y = prevSnake.y+50
            break;
        case "DOWN":
            currSnake.x = prevSnake.x
            currSnake.y = prevSnake.y-50
            break;
        case "LEFT":
            currSnake.x = prevSnake.x-50
            currSnake.y = prevSnake.y
            break;
        case "RIGHT":
            currSnake.x = prevSnake.x+50
            currSnake.y = prevSnake.y
            break;
    }
    
}

function keyHandeler(ev) {
    switch (ev.key) {
        case "ArrowUp":
            snake.setDirection("TOP")
            break;
        case "ArrowDown":
            snake.setDirection("DOWN")
            break;
        case "ArrowRight":
            snake.setDirection("LEFT")
            break;
        case "ArrowLeft":
            snake.setDirection("RIGHT")
            break;
    }
}

function signStyle (){
    sign.style.fontSize = `${Math.floor( window.screen.width/2.5)}px`
    sign.style.color = "rgba(31, 31, 31, 0.06)"
    sign.style.position = "absolute"
}

function scoreStyle (myScore){
    score.innerText = `Score: ${myScore}`
    score.style.fontSize = `40px`
    score.style.margin = `10px`
    score.style.color = "rgba(31, 31, 31)"
    score.style.position = "absolute"
    score.style.fontFamily = "Oswald"
    score.style.color = "rgb(255, 255, 255)"
}

function loop (){
    draw()
    window.requestAnimationFrame(loop)
}

loop ()