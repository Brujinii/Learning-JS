let calculator = {
    read() {
        this.a = Number(prompt("What should the value of the first number be?"));
        this.b = Number(prompt("What should the value of the second number be?"));
    },
    sum() {
        this.sum = this.a + this.b
        alert(this.sum)
    },
    mul() {
        this.mul = this.a * this.b
        alert(this.mul)
    }
};

calculator.read();
calculator.sum();
calculator.mul();
