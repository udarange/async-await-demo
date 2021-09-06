# async-await-demo
Here we discuss how to use async-await with promises

### 1. default loop (with a callback)

### 2. micro task - 2nd priority

* promise

### 3. macro task - 3rd priority

* setTimeout(() => {})
* setInterval(() => {})

#### Example

Input
```.env
console.log("Synchronous 1")
setTimeout(() => console.log("Synchronous 2"), 0)
Promise.resolve().then(() => console.log("Synchronous 3"))
console.log("Synchronous 4")
```

Output
```.env
Synchronous 1
Synchronous 4
Synchronous 3
Synchronous 2
```
