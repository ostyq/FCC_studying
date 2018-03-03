function findElement(arr, func) {
  const answersArr = arr.filter(func);
  return answersArr[0];
}

console.log(
  findElement([1, 2, 3, 4], function(num) {
    return num % 2 === 0;
  })
);
