/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name) {
    //we will need a for-loop to go over each index in animals array
    for (var i = 0; i < animals.length; i++) {
        if(animals[i].name === name) 
        // if name of animal matches name in one of the objects in animals array, then
        // we must return that animal object
        { return animals[i];
        } 
    }
// 'return null' command must be outside of for-loop
    return null
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace (animals, name, replacement) {
    for (var i = 0; i < animals.length; i++) { 
       if (name === animals[i].name) {
//if names match, the object containing the name must be replaced with a new object
    animals[i] = replacement;
} 
   }
   //nothing to return here
}



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
    for (var i = 0; i < animals.length; i++) {
        if (name === animals[i].name) 
//we are going to use .splice method to remove the corresponding object
// with index i and return animals
        {
            animals.splice(i, 1);
            return animals
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add (animals, animal) {
    for (var i = 0; i < animals.length; i++) {
// all three conditions must be satisfied, hence we use && operator for if statement
        if (animal.name.length > 0 && animal.species.length > 0 
    && animals[i].name !== animal.name) {
//animal object will be added to animals array by means of .push method
        animals.push(animal);
    } //else, return animals
    return animals
    }
    
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
