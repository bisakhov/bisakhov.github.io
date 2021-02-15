// VARIABLES
// Variables are used to denote a certain value. 
// Instead of thinking of variables as storage boxes, they should be more viewed
// as tentacles which point to a certain value and which can be reassigned.

// 1. VAR - var is used for global and local scope variables. They can be reassigned
// and they are hoisted first (together with function keyword).
var name = 'Bucky';
console.log(name); //=> 'Bucky'

//VAR can be declared in any scope, but is function/local scoped (i.e. isn't block scoped).
//In other words, VAR 
// - can be accessed outside of for-loop and if-statements

if (2000 > 1000) {
    var total = 2000;
}
console.log(total); //==> 2000
// - can't be accessed outside of function statements:
function weekDay () {
    var day = 'monday';
    return day;
}
//console.log(day); ==> day is undefined;

// 2. LET - let is used for local block variables inside if-else and for-loop statements.
// 'let' variables can be reassigned; let and const are not hoisted.

//*Reassigning Let
let meal = 'lunch';
meal = 'dinner';
console.log(meal); //==> dinner

//*Redeclaring Let
var meal2 = 'lunch';
//let meal = 'dinner';
console.log(meal2); //==> meal already declared, earlier comment can't be executed;

//LET:
// - can't be accessed outside of for-loop and if-statements

if (2000 > 1000) {
    let total = 2000;
}
console.log(total); //==> Reference Error, total isn't defined;

// - can't be accessed outside of function statements:
function weekDay () {
    let day = 'monday';
    return day;
}
//console.log(day); ==> //day is undefined;

// 3. CONST - const is used for local block variables (like let). However, they can't be
// reassigned, i.e. once they are given a certain value, it cannot be reinstated. 

//console.log(gravField);
const gravField = 9.81;
console.log(gravField); //==> if comment line above was inserted, 
//Reference Error would stop code because gravField isn't hoisted

//The same can be said for CONST as for LET, i.e. CONST:
// - can't be accessed outside of for-loop and if-statements

if (2000 > 1000) {
    const total = 2000;
}
console.log(total); //==> Reference Error, total isn't defined;

// - can't be accessed outside of function statements:
function weekDay () {
    const day = 'monday';
    return day;
}
//console.log(day); ==> //day is undefined;
