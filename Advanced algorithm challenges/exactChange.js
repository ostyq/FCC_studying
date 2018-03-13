function checkCashRegister(price, cash, cid) {
  const currency = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  let toChange = (cash - price) * 100;
  const changeRecord = [];
  const integerCid = cid.map(el => [el[0], Math.round(el[1] * 100)]);

  const enoughFaceValue = (currentCid) => {
    const sum = currentCid.filter((val, i) => toChange >= currency[i]);
    return sum.reduce((acc, val) => acc + val[1], 0);
  };

  if (toChange > enoughFaceValue(integerCid)) {
    return 'Insufficient Funds';
  } else if (toChange === enoughFaceValue(integerCid)) {
    return 'Closed';
  }
  for (let i = integerCid.length - 1; i > -1; i -= 1) {
    let currentChange = 0;
    while (integerCid[i][1] > 0 && toChange >= currency[i]) {
      toChange -= currency[i];
      integerCid[i][1] -= currency[i];
      currentChange += currency[i];
    }
    if (currentChange) {
      changeRecord.push([integerCid[i][0], currentChange / 100]);
    }
  }

  return changeRecord;
}

console.log(
  checkCashRegister(19.5, 20.0, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90.0],
    ['FIVE', 55.0],
    ['TEN', 20.0],
    ['TWENTY', 60.0],
    ['ONE HUNDRED', 100.0],
  ]),
);
