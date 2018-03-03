const dropElements = (arr, func) => {
  const firstIndex = arr.findIndex(func);
  return firstIndex >= 0 ? arr.slice(firstIndex) : [];
};

console.log(
  dropElements([0, 1, 0, 1], function(n) {
    return n === 1;
  })
);
