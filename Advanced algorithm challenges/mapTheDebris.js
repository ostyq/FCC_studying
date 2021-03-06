const orbitalPeriod = (arr) => {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return arr.map(element => ({
    name: element.name,
    orbitalPeriod: Math.round(
      2 * Math.PI * Math.sqrt(((earthRadius + element.avgAlt) ** 3) / GM)),
  }));
};

console.log(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]));
