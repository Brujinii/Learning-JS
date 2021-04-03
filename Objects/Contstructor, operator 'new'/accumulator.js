function Accumulator(startingvalue) {
    this.value = startingvalue;
    this.read = function() {
        let add = Number(prompt("What number should be added to the current value?"));
        this.value = this.value + add
    };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
accumulator.read();
alert(accumulator.value);
