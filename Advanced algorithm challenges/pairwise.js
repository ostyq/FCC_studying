const pairwise = (arr, arg) => {
  let pairIndex = 0;
  const takenIndices = [];

  for (let i = 0; i < arr.length - 1; i += 1) {
    pairIndex += arr.reduce((acc, element, index) => {
      if (
        index > i &&
        arr[i] + element === arg &&
        !takenIndices.includes(index) &&
        !takenIndices.includes(i)
      ) {
        takenIndices.push(i, index);
        return i + index;
      }
      return acc;
    }, 0);
  }

  return pairIndex;
};

console.log(pairwise([1, 1, 1], 2));
