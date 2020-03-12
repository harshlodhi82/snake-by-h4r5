function Food() {
    this.foodSize = 50
    this.foodColor = "#f1f1f1"
    this.x = Math.floor(Math.random() * (canvas.width - this.foodSize * 2 + 1) + this.foodSize);
    this.y = Math.floor(Math.random() * (canvas.height - this.foodSize * 2 + 1) + this.foodSize);
    // console.log(this.x, this.y);

    this.x = 200
    this.y = 0

    this.show = () => {
        ctx.fillStyle = this.foodColor;
        ctx.fillRect(this.x, this.y, this.foodSize, this.foodSize);
    }

    this.eaten = () => {
        this.x = Math.floor(Math.random() * (canvas.width - this.foodSize * 2 + 1) + this.foodSize);
        this.y = Math.floor(Math.random() * (canvas.height - this.foodSize * 2 + 1) + this.foodSize);
    }
}