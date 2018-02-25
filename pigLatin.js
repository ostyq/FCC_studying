function translatePigLatin(str) {
  const firstVowel = str.search(/[aeoui]/);

  return (firstVowel === 0) ? str + 'way' : str.substr(firstVowel) + str.substr(0, firstVowel) + 'ay';
}
console.log(translatePigLatin('consonant'));
