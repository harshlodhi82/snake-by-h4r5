function Snake() {
    this.snakeSize = 50;
    this.snakeColor = "#FF0000"
    this.x = canvas.width / 2
    this.y = canvas.height / 2
    this.speed = speed;
    this.dir = "LEFT"
    this.tails = [this]
    this.total = 1

    this.x = 0
    this.y = 0

    this.show = () => {
        // console.log("tail 1",this.tails)

        for (let i = 0; i < this.tails.length; i++) {
            if (this.tails[i + 1]) {
                // this.tails[i + 1].x = this.tails[i].x
                // this.tails[i + 1].y = this.tails[i].y
                this.positionShifer(this.tails[i + 1], this.tails[i])
            }
        }

        for (let i = 0; i < this.tails.length; i++) {
            ctx.fillStyle = this.tails[i].snakeColor;
            ctx.fillRect(this.tails[i].x, this.tails[i].y, this.snakeSize, this.snakeSize);
        }
    }

    this.update = () => {
        // console.log(this.tails);

        for (let i = 0; i < this.tails.length; i++) {
            this.moveTmp(this.tails[i])
        }
        // console.log(this.tails)
    }

    this.move = () => {
        switch (this.dir) {
            case "TOP":
                if (this.y > 0) this.y -= this.speed
                break;
            case "DOWN":
                if (this.y + this.snakeSize < canvas.height) this.y += this.speed
                break;
            case "LEFT":
                if (this.x + this.snakeSize < canvas.width) this.x += this.speed
                break;
            case "RIGHT":
                if (this.x > 0) this.x -= this.speed
                break;
        }
    }

    this.moveTmp = (_snake) => {
        // console.log("move", this.x, this.y, this.dir, this    );
        // console.log(_snake);

        switch (_snake.dir) {
            case "TOP":
                if (_snake.y > 0) _snake.y -= _snake.speed
                break;
            case "DOWN":
                if (_snake.y + _snake.snakeSize < canvas.height) _snake.y += _snake.speed
                break;
            case "LEFT":
                if (_snake.x + _snake.snakeSize < canvas.width) _snake.x += _snake.speed
                break;
            case "RIGHT":
                if (_snake.x > 0) _snake.x -= _snake.speed
                break;
        }
    }

    this.isOpposit = (currenDir, newDir) => {
        const opp1 = ["TOP", "DOWN"]
        const opp2 = ["LEFT", "RIGHT"]
        if (opp1.indexOf(currenDir) !== -1 && opp1.indexOf(newDir) !== -1) return true
        if (opp2.indexOf(currenDir) !== -1 && opp2.indexOf(newDir) !== -1) return true
        return false
    }

    this.setDirection = (newDir) => {
        if (!this.isOpposit(this.dir, newDir)) {
            this.dir = newDir
        }
    }

    this.eats = (food) => {
        console.log("Food Eating");
        food.eaten();
        this.total += 1
        let snake = new Snake()
        // console.log(this.tails);

        snake.snakeColor = this.getRandomColor()
        // console.log();

        this.tails.push(snake)
        // console.log(this.tails);

    }

    this.isEating = (food) => {
        let distX = this.x - food.x
        let distY = this.y - food.y

        if (distX < 0) distX *= -1
        if (distY < 0) distY *= -1

        if (distX < this.snakeSize && distY < this.snakeSize) {
            return true
        }

        return false
    }

    this.getRandomColor = () => {
        let letter = "0123456789abcdef"
        let col = '#'
        for (let i = 0; i < 6; i++) {
            let ranNum = Math.floor(Math.random() * (15) + 1);
            col += letter[ranNum]
        }
        // console.log(col);

        return col
    }


    this.positionShifer = (currSnake, prevSnake) => {
        switch (snake.dir) {
            case "TOP":
                currSnake.x = prevSnake.x
                currSnake.y = prevSnake.y + 50
                break;
            case "DOWN":
                currSnake.x = prevSnake.x
                currSnake.y = prevSnake.y - 50
                break;
            case "LEFT":
                currSnake.x = prevSnake.x - 50
                currSnake.y = prevSnake.y
                break;
            case "RIGHT":
                currSnake.x = prevSnake.x + 50
                currSnake.y = prevSnake.y
                break;
        }

    }

    this.gameOver = ()=>{
        // console.log(this.y + this.snakeSize);
        
        if((this.y + this.snakeSize >= canvas.height)){
            alert("Game Over")
        }
    }

}