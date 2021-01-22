
//1. String Length - returns length of a string

//ex.
var groceryList = ['bananas', 'potatoes', 'milk', 'juice', 'ice-cream', 'chocolate'];
console.log(groceryList.length); //==> 6

//2. indexOf() method  - returns the index of the first occurrence of a specified text in a string:

//ex.
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate"); //==> 7

//3. Slice() Method - extracts a part of a string and returns the extracted part in a new string.

//ex.
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13); //==> Banana

//4. toUpperCase() - A string is converted to upper case

//ex.
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 = 'HELLLO WORLD'

//5. toLowerCase() - A string is converted to lower case

//ex.
var text1 = "Hello World!";       // String
var text2 = text1.toLowerCase();  // text2 = 'hello world'

//6. Concat() Method - joins two or more strings:

//ex.
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");

//7. Split() Method - converts string to an array

//ex.
var txt = "Hello";       // String
txt.split("");           // Split in characters ==> ['H', 'e', 'l', 'l', 'o']

//8. Join() Method - converts array into a string
var arr = ['a', 'b', 'c', 'd'];
arr.join(' '); //==> 'a b c d'

