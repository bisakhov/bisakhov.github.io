////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(num1, num2, step) {
var arr = [];
if (step === undefined) {
  if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      arr.push(i);
    } 
  }  else if (num1 > num2) {
      for (let i = num1; i >= num2; i--) {
        arr.push(i);
      }
    }
    else {return []}
  }
  else if (step > 0 && num1 < num2) {
      for (let i = num1; i <= num2; i+=step) {
        arr.push(i);
      }
    }
  else if (step < 0 && num1 > num2) {
      for (let i = num1; i >= num2; i+=step) {
        arr.push(i);
      }
    } else {
      return [];
    }

  return arr;

}


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(range){
 let sum = 0;
 for(let number of range){
 sum += number;
 }
 return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
let newArr = [];
if (arr.length > 0) {
for (let i = 0; i < arr.length; i++) {
  newArr.unshift(arr[i]);
}
//return newArr;
}
else {return []}
return newArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array){
  let oldArray = array;
  let oldArrayCount = oldArray.length;
  
  for( var i = 0; i < array.length/2; i++){
 	array.push(array[oldArrayCount-i-1]);
  } 
  for ( var j= 0; j < oldArrayCount; j++ ){
  	array.shift(array[j]);
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray (list){
  var listArray = [];
  //node begins as list; while node is not undefined; node becomes node.rest
  //this moves from the outermost list to the innermost sublist
  for (var node = list; node; node = node.rest){
  	listArray.push(node.value);
  }
  return listArray;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend (elem, list){
  var newList = {value: elem, rest: list};
  return newList;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth (list, num){
	var listArray = listToArray(list);
    return listArray[num];
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(value1, value2) {
    if (value1 === value2) return true;
 
    if (value1 == null || typeof value1 != "object" ||
        value2 == null || typeof value2 != "object") return false;
  
    let keysA = Object.keys(value1), keysB = Object.keys(value2);
  
    if (keysA.length != keysB.length) return false;
 
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(value1[key], value2[key])) return false;
    }
    return true;
  }

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
