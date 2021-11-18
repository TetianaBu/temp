function reverseWordsInString(startStr) {
  const regexWithPL = /([a-zżźćńółęąś]+)/gi;
  const reversedWords = startStr.match(regexWithPL).reverse();
  const otherSymbols = startStr.split(/[a-zżźćńółęąś]+/i);
  let newArr = [otherSymbols[0]];
  for (let step = 0; step < reversedWords.length; step++) {
    newArr.push(reversedWords[step], otherSymbols[step + 1]);
  }
  return newArr.join('');
}