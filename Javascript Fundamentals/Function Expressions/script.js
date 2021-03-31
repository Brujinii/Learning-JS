// Additional syntax for creating a function called a function expression
let sayHi = function() {
    alert("Hello")
}
// Function stored in the variable sayhi, when called the variable will do contents of the function
alert(sayHi())

// Callback Functions
// Pass functions as values and using function expressions

function ask(question, yes, no){
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert( "You agreed." );
}

function showCancel() {
    alert( 'You canceled the execution.' );
}
// Usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);