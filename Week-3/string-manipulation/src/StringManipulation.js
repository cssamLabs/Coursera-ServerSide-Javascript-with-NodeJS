//count the number of Characters in the given String and return the value
const countCharacters = (str) => {
  // let count = {}
  // str.split('').forEach(function(c){
  //   count[c]? count[c]++: count[c] =1;
  // })
  return str.length;
}
//count the number of vowels in the given String and return the value
const countVowels = (str) => {
  return str.split('').filter(char => (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') ).length;
}

//Check the existence of the given String in the Specified String and return the value
const checkExistenceOfStr = (str, checkStr) => {
  if(str.indexOf(checkStr) !== -1){
    return true
  } else {
    return false
  }
}

//replace a word and return the value
const replaceWord = (str, wordToBeReplaced, replaceWord) => {
  return str.replace(wordToBeReplaced, replaceWord);
}

//convert the specified string into Title Case and return the value
const titleCaseConversion = (str) => {
  return str.split(' ').reduce(function(final, word)
    { 
      let firstChar = word.slice(0, 1).toUpperCase();
      let otherChars = word.slice(1, word.length);
      let title = firstChar+otherChars;
      return (final+" "+title).trimStart();
    }, '')
}

// find the largest word (in terms of length) in the specified string and return the value
const findLongestWord = (str) => {
  let words = str.split(' ');
  let sorted = words.sort((a, b) => (a.length < b.length ? 1 : -1));
  return sorted[0];
}


module.exports = {
  countCharacters,
  countVowels,
  checkExistenceOfStr,
  replaceWord,
  titleCaseConversion,
  findLongestWord
}