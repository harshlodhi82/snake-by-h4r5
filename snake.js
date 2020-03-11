function Snake() {
    this.snakeSize = 50;
    this.snakeColor = "#FF0000"
    this.x = canvas.width / 2
    this.y = canvas.height / 2
    this.speed = speed;
    this.dir = "LEFT"
    this.tails = [this]
    this.total = 1

    this.show = () => {
        ctx.fillStyle = this.snakeColor;
        ctx.fillRect(this.x, this.y, this.snakeSize, this.snakeSize);

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

    this.eats =  (food)=>{
        console.log("Food Eating");
        food.eaten();
        this.total+=1
        let snake = new Snake()
        snake.snakeColor = this.getRandomColor()
        this.tails.push(snake)
        // console.log(this.tails);
        
    }

    this.isEating = (food)=>{
        let distX = this.x - food.x
        let distY = this.y - food.y

        if(distX < 0) distX*=-1
        if(distY < 0) distY*=-1

        if(distX < this.snakeSize-2 && distY< this.snakeSize-2){
            return true
        }
        
        return false
    }

    this.getRandomColor = ()=>{
        let letter = "0123456789abcdef"
        let col = '#'
        for (let i = 0; i < 6; i++) {
            let ranNum = Math.floor(Math.random() * (15 - 1 + 1) + 1);
            col+=letter[ranNum]
        }
        console.log(col);
        
        return col
    }

    
}