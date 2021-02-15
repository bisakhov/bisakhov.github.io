
// LOOPS - are useful when you want to run the same 
// code over and over again, each time with a different value.

// Instead of writing:
var cars= ['bmw', 'tesla', 'toyota', 'mercedes', 'lada', 'honda'];

var text = cars[0];
text += cars[1];
text += cars[2];
text += cars[3];
text += cars[4];
text += cars[5];

//We can use a loop to write:

for (var i = 0; i < cars.length; i++) {
  text += cars[i];
}

//1. FOR LOOPS - USED FOR ARRAYS ()

//       START  STOP   UPDATE
for (var i = 0; i <= 30; i++) {
    'some statement'
} //forward iteration

//START - Initial starting condition for the loop to start
//STOP - defines end value for the loop to run until
//UPDATE - increment (by how much value shoudl change after each iteration)

var array = [];
for (var i = array.length - 1; i >= 0; i--) {
    'some statement'
} //backward iteration

//FOR-LOOPS can also be used to perform certain operations on ranges, where start and stop represent different
// numerical values. An example code inside a function is illustrated below:
function range(start, end) {
  var arr = [];
  //if a>b
  if(start >= end) {
    for(var i = start; i >= end; i--) {
      arr.push(i);
    }
  } 
  //if a<b
  else if(start < end) {
      for(var i = start; i <= end; i++) {
      arr.push(i);
      }
  }
  //return command must be outside of for-loops
return arr
}


//2. FOR-IN LOOPS - USED FOR OBJECTS (loops through properties in an object)

var object = {};
for (var key in object) {
    console.log(key); // ==> KEY
    console.log(object[key]); // ==> VALUE
}

//The following example function illustrates the use of hasOwnProperty(): another use of for-in loops.
var triangle = {a: 1, b: 2, c: 3};

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

// Output:
// "obj.color = red"


//3. WHILE LOOPS
//The while statement creates a loop that executes a specified statement as long as the test condition 
//evaluates to true. The condition is evaluated before executing the statement.

//Syntax:
//while (condition)
//  statement

//Condition
// An expression evaluated before each pass through the loop. If this condition evaluates to true, 
// statement is executed. When condition evaluates to false, execution continues with the statement 
// after the while loop.

// Statement
// An optional statement that is executed as long as the condition evaluates to true. 
// To execute multiple statements within the loop, use a block statement ({ ... }) to group those statements.

// Note: Use the break statement to stop a loop before condition evaluates to true.
//ex.
var myArray = [];
var i = 5;
while (i >= 0) {
    myArray.push(i);
    i--;
} 
//code will run until value of i (which starts at 5) gets to 0. 
//Each value in the loop is added to myArray!

