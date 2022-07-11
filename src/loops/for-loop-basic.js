const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array

for (i = 0; i < 4; i++){
    numsZeroToThree.push(i)
}

// console.log(numsZeroToThree)

// TODO: Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array

for (i = 0; i <= 10; i++){
    
    if (i >= 5){
        numsFiveToTen.push(i)
    }
}

// console.log(numsFiveToTen)

// TODO: Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums

for (i = 0; i <= 6; i++){
    if (i % 2 === 0){
        evenNums.push(i)
    }
}

// console.log(evenNums)

// TODO: Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array

for (i = countdown.length + 3; i >= 0; i--){
    countdown.push(i)
}
 console.log(countdown)

// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
