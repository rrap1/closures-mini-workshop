/*
Prompt:
Write a function `callTimes` that returns a new function.
Each time the returned function is invoked, it should return the number of times it has been called.

Example:
const myFunc = callTimes();
myFunc(); // 1
myFunc(); // 2
*/

function callTimes() {
  // your code here
}

/*
Examples:
Some sample calls are provided inside `runExamples()`.
- Uncomment `runExamples();` at the bottom to try them out.
- Add one of your own checks to confirm your solution works.
*/

function runExamples() {
  const myFunc = callTimes();
  console.log(myFunc()); // -> 1
  console.log(myFunc()); // -> 2

  // TODO: Add ONE additional check of your own:
  // e.g., console.log(myFunc()); // -> 3
  // Or create an independent counter:
  // const another = callTimes();
  // console.log(another()); // -> 1
}
// runExamples();
