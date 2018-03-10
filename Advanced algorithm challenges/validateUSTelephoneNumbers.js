const telephoneCheck = str => {
  const regex1 = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex1.test(str);
};

console.log(telephoneCheck('555-555-5555'));
