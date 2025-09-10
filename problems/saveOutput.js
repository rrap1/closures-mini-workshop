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

function saveOutput(func, magicWord) {
  // your code here
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
