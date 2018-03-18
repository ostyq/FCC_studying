const swap = (index1, index2, arr) => {
  let temporary;
  temporary = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temporary;
};

const checkRepeats = (str) => {
  const exp = /(\w)\1+/g;
  return exp.test(str);
};

const generateNoRepeats = (n, arr, result) => {
  if (n === 1) {
    if (!checkRepeats(arr.join(''))) {
      result.push(arr.join(''));
    }
  } else {
    for (let i = 0; i < n - 1; i += 1) {
      generateNoRepeats(n - 1, arr, result);
      if (n % 2 === 0) {
        swap(i, n - 1, arr);
      } else {
        swap(0, n - 1, arr);
      }
    }
    generateNoRepeats(n - 1, arr, result);
  }

  return result;
};

const permAlone = (str) => {
  const inputArr = str.split('');
  const result = [];

  return generateNoRepeats(inputArr.length, inputArr, result).length;
};

console.log(permAlone('aab'));
