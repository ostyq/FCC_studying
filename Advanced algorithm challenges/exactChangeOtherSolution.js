function checkCashRegister(price, cash, cid) {
  const currency = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  let change = (cash - price) * 100;
  let allCash = true;

  const changeRecord = cid.reduceRight((p, c, i) => {
    const out = Math.min(change - (change % currency[i]), c[1] * 100);
    change -= out;
    if (out !== c[1] * 100) {
      allCash = false;
    }
    return out ? p.concat([[c[0], out / 100]]) : p;
  }, []);
  if (change > 0) {
    return 'Insufficient Funds';
  } else if (allCash) {
    return 'Closed';
  }
  return changeRecord;
}

console.log(
  checkCashRegister(3.26, 100.0, [
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
