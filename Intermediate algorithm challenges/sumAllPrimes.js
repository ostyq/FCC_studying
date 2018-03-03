isPrime = value => {
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
};

sumPrimes = num => {
  const sequence = [];
  for (let i = 2; i <= num; i += 1) {
    sequence.push(i);
  }

  return sequence
    .filter(element => isPrime(element))
    .reduce((element, acc) => element + acc);
};

console.log(sumPrimes(10));
