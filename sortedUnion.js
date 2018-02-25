function uniteUnique(arr) {
  const args = [...arguments];
  const united = args.reduce((coll, item) => {
    return coll.concat(item);
  });

  return united.filter((element, index) => united.indexOf(element) === index);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
