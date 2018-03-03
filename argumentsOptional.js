function addTogether() {
  const goodNumber = num => Boolean(typeof num === 'number');
  if (
    arguments.length === 2 &&
    goodNumber(arguments[0]) &&
    goodNumber(arguments[1])
  ) {
    return arguments[0] + arguments[1];
  } else if (arguments.length === 1 && goodNumber(arguments[0])) {
    return (addSecond = secondArg =>
      goodNumber(secondArg) ? secondArg + arguments[0] : undefined);
  } else {
    return undefined;
  }
}

console.log(addTogether(2)('a'));

// function addTogether() {
//     if (
//       arguments.length === 2 &&
//       typeof arguments[0] === 'number' &&
//       typeof arguments[1] === 'number'
//     ) {
//       return arguments[0] + arguments[1];
//     } else if (arguments.length === 1 && typeof arguments[0] === 'number') {
//       return (addSecond = a => typeof a === 'number'? (a + arguments[0]) : undefined);
//     } else {
//       return undefined;
//     }
//   }

//   addTogether(2,3);
