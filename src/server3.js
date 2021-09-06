import { promisify } from 'util';
const delay = promisify(setTimeout);

const getUser = async (uid) => {
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

let newVar1 = async () => {
  const user1 = await getUser("002")
  const user2 = await getUser("003")
  // console.log("------1-------", [user1, user2]) // printable
  return [user1, user2] // return a promise again
};
const startTime1 = Date.now()
newVar1().then(r => {
  console.log("---------11---------", r);
  console.log("done in", Date.now() - startTime1, "microseconds")
})

let newVar2 = () => {
  return getUser("002").then(user1 => {
    return getUser("003").then(user2 => {
      // console.log("------2-------", [user1, user2]) // printable
      return [user1, user2] // return a promise again
    })
  })
}
const startTime2 = Date.now()
newVar2().then(r => {
  console.log("---------22---------", r);
  console.log("done in", Date.now() - startTime2, "microseconds")
})



let newVar3 = async () => {
  const user1 = getUser("002")
  const user2 = getUser("003")
  // console.log("------3-------", [user1, user2]) // promise
  return await Promise.all([user1, user2])
};
const startTime3 = Date.now()
newVar3().then(r => {
  console.log("---------33---------", r);
  console.log("done in", Date.now() - startTime3, "microseconds")
})

