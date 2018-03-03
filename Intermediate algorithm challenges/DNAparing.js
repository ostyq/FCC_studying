function pairElement(str) {
  const matrixDNA = {
    G: ['G', 'C'],
    C: ['C', 'G'],
    A: ['A', 'T'],
    T: ['T', 'A'],
  };

  return str.split('').map(letter => matrixDNA[letter]);
}

console.log(pairElement('GCG'));
