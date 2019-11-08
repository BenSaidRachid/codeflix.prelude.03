export default function wordCount(str = "") {
  let wordArray = separateWords(str);
  wordArray = removeDuplicates(wordArray);
  return createArray(wordArray, str);
}
function separateWords(str = "") {
  return str.toLowerCase().split(" ");
}

function removeDuplicates(arr = []) {
  return arr.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  })
}

function countOccurence(str = "", word = "") {
  return (str.match(new RegExp(word, "g")) || []).length;
}

function createArray(arr = [], str = "") {
  let new_array = [];
  for(let word of arr) {
    let countWord = [];
    const count = countOccurence(str.toLowerCase(), word);
    countWord.push(word, count);
    new_array.push(countWord);
  }
  return new_array;
}