import fetch from "node-fetch";
console.log("Synchronous 1")

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

console.log("Synchronous 2")


// In Node 14 I solved it with workaround.
//   short summary:
//   your root level package.json doesn't support ESM
//   subdirectory does - in src directory place package.json with { "type": "module" }
//   PS: ESLint team can't solve it easily right now, just because of core design... :(
