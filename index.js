function isPalindrome(word) {
  var character = word.split('')

  if (character.length < 2) {
    return true;
  }

  var firstLetter = character.shift(),
    lastLetter = character.pop();

  if (firstLetter !== lastLetter) {
    return false;
  }
  
  return isPalindrome(character.join(''));
}

/* 
  Add your pseudocode here
*/
//write a function named isPalindrome
//isPalindrome takes in a string
//only lowercase letters, no space/ extra characters
//check if string reads same way foward and backwards
//returns true if it does
//returns false if it doesnt

/*
  Add written explanation of your solution here
*/
// function isPalimdrome takes in a string as an argument
// character splits the word up into characters
//the if statment says if the length of the word is less than 2 characters, return true 
// firstLetter takes the first letter of word and seperates it into its own array
// lastLetter takes the last letter of word and eperates it into its own array
//the if statment says if the first and last letter arent the same, return false
//the function isPalindrome returns  a boolean


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("ab"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;




// 2ND METHOD//
// /*PSUDOCODE/*
// reverse the input string
// if the reversed string is the same as the input
//  return true
// else
//  return false

// /* CREATING A STUB/*
//  function reverseString(word) {
//    TODO: implement string reversing functionality
//   return word;
// }

// function isPalindrome(word) {
//    reverse the input string
//   const reversedWord = reverseString(word);
//    if the reversed string is the same as the input
//   if (word === reversedWord) {
//     return true;
//   } else {
//     return false;
//   }
// }

// /* PSUDOCODE/*
// create an array from the input string
// reverse the array
// create a string from the reversed array
// return the reversed string

// function reverseString(word) {
//   // create an array from the input string
//   const wordArray = word.split("");
//   // reverse the array
//   const reversedWordArray = wordArray.reverse();
//   // create a string from the reversed array
//   const reversedWord = reversedWordArray.join("");
//   // return the reversed string
//   return reversedWord;
// }



//COMPLETE CODE METHOD 2//
// function reverseString(word) {
//   // create an array from the input string
//   const wordArray = word.split("");
//   // reverse the array
//   const reversedWordArray = wordArray.reverse();
//   // create a string from the reversed array
//   const reversedWord = reversedWordArray.join("");
//   // return the reversed string
//   return reversedWord;
// }

// function isPalindrome(word) {
//   // reverse the input string
//   const reversedWord = reverseString(word);
//   // if the reversed string is the same as the input
//   if (word === reversedWord) {
//     return true;
//   } else {
//     return false;
//   }
// }

//CLEANER VERSION OF METHOD 2//
// function isPalindrome(word) {
//   // reverse the input string
//   const reversedWord = reverseString(word);
//   // compare the reversed string to the input
//   return word === reversedWord;
// }
// function reverseString(word) {
//   return word.split("").reverse().join("");
// }