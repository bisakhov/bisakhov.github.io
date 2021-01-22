
//1. Number - is an algebraic numerical value;

//ex. 
var age = 26;
typeof(3); //==> number;

//2. String - simple values in quotes ('')

//ex. 
var name = "bucky"
var month = 'January';

//3. Boolean - true/false statements

//ex.
console.log(3 > 1); // ==> true
var weatherIsRainy = false;

//4. Array - list of values (in square brackets)

//ex. 
var seasons = ['winter', 'spring', 'summer', 'fall'];
var grades = [80, 95, 76, 57, 87];

//5. Object - collection of pairs of keys and values

//ex. 
var animal = {name: 'Buddy', 
species: 'dog', 
age: 4, 
isNoisy: true};

// 6. Function - reusable block of code that accepts inputs, processes those inputs,
// and returns a new data value. 
// Function doesn't have to have parameters or return statement (they are optional), but certainly
// must have a name and a function body where code runs. To call the function, type the function name 
// with its parameters (if given).

//ex. 
function multBy2(value) {
    return value*2
}
multBy2(4);

//ex.
function print () {
    console.log('Hi!')
}
print();

//7. undefined - mostly comes up when we are trying to get a value for an 
//undeclared/unassigned variable.

//ex.
var me = 'Bucky';
var I = 'student';
console.log(I); // ==> if var I wasn't declared in the line above, it would be undefined

// 8.null - epresents a reference that points, generally intentionally, to a nonexistent or invalid
// object or address (source: MDN). Even though it points to something non existing, nothing, 
// it’s a global object (and one of JavaScript’s primitive values). 

//ex. 
null === false;// ==> false
null === true; //==> false
console.log(null + 5); //==> 5

// 9. NaN stands for Not-a-Number;
// JavaScript returns this value when number we’re supposed to get isn’t a number.

//ex. 
console.log('orange' - 7);

// 10. Infinity and -Infinity - represent positive infinity and negative infinity. They are properties
// of global object. Infinity is larger than any number while -Infinity is smaller than any number.

//ex.
console.log(1 / 0); //==> Infinity

console.log(Number.MAX_VALUE);
// expected output: 1.7976931348623157e+308

console.log(-Number.MAX_VALUE);
// expected output: -1.7976931348623157e+308

// 11. Primitive data types consist of single simple values (number, string, boolean, null);
// Complex data types are collections of simple values (array, object)

// 12. COPY BY VALUE
// Whenever a variable that points to a primitive data type is referenced,
// a copy of the value that the variable is pointing to is created.

// ex.
var x = 10;
var y = 'abc';
var a = x;
var b = y;
console.log(x, y, a, b); // -> 10, 'abc', 10, 'abc'

// Both a and x now contain 10. Both b and y now contain 'abc'. 
// They’re separate, as the values themselves were copied.

// COPY BY REFERENCE
// Variables that are assigned a non-primitive value are given a reference
// to that value. That reference points to the object’s location in memory.
// The variables don’t actually contain the value.

// ex.
var reference = [1];
var refCopy = reference;

// - Each variable now contains a reference to the same array.
// That means that if we alter reference, refCopy will see those changes:
reference.push(2);
console.log(reference, refCopy); // -> [1, 2], [1, 2]

