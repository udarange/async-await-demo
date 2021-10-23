import { promisify } from 'util';
const delay = promisify(setTimeout);

async function getUser(uid) {
  const users = {
    "001": 'name1',
    "002": 'name2',
    "003": 'name3',
    "004": 'name4',
    "005": 'name5'
  }
  await delay(1000);
  return users[uid]
}

// getUser("002").then(v => console.log(">>>>>>>>>>", v))
// console.log(">>>>>>>>>>>>>>", await getUser("002"))

async function newVar1() {
  const user1 = await getUser("002")
  const user2 = await getUser("003")
  // console.log("------1-------", [user1, user2]) // printable
  return [user1, user2] // return a promise again
}

console.time('With await')
newVar1().then(r => {
  console.log("---------11---------", r);
  console.timeEnd('With await')
})

function newVar2() {
  return getUser("002").then(user1 => {
    return getUser("003").then(user2 => {
      // console.log("------2-------", [user1, user2]) // printable
      return [user1, user2] // return a promise again
    })
  })
}

console.time('Nexted promise')
newVar2().then(r => {
  console.log("---------22---------", r);
  console.timeEnd('Nexted promise')
})


async function newVar3() {
  const user1 = getUser("002")
  const user2 = getUser("003")
  // console.log("------3-------", [user1, user2]) // promise
  return await Promise.all([user1, user2])
}

console.time('Promise all')
newVar3().then(r => {
  console.log("---------33---------", r);
  console.timeEnd('Promise all')
})

