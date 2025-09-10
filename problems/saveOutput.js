/*
Prompt:
Write a function `saveOutput` that takes in a function (func) and a string (magicWord).
It should return a new function that behaves as follows:

- Every time the returned function is invoked with an argument,
  it should return the result of calling `func` on that argument.
- It should also save each argument and its corresponding output in an object.
- When the returned function is invoked with the magicWord,
  it should return the object with all previously saved inputs and outputs.

Example:
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndSave = saveOutput(multiplyBy2, "showAll");

multBy2AndSave(5);        // 10
multBy2AndSave(10);       // 20
multBy2AndSave("showAll") // {5: 10, 10: 20}
*/

//Approach

//Defining SUCCESS: Takes in a function and string and should return a new function that stores data in an obj, returns the history

//Key Phrases: 
//  takes in a function  and a string
//  returns a new func
//  save each args with corresponding output
//  when invoked with magic word return the obj and history

// Actions: 
// create a obj to return 
// return a function 
// check for magic word
// save args and output
// save evaluated result of callback passing input
// make 
// return obj and history


Example:
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndSave = saveOutput(multiplyBy2, "showAll");

multBy2AndSave(5);        // 10
multBy2AndSave(10);       // 20
multBy2AndSave("showAll") // {5: 10, 10: 20}


function saveOutput(func, magicWord) {
// your code here
//create an empty obj
const result = {}; 
//return inner function
return function (pass) {
  if (pass === magicWord) {
    //Conditon --> if we have magicWord, return the obj
    return result;
  }
  // save evaled result of callback passing input
  const output = func(pass);
  //Add the key and value to the obj  --> key is the number we are passing through the callback and value the output
  //return the obj
  result[pass] = output;
  //return the obj
  return pass;
};

// save evaled result of callback passing input
//Add the key and value to the obj  --> key is the number we are passing through the callback and value the output
}

/*
Examples:
We’ve included a few starter calls in `runExamples()`.
- Uncomment `runExamples();` at the bottom to try them out.
- Add one of your own before unlocking with the magic word.
*/

function runExamples() {
  const multiplyBy2 = (n) => n * 2;
  const multBy2AndSave = saveOutput(multiplyBy2, "showAll");

  console.log(multBy2AndSave(5));        // -> 10
  console.log(multBy2AndSave(10));       // -> 20

  // TODO: Add ONE additional example call of your own, then unlock:
  // e.g., console.log(multBy2AndSave(7));  // -> 14
  console.log(multBy2AndSave("showAll")); // -> {5: 10, 10: 20 /* , 7: 14 if you added it */}
}
// runExamples();
