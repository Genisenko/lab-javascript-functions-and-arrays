/*let arr = [
    'first item',
    'second item is longer than the third one',
    'third longish item'
  ];
  
  let lgth = 0;
  let longest;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > lgth) {
       lgth = arr[i].length;
      longest = arr[i];
    }
  }
  
  console.log(longest);


  // Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  let longestWord = ""
  for (let i=0; i < words.length ;i++){
  if (words == undefined){
    return null
  }

  else if (words[i].length > longestWord.length) {
    longestWord = words[i];
  }
}
return longestWord
}

console.log(findLongestWord(words))


const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength() {
  let result = 0
  let average = 0
  for (let i=0; i < averageWordLength.length ;i++){
    
    result += numbersAvg[i];
  }

 average = result/numbersAvg.length
  return average

}

//console.log(averageNumbers(numbersAvg))

let arr = [
  'first item',
  'second item is longer than the third one',
  'third longish item'
];

let lgth = 0;
let longest;

for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > lgth) {
     lgth = arr[i].length;
    longest = arr[i];
  }
}

console.log(longest);


// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord() {
let longestWord = ""
for (let i=0; i < words.length ;i++){
if (words[i].length > longestWord.length) {
  longestWord = words[i];
}
}
return longestWord
}

console.log(findLongestWord(words))

const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength() {
let result = 0
let average = 0
for (let i=0; i < averageWordLength.length ;i++){
  
  result += numbersAvg[i];
}

average = result/numbersAvg.length
return average

}

*/
/*
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  let result = 0
  let average = 0
  for (let i=0; i < wordsArr.length ;i++){
    
    result += wordsArr[i].length;
  }

 average = result/wordsArr.length
 let averageNatural = Math.round(average)
  return averageNatural

}
console.log(averageWordLength(wordsArr))


const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  let longestWord = ""
  for (let i=0; i < words.length ;i++){
  if (words[i].length > longestWord.length) {
    longestWord = words[i];
  }
  else if (words.length == 0){
    return null
  }
}
return longestWord
}

console.log(findLongestWord(words)) */

// Iteration #5: Unique arrays
/*
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray() {
  let result = []
  wordsUnique.forEach((i) => {
    if (!result.includes(i)) {
      result.push(i);
    }
  })
      return result
    }

console.log(uniquifyArray(wordsUnique))  */
/*let chars = [
'crab',
'poison',
'contagious',
'simple',
'bring',
'sharp',
'playground',
'poison',
'communion',
'simple',
'bring'];

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

console.log(uniqueChars);
*/

function findLongestWord(array) {
  let maxLength = 0
  let word = ""

  for (let possibleWord = 0; possibleWord < array.length; possibleWord ++){
    if (array[possibleWord.length] > maxLength) {
      maxLength = array[possibleWord].length;
      word = array[possibleWord]
    }
  }
  return word;
}


function sumNumbers(aNumberArray) {
  if (!aNumberArray) return null;
  let sum = 0
  for (let pieceOfArray of aNumberArray) {
    if (typeof pieceOfArray === "string") sum += pieceOfArray.length;
    else sum +=pieceOfArray
  }
  return sum
}