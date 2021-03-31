// Conversions
// String conversion

// Any words are simply become a string when passed to the string function
let value = true
alert(typeof value)

value = String(value)
alert(typeof value)

// Numeric conversion
// Conversion to numbers happens automatically in numeric functions and expressions
alert('6'/'2')

// Use Number(value) to explicitly convert a value to a number

let str = '123'
alert(typeof str)  // String

let num = Number(str)  // Becomes number 123

alert(typeof num)  // Number

// If the valeu is unable to be converted to a number the value of it becomes NaN, or the conversion failed
/* Rules of conversion:
undefined > NaN
null > 0
true and false > 1 and 0 */