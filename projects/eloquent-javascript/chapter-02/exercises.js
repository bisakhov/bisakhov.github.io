
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  var tag = '';
  for (var i = 0; i < num; i++) {
      //concatenation with addition of strings after each increment iteration
    console.log(tag += '#');  
  }
}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(a, b) {
    
    for (var i = a; i <= b; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } 
     else if (i % 3 === 0) {
        console.log('fizz');
    } else if (i % 5 === 0) {
        console.log('buzz');
    } else {
        console.log(i);
    }
    }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
  let boardSquare = ''; 
 
  for (var i = 0; i < size; i++) {
    for(var j = 0; j < size; j++) {
      if( (i+j) % 2 === 0) {
         boardSquare += ' ';
      }
      else {
        boardSquare += '#';
      } 
    }
      boardSquare += "\n";
    }  
    console.log(boardSquare);
  }

// function drawChessboard(size) {
//     var chessBoard = "";

//     for (var lineCounter = 1; lineCounter < size; lineCounter++) { 

//         if (lineCounter%2 === 0) { //if lineCounter is an even number
//         for (var charCounter = 1; charCounter < size; charCounter++) {
//             var evenOdd = (charCounter%2 === 0);
//             switch (evenOdd) {
//                 case true:
//                     (chessBoard += "#");
//                     break;
//                 case false:
//                     (chessBoard += " ");
//                     break;
//                 }
//             }                   
//         }
//     else { //if lineCounter is an odd number
//         for (var charCounter = 1; charCounter < size; charCounter++) {
//             var evenOdd = (charCounter%2 === 0);
//             switch (evenOdd) {
//                 case true:
//                     (chessBoard += " ");
//                     break;
//                 case false:
//                     (chessBoard += "#");
//                     break;
//             }
//             }                       
//         }   
//     chessBoard += "\n";
//     }
//     console.log(chessBoard);
// }

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
