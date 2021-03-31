// The 'or' operator is represented with two vertical line symbols ('||')
// There are four possible combinations
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

// Used to test if any of the given conditions are true
let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}
// More than two conditions are able to be compared with 'or'
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}
// "or" finds the first truthy value

// The "and" operator is represented with two and symbols ('&&')
// Only returns true if both operands are truthy. Otherwise it will return false.
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

// Not operator is represented with an exclamation point ('!')
// Returns the opposite, if true returns false, if false returns true
alert( !true ); // false
alert( !0 ); // true