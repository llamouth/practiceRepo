const users = require("./10.5users")
  
/** Problem 1:
   Write a function that takes in an array of users and returns the oldest user
   * @param {Object[]} users - An array of users.
   * @returns {number} The age of the oldest user.
*/

const whoIsTheOldest = (arr) => {
    let oldestPerson;
    arr.reduce((oldestAge, namesObj) => {
        let fullName = `${namesObj.firstName} ${namesObj.lastName}`
        if(+namesObj.age > oldestAge){
            oldestAge = +namesObj.age
            oldestPerson = fullName 
        }
        return oldestAge
    },0)
    return oldestPerson[0].toUpperCase() + oldestPerson.slice(1).toLowerCase()
}

console.log(whoIsTheOldest(users))

/** Problem 2:
   Write a function that takes in an array of users and returns who wears glasses
   * @param {Object[]} users - An array of users.
   * @returns {Object[]} Array of users who wears glasses
*/

const whoWearsGlasses = (arr) => {
  return arr.reduce((arr, user) => {
      if(user.wearsGlasses){
        arr.push(`${user.firstName} ${user.lastName}`);
      }
    return arr
  },[])
}

console.log(whoWearsGlasses(users))

/** Problem 3:
   Write a function that takes in an array of users and returns who is tallest user
   * @param {Object[]} users - An array of users.
   * @returns {String} The tallest user
*/

const findTheUserWhoIsTheTallest = (array) => {
  let user;
  array.reduce((tallest, users) => {
    if(users.heightInCm > tallest) {
      tallest = users.heightInCm
      user = `${users.firstName} ${users.lastName}`
    }
    return tallest
  },-Infinity)
  return user
}

console.log(`The tallest is ${findTheUserWhoIsTheTallest(users)}`)

/** Problem 4:
   Write a function that takes in an array of users and returns the shortest user
   * @param {Object[]} users - An array of users.
   * @returns {String} The shortest user
*/

const findTheUserWhoIsTheShortest = (array) => {
  let user;
  array.reduce((shortest, users) => {
    if(users.heightInCm < shortest ) {
      shortest = users.heightInCm
      user = `${users.firstName} ${users.lastName}`
    }
    return shortest
  },Infinity)
  return user
}

console.log(`The shortest is ${findTheUserWhoIsTheShortest(users)}`)

/**
   Write a function that takes in an array of users and returns the users over 30
   * @param {Object[]} users - An array of users.
   * @returns {Object[]} An array of users over 30
*/

const gettingUsersOver30 = (arr) => {
  return arr.reduce((arr, user) => {
    if(user.age >= 30) {
      arr.push(`${user.firstName} ${user.lastName}`)
    }
    return arr
  },[])
}

console.log(gettingUsersOver30(users))

/**
   Write a function that takes in an array of users and returns a count of how many last name begins first letter E.X.{A: 3, B: 2, C: 1, F: 2}
   * @param {Object[]} users - An array of users.
   * @returns {Object{}} An object containing the count of users begininng with the correct last name
*/

const howManyLastNameBginsWithObject = (arr) => {
  return arr.reduce((obj, user) => {
    obj[user.lastName[0].toUpperCase()] = (obj[user.lastName[0].toUpperCase()] || 0) + 1
    return obj
  },{})
}

console.log(howManyLastNameBginsWithObject(users))

/** 
*Given users, return am array of each of the users full name capitalized or if there is a target value return the target if found in the user data if not found return "User not found".
*@param {Object[]} = users array
*@return {Object[] || String} = new aray with user's full name || Target if target value is present
*/

const getUserFullName = (users, target) => {
  let targetName;

  let userArr = users.reduce((nameArr, user) => {
      let fullName = `${user.firstName[0].toUpperCase() + user.firstName.slice(1)} ${user.lastName[0].toUpperCase() + user.lastName.slice(1)}`
      if(target){
          if(fullName.toLowerCase() === target.toLowerCase()){
              targetName = fullName;
              return nameArr;
          }
      }else{
          return [...nameArr, fullName];
      }
   },[])   

  if(typeof targetName != "string" && target){
      return "User not found"
  }

  return target ? targetName : userArr.sort((a,b) => a.localeCompare(b))
}

console.log(getUserFullName(users))
console.log(getUserFullName(users, "larry lamouth"))
console.log(getUserFullName(users, "Habibi"))
console.log(getUserFullName(users, "riZel eNAd"))
console.log(getUserFullName(users, "MARKEDIA HINDS"))
console.log(getUserFullName(users, "Bon Jovi"))
