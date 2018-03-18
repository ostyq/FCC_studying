const updateInventory = (arr1, arr2) => {
  const itemNames = arr1.map(i => i[1]);

  arr2.forEach((item) => {
    const currentItemIndex = itemNames.indexOf(item[1]);
    if (currentItemIndex !== -1) {
      arr1[currentItemIndex][0] += item[0];
    } else {
      arr1.push(item);
    }
  });
  return arr1.sort((a, b) => a[1] > b[1]);
};

const curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
];

const newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
];

console.log(updateInventory(curInv, newInv));
