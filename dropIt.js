const dropElements = (arr, func) => {
  const filteredArr = arr.filter(func);
  const firstPlace = arr.indexOf(filteredArr[0]);
  return filteredArr[0] != null ? arr.slice(firstPlace) : [];
};

console.log(
  dropElements([0, 1, 0, 1], function(n) {
    return n === 1;
  })
);
