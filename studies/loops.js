
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


//2. FOR-IN LOOPS - USED FOR OBJECTS (loops through properties in an object)
var object = {};
for (var key in object) {
    console.log(key); // ==> KEY
    console.log(object[key]); // ==> VALUE
}

//3. WHILE LOOPS
//The while loop loops through a block of code as long as a specified condition is true.

//ex.
var myArray = [];
var i = 5;
while (i >= 0) {
    myArray.push(i);
    i--;
} 
//code will run until value of i (which starts at 5) gets to 0. 
//Each value in the loop is added to myArray!

