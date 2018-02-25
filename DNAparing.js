function pairElement(str) {
  const DNAmatrix = {
    G: ['G', 'C'],
    C: ['C', 'G'],
    A: ['A', 'T'],
    T: ['T', 'A'],
  };

  const result = [];
  str.split('').map(function(letter) {
    result.push(DNAmatrix[letter]);
  });

  return result;
}

console.log(pairElement('GCG'));
