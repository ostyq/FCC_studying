const truthCheck = (collection, pre) => {
  return collection.every(obj => obj[pre]);
};

console.log(
  truthCheck([{ single: 'double' }, { single: undefined }], 'single')
);
