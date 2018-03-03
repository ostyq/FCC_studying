function smallestCommons(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let grandLCM = 0;

  const gcd = (x, y) => {
    // Implements The Euclidean Algorithm
    if (y === 0) return x;
    else return gcd(y, x % y);
  };

  for (let i = min; i < max; i++) {
    if (i === min) {
      grandLCM = i * (i + 1) / gcd(i, i + 1);
    } else {
      grandLCM = grandLCM * (i + 1) / gcd(grandLCM, i + 1);
    }
  }

  return grandLCM;
}

console.log(smallestCommons([23, 18]));
