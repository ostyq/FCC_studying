function whatIsInAName(collection, source) {
  const myKeys = Object.keys(source);
  return collection.filter(function(currentObject) {
    return myKeys.every(function(key) {
      return currentObject.hasOwnProperty(key) && currentObject[key] === source[key];
    });
  });
}

whatIsInAName([{ a: 1, b: 2 }, { a: 1 }, { a: 1, b: 2, c: 2 }], { a: 1, b: 2 });
