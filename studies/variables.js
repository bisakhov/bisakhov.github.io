/* VARIABLES
Variables are used to denote a certain value. 
Instead of thinking of variables as storage boxes, they should be more viewed
as tentacles they point to a certain value and can be reassigned.

VAR - var is used for global and local scope variables. They can be reassigned
and they are hoisted first (together with function keyword)

var name = 'Bucky';
console.log(name); => 'Bucky'

LET - let is used for local block variables inside if-else and for-loop statements.
'let' variables can be reassigned; let and const are hoisted after var.

let meal = 'lunch'

CONST - const is used for local block variables (like let). However, they can't be
reassigned, i.e. once they are given a certain value, it cannot be reinstated. 

const gravField = 9.81;

*/