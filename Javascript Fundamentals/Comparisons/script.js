alert( 'Z' > 'A' )  // true
alert( 'Glow' > 'Glee' ) // true
alert( 'Bee' > 'Be' ) // true

/* Algorithm to compare strings
Compare the first character of both strings.
If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
Repeat until the end of either string.
If both strings end at the same length, then they are equal. Otherwise, the longer string is greater. */

// When comparing values of different types, Js converts the values to numbers
alert( '2' > 1 )  // true
alert( '01' == 1 )  // true

// For boolean values true becomes 1 and false becomes 0

// Strict equality
// Cannot differentiate 0 from false
alert( 0 == false )

//  Use === to check equality without any conversions

alert( 0 === false )  // False because the types are different