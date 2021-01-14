/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'lion'; //dot notation for adding a property
animal['name'] = 'Leo'; //bracket notation for adding a property
animal.noises = []; //empty array

console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
noises[0] = 'arrr'; //assigning first element of noises array

function addNoise(value) { //using addNoise function to add a noise to the end of noises
    noises.push(value);
}
addNoise('grrr'); 

function addNoise2(value) { //using addNoise2 function to add a noise to the beginning of noises
    noises.unshift(value);
}
addNoise2('roar');

noises['push']('mmrrr'); //bracket notation for array.push method

console.log(noises.length); //results to the console
console.log(noises[noises.length - 1])
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises; //bracket notation to add noises property into animal object
animal.noises.push('ahhh'); //.push method
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 
 * a) Dot Notation - object.key
 * b) Bracket Notation - object['key']
 
 * 2. What are the different ways of accessing elements on arrays?
 * 
 * 
 * a) Bracket Notation - array[index]
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
animals.push(animal); //pushing animal object into animals array

var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };

animals.push(duck);

// creating two additional animals
var dog = {species: 'dog', name: 'Buddy', noises: ['aff-aff', 'blshh']};
animals.push(dog); 

var cat = {species: 'cat', name: 'Blue', noises: ['myau', 'mrrr']};
animals.push(cat);

console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Array data structure  will work the best as it provides an easy access
// to data it holds through for-loop statements

var friends = [];

function getRandom (animals) {
    return Math.floor(Math.random() * animals.length);
    // we are using Math.floor syntax to round up the product 
    //of any number (between 0 and 1) and animals.length(4)
}

var i = getRandom(animals); //var i (which stands for index) 
//is assigned to getRandom function

var randomAnimal = animals[i].name; //creating a new variable called
//randomAnimal which will hold a value of name of a random animal

friends.push(randomAnimal); //by using .push method, we will add var
//randomAnimal into friends array


console.log(friends);
animals[2]['friends'] = friends; //3rd element in animals will have a property friends
// which will contain the same value as var friends



 




/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}