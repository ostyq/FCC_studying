function addTogether() {
  const args = Array.from(arguments);
  if (args.some(num => typeof num !== 'number')) {
    return undefined;
  } else if (args.length > 1) {
    return args.reduce((num, acc) => acc + num);
  } else {
    return (addSecond = a =>
      typeof a === 'number' ? a + args[0] : undefined);
  }
}

console.log(addTogether(2, 3));
