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
// firstLetter takes the first letter of word and seperates it into its own array
// lastLetter takes the last letter of word and eperates it into its own array
//the 1st if statment says if the first and last letter arent the same, return false
//the 2nd if statment says if the length of the characters is less than 2 characters, return true
//the function isPalindrome returns the characters put back together into a string


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
