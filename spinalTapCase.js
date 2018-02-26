function spinalCase(str) {
  const whiteSpaces = /(\s+|_+)/g;
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .toLowerCase()
    .replace(whiteSpaces, '-');
}

console.log(spinalCase('AllThe-small Things'));
