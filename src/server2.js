console.log("Synchronous 1")

//-----------------------------------------
// const startTime = Date.now()
console.time('Loop time')
Promise.resolve().then(v => {
  let i = 0
  while (i < 10000000000) { i++ }
  // console.log("loop done in", Date.now() - startTime, "microseconds")
  console.timeEnd('Loop time')
})
//-----------------------------------------

console.log("Synchronous 2")
