function uniteUnique(arr) {
  const united = [].concat(...arguments);

  return united.filter((element, index) => united.indexOf(element) === index);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
