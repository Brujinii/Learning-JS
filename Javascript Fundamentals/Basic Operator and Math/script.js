/* Math
Same math operators as in python
Used on numbers only
Addition, +
Subraction, -
Multiplication, *
Division, /
Remainder, %
Exponentiation, **
*/

// String concatenation with binary plus
let s = "my" + "string"
alert( s )  // My string

// If one is a string, the other will be converted to a string as well
alert( '1' + 2 ) // "12"
alert( 2 + '1') // "21"

// Numeric conversion, unary +
// Does not do anything to numbers
// If it is not a number if will convert it into a number

alert( +true )  // 1
alert( +"" )  // 0 

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

// Standard order of operations apply
/* Full precedence table

Precedence	Name	Sign
…	…	…
17	unary plus	+
17	unary negation	-
16	exponentiation	**
15	multiplication	*
15	division	/
13	addition	+
13	subtraction	-
…	…	…
3	assignment	=
…	…	… */

// Assignment, or '=' is also an operator. Value of everything else is calculate then the value is assigned

// Modify in place is the same as in python
let n = 2;
n = n + 5;
n = n * 2;

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14

// Increment/decrement
// ++ increases variable by 1, -- decreases it by 1
let counter = 2
counter++
alert( counter ) // 3

counter = 2
counter--
alert( counter )  // 1