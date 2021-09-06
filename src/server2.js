console.log("Synchronous 1")

//-----------------------------------------
const startTime = Date.now()
Promise.resolve().then(v => {
  let i = 0
  while (i < 10000000000) { i++ }
  console.log("loop done in", Date.now() - startTime, "microseconds")
})
//-----------------------------------------

console.log("Synchronous 2")
