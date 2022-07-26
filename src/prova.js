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

