function convertHTML(str) {
  const lookup = {
    '&': '&​amp;',
    '<': '&​lt;',
    '>': '&​gt;',
    '"': '&quot;',
    "'": '&​apos;',
  };

  return str
    .split('')
    .map(entity => lookup[entity] || entity)
    .join('');
}

console.log(convertHTML('Dolce & Gabbana'));
