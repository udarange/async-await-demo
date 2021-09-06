console.log("Synchronous 1")

setTimeout(() => console.log("Synchronous 2"), 0) // macro task - 3rd priority

Promise.resolve().then(() => console.log("Synchronous 3")) // micro task - 2nd priority

console.log("Synchronous 4")

// macro task - 3rd priority
// setTimeout(() => {})
// setInterval(() => {})

// micro task - 2nd priority
// promise
