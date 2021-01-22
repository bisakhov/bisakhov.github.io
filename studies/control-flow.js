
//CONTROL FLOW - refers to an order in which a sequence of code is executed.

//Conditional Flow - allows us to put forks in road.

////Basic Syntax:
if ('some condition here') {
//run some code here
console.log('this code ran');
}
else if ('another condition to check') {
//run some code here if condition is true;
}
else {
//run some code here if all conditions are false;
}
/////

//ex.
for (var i = 0; i <= 100; i++) 
//numbers are between 0 & 100 and are increasing with an increment of +1 
{
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
            //if a number is divisible by both 3 & 5, print 'fizzbuzz'
        } 
     else if (i % 3 === 0) {
        console.log('fizz');
        //if a number is divisible by 3, print 'fizz'
    } else if (i % 5 === 0) {
        console.log('buzz');
        //if a number is divisible by 5, print 'buzz'
    } else {
        //show the number itself if all above conditions are not met
        console.log(i);
    }
}


// SWITCH STATEMENT - allows a program to evaluate an expression and attempt
// to match the expression's value to a case label. If a match is found, the program
// executes the associated statement.

////Basic Syntax:

// switch (expression) {
//   case label_1:
//     statements_1
//     [break;]
    
//   case label_2:
//     statements_2
//     [break;]
//     …
//   default:
//     statements_def
//     [break;]
// }

///////

//ex
var fruittype = [];
switch (fruittype) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes are $0.56 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
   console.log(`Sorry, we are out of ${fruittype}.`);
}
console.log("Is there anything else you'd like?");

