//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function objectValues(object) {
//return object values in array
return Object.values(object);
} 


//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(' ');
//return object keys in a string
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var obj = Object.values(object);
    for (var i = 0; i < obj.length; i++) {
        //first turn object values into an array
//then, we need to remove objects and booleans from our string
      if (typeof obj[i] === 'boolean' || typeof obj[i] === 'object') { 
        obj.splice(i, 1);
        return obj.join(' ')
      }
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
// we need to make sure to account for different data types
    if (Array.isArray(collection)) {
        return "array";
    }
    if (collection === null) {
        return null;
    }
    if (collection instanceof Date) {
        return Date;
    }
    if (typeof collection === 'object') {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
 //only first character is capitalized and the rest of the string is concatenated
 //.slice(1) removes the first element at 0 index
   return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
//split string into array Arr
   var Arr = string.split(' ');
for (var i = 0; i < Arr.length; i++) {
    //every element of Arr will have first letter to be a capital letter
  Arr[i] = Arr[i][0].toUpperCase() + Arr[i].slice(1);
}
// turn final array Arr into string
return Arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//object.name must start with a capital letter in our return statement
return 'Welcome ' + object.name[0].toUpperCase() + object.name.slice(1) + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //two variables assigned to account for capital letter in each
var a = object.name[0].toUpperCase() + object.name.slice(1);
var b = object.species[0].toUpperCase() + object.species.slice(1);
return a + ' is a ' + b
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
if (Array.isArray(object.noises) && object.noises.length >= 1
&& typeof object === 'object') {
  return object.noises.join(' ');
} else if (Array.isArray(object.noises)) {
  console.log('there are no noises') }
 else if (object.noises === null) {
  console.log('there are no noises')
} else if (object.noises instanceof Date) {
  console.log('there are no noises')
}
else if (typeof object === 'object') {
  console.log('there are no noises')
}
else {console.log('there are no noises')}
}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
// string must first be turned into an array
var arr = string.split(' ');
for (var i = 0; i < arr.length; i++) {
  if (word === arr[i]) {
    return true
  }
  
}
//return false statement must be out of the for-loop
return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//name must be added to friends array in an object
object.friends.push(name);
return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
for (var i = 0; i < Object.values(object).length; i++) {
    if (name === object.friends[i] 
 && object.friends.length >= 1 
 && Array.isArray(object.friends) === true) {
        return true
    }
}
return false
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
  var notFriends = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].name !== name 
    && !array[i].friends.includes(name)) {
      notFriends.push(array[i].name);
    }
  }
  return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}