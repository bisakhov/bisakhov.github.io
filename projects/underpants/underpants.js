// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function (value) {
    //return value unchanged
    return value;
};




/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function (value) {
    if (Array.isArray(value)) {
        return 'array'
    }
    if (value === null) {
        return 'null'
    }
    if (value instanceof Date) {
        return Date
    }
    if (typeof value === 'object') {
        return 'object'
    }
    if (typeof value === 'number') {
        return 'number'
    }
    if(typeof value === 'string') {
        return 'string'
    }
    if (typeof value === 'boolean') {
        return 'boolean'
    }
    if (typeof value === 'undefined') {
        return 'undefined'
    }
    if (typeof value === 'function') {
        return 'function'
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function (array, number) {
    if (!Array.isArray(array) || number < 0) {
        return []
        //[] not in quotes, didn't work with quotes
    }
    else if (!Number(number) 
    || isNaN(number))
    //!Number(number) stands for not given
    //isNaN stands for is not a number!!!
    {
        return array[0]
    }
    else if (number >= array.length) {
         
            return array;
        }
    else {
        var newArr = [];
        for (let i = 0; i < number; i++) {
            newArr.push(array[i])
        }
        return newArr;
    }
    }



/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function (array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    } 
    else if (!Number(number) 
    || isNaN(number)) {
        return array[array.length - 1];
    } 
    else if (number >= array.length) {
        return array
    }
    else {
        var newArr = [];
        for (var i = array.length - 1; i >= array.length - number; i--) {
            newArr.unshift(array[i])
            //.unshift method needed because newArr must be displayed in the same order
            //as array
        }
        return newArr
    }
}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function (array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i}
        }
        return -1;
    }



/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

// _.contains = function (array, value) {
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] === value) {
//             return true
//         }
//     }
//     return false
// }

_.contains = function(array, value){
    let result = false;
    for (var i = 0; i < array.length; i++) {
        result = array[i] === value ? true : result;
        //result is equal to if statement of array[i] === value
    }
    return result;
};




/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function (collection, func) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            func(collection[i], i, collection)
        }
        
    }
    else if (typeof collection === 'object') {
        for (var key in collection) {
        func(collection[key], key, collection)
        //DON'T FORGET IMPORTANCE OF BRACKET NOTATION VS DOT NOTATION
    }
}
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

// _.indexOf = function (array, value) {
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] === value) {
//             return i}
//         }
//         return -1;
//     }
    
_.unique = function (array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        //if .indexOf function doesn't match array[i] === value (i.e. === -1), then
        //array[i] must be pushed into newArr
       if (_.indexOf(newArr, array[i]) === -1) {
           newArr.push(array[i])
       }
       }
    return newArr;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function (array, func) {
    let newArr = [];
    //array[i] = e ==> element
//.each has two parameters, one of which is an unknown fnction (we don't know what it does)
// if that function gets result of true for array, insert each of such an element into newArr
    _.each(array, function (e, i, array) {
// we don't use for-loop here because _.each already has a for-loop inside it
        let result = func (e, i, array);
        if (result === true) {
            newArr.push(e);
        }
    }) 
    return newArr;
}




// _.each = function (collection, func) {
//     if (Array.isArray(collection)) {
//         for (var i = 0; i < collection.length; i++) {
//             func(collection[i], i, collection)
//         }
        
//     }
//     else if (typeof collection === 'object') {
//         for (var key in collection) {
//         func(collection[key], key, collection)
//         //DON'T FORGET IMPORTANCE OF BRACKET NOTATION VS DOT NOTATION
//     }
// }
// }



/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function (array, func) {
    let newArr = [];
    _.each(array, function (e, i, array) {
        let result = func (e, i, array);
        if (result === false) {
            newArr.push(e);
        }
    })
    return newArr;
}

    

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function (array, func) {
    let truthy = [];
    let falsy = [];
    for (let i = 0; i < array.length; i++) {
    if (func (array[i], i, array) === true) {
        truthy.push(array[i]);
    } else if (func (array[i], i, array) === false) {
        falsy.push(array[i]);
    }
}
return [truthy, falsy];
}

//BY USING _.EACH METHOD
// _.partition = function (array, func) {
//     var truthy = [];
//     var falsy = [];
    
//     _.each(array, function(val, i, arr) {
//         if (func(val)) {
//             truthy.push(val);
//         } else {
//             falsy.push(val);
//         }
//     });
//     return [truthy, falsy];
// }


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function (collection, func) {
    var newArr = [];
    //.each already sorts out if it is an array or object, we can use general terms for both
    //element&value = e, index&key = i 
    _.each(collection, function (e, i, collection) {
        //whatever func makes with collection, it is transferred into newArr
        newArr.push(func(e, i, collection));
    })
    return newArr
}

//TAYLOR'S WAY OF SOLVING
// _.map = function(collection, func) {
//     var arr = [];
    
//     _.each(collection, function(element, i, a) {
//         arr.push(func(element, i, a))
//     })
//     return arr;
// }

// _.pluck = function (array, prop) {
    
// }

_.pluck = function (array, key) {
  return array.map(function(obj) {
    return obj[key];
  });
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.every = function(collection, func){
    let result = true;
    //element = e, index = i;
    _.each(collection, function(e, i, collection){
        if(typeof func === 'function' || func !== undefined){
            if(func(e, i, collection) === false) {
                result = false;
            }
        }   else {
                if(e === null || e === false || e === 0 || e === ''){
                result = false;
                }
            }
    });
    return result;
};

// _.every = function (collection, func) {
    
//     _.each(collection, function (e, i, collection) {
//         if (typeof func === 'undefined') {
//             if (e === null || e === 0 || 
//             e === false || e === '') {return false 
//         } else {return true}}
//         else {
//         let result = func (e, i, collection);
//         if (result === true) {
//             return true
//         } else {
//             return false
//         }
//     }
// })
// }

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

// _.some = function(collection, func){
//     let result = true;
//     //element = e, index = i;
//     _.each(collection, function(e, i, collection){
//         if(typeof func === 'function' || func !== undefined){
//             if(func(e, i, collection) === true) {
//                 result = true;
//             }
//         }   else {
//                 if(e === null || e === false || e === 0 || e === ''){
//                 result = false;
//                 }
//             }
//     });
//     return result;
// };

_.some = function(collection,func) {
   let result = false;
    _.each(collection, function(element, index, collection){
        if(typeof func === 'function' || func !== undefined){
            if(func(element, index, collection) === true){
                result = true;
            }
        }  else {
                if(element === true){
                result = true;//<--and also to this
                }
            }
    });
    return result;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

// _.each = function (collection, func) {
//     if (Array.isArray(collection)) {
//         for (var i = 0; i < collection.length; i++) {
//             func(collection[i], i, collection)
//         }
        
//     }
//     else if (typeof collection === 'object') {
//         for (var key in collection) {
//         func(collection[key], key, collection)
//         //DON'T FORGET IMPORTANCE OF BRACKET NOTATION VS DOT NOTATION
//     }
// }
// }

_.reduce = function (array, func, seed) {
    //check if seed is undefined
    if (seed === undefined) {
        seed = array[0]
        //make seed first value in the array
        
        //loop through array, starting at index 1, call the func function on seed, element, and 
    _.each(array, function(element, i, arr) {
        if (i !== 0) {
            seed = func(seed, element, i)
        }
    });
    return seed
    } else {
        _.each(array, function(element, i, arr) {
            seed = func(seed, element, i)
        });
        return seed;
    }
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(object, ...args){ // parameters are an object and also other objects
    Object.assign(object, ...args); // assign the properties from any of the args objects to the object
    return object; //return the object
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
