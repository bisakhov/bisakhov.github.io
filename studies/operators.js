
// OPERATORS
// Operators are basicly symbols used to make an expression. There are different types
// of operators and we are going to briefly review each one.

// 1. ASSIGNMENT OPERATORS - as the name suggests, they are used to assign value to a 
// variable or function. They are also used when we count something or adding up
// different parameters in a loop.

// Symbols like '+=', '-=', '*=', '/=' are assignment operators. 
// Example: 
var counter = 1;
counter += 1; //=> means counter = counter + 1;

// 2. ARITHMETIC OPERATORS are mathematical symbols we use to add (+), subtract (-), 
// equal (=), multiply (*) and divide (/) different numerical values for arithmetic operations. 
// % symbol is used to denote a remainder, i.e. 11%2 will be equal to 1 while 27%3 = 0.

//ex: 
console.log(5+11); //=>16
console.log(10/2); //=> 5

// 3. COMPARISON OPERATORS are used in logical statements to determine equality or difference 
// between variables or values.
// The following symbols are used: == (loosely equal), === (strictly equal), <, >, <= and >=. 
// They are mostly used in if statements, which return booleans.

console.log(5<2); //=> false
if (10 > 1) {console.log('true')}; //=> true


// 4. LOGICAL OPERATORS are special type of operators which determine logic between two different 
// variables/values. 

// !  -  means NOT, is used to denote when certain expressions are not equal to each other
// ex. 
(1 !== '1'); //=> true

// && -  means AND, is needed when both conditions must be met.
// ex. 
(1===1 && 2===2); // => true

// || -  means OR, is used when only one of the conditions must be satisfied
// ex. 
(3 === 4 || 4 === 5); //=> false

//5. UNARY OPERATORS
//typeof - returns type of variable
typeof(3); //=> number
typeof('a'); //=> string

// ! - was covered in Logical Operators
// - -> unary negative operator, used for negative values; (-3)
// ++ & -- -> denote positive and negative increments by 1 respectively;

// 6. TERNARY OPERATOR (?) - is used as a shortcut for if statement.
// It takes three operands: a condition followed by a question mark (?), 
// then an expression to execute if the condition is truthy followed by a colon (:), 
// and finally the expression to execute if the condition is falsy.

// ex. 
var age = 26;
var beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); // "Beer"


