// Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello'

let answerOne

    if (STR_ONE === 'Hello'){
    answerOne = true
}

//console.log(answerOne)

// Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye'

let answerTwo

    if (STR_TWO !== 'Hello'){
        answerTwo = true
    }

//console.log(answerTwo)   

// Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR

const STR_THREE = 'Hello'
const STR_FOUR = 'Good'

let answerThree

    if (STR_THREE.length > STR_FOUR.length)[
        answerThree = true
    ]

console.log(answerThree)   

// Use a combination of a loop and conditional statements to set answerFour
// to false if STR_FIVE has an odd number of vowels, or true if it has an
// even number
const STR_FIVE = 'Alex'

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
let vowelCount = 0
let answerFour 

for (i = 0; i <= STR_FIVE.length; i++){
        for (j = 0; j < vowels.length; j++){
            if (STR_FIVE[i] === vowels[j]){
                vowelCount++
            }
        }
 } 
    if (vowelCount % 2 === 0){
        answerFour = true
 }  else {
        answerFour = false
 }

//console.log(answerFour)

// Use a combination of a loop and conditional statements to set answerFive
// to false if STR_SIX has an odd number of vowels, or true if it has an
// even number
const STR_SIX = 'Joanna'

let answerFive
vowelCount = 0

for (i = 0; i <= STR_SIX.length; i++){
    for (j = 0; j < vowels.length; j++){
        if (STR_SIX[i] === vowels[j]){
            vowelCount++
        }
    }
} 
if (vowelCount % 2 === 0){
    answerFive = true
}  else {
    answerFive = false
}

//console.log(vowelCount)
//console.log(answerFive)

// Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters

const STR_SEVEN = 'Kayla'
let midChar 

let answerSix
let cal1 = STR_SEVEN.length % 2
let cal2 = STR_SEVEN.length - cal1
let cal3 = cal2 / 2
midChar = STR_SEVEN [cal1 + cal3 - 1]

if (STR_SEVEN.length % 2 === 1){
    answerSix = midChar
}

//console.log(answerSix)


//vowelCount = 0

//if (STR_SEVEN.length % 2 === 1){
    //for (i = 0; i < STR_SEVEN.length / 2; i++){
        //answerSix = STR_SEVEN[i]
        //}
    //}        

//console.log(answerSix)

// Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex'

let answerSeven
let midChar1 = STR_EIGHT [STR_EIGHT.length / 2 - 1]
let midChar2 = STR_EIGHT [STR_EIGHT.length / 2]

if (STR_EIGHT.length % 2 === 0){
    answerSeven = midChar1 + midChar2
}
    

//console.log(answerSeven)



// Set answerEight to the appropriate season based on what MONTH is set to
//
// For example, if MONTH is 'January', answerEight should be 'Winter'
//
// The below table shows the season for each range of months:
//
// March to May: Spring
// June to August: Summer
// September to November: Autumn
// December to February: Winter
//
// Run the test after changing the value of MONTH to check you've covered every month correctly
const MONTH = 'December'

let answerEight

    if (MONTH === 'March' || MONTH === 'April' || MONTH === 'May'){
        answerEight = 'Spring'
    } else 
    if (MONTH === 'June' || MONTH === 'July' || MONTH === 'August'){
        answerEight = 'Summer'
    } else
    if (MONTH === 'September' || MONTH === 'October' || MONTH === 'November'){
        answerEight = 'Autumn'
    } else
    if (MONTH === 'December' || MONTH === 'January' || MONTH === 'February'){
        answerEight = 'Winter'
    }     

//console.log(answerEight)



module.exports = {
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  answerFive,
  answerSix,
  answerSeven,
  MONTH,
  answerEight
}
