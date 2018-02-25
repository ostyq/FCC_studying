function translatePigLatin(str) {
  let transctipted = '';
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelsPlace = [];

  str.split('').map(function(letter, index) {
    if (vowels.indexOf(letter) >= 0) {
      vowelsPlace.push(index);
    }
  });

  if (vowelsPlace[0] === 0) {
    transctipted = str + 'way';
  } else {
    transctipted =
      str.substr(vowelsPlace[0]) + str.substr(0, vowelsPlace[0]) + 'ay';
  }

  return transctipted;
}
console.log(translatePigLatin('consonant'));
