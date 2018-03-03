function fearNotLetter(str) {
  const numerals = str.split('').map(lettter => lettter.charCodeAt());
  const length = numerals.length - 1;
  let missingLetter = undefined;

  if (numerals[length] - numerals[0] === length) {
    return undefined;
  } else {
    missingLetter = numerals.filter((number, index, array) => {
      if (array[index] - array[index - 1] > 1) {
        return true;
      }
    });
  }

  return String.fromCharCode(missingLetter[0] - 1);
}

console.log(fearNotLetter('abce'));
