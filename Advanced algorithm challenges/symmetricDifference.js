function sym(args) {
  const argumentsArray = Array.from(arguments);
  const filterArrays = (arr1, arr2) => {
    const filtered = (arr1, arr2) => {
      return arr1.filter(element => {
        return arr2.indexOf(element) === -1;
      });
    };
    return filtered(arr1, arr2).concat(filtered(arr2, arr1));
  };
  const asym = argumentsArray.reduce(filterArrays, []);
  return asym.filter((element, index) => {
    return asym.indexOf(element) === index;
  });
}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
