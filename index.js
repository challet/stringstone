function stringstone(string, conf) {
  // create a new reference
  conf = { ...conf };
  // the order for only numeric keys should be ascending
  const mile = Object.keys(conf).pop();
  const stone = conf[mile];
  delete conf[mile];
  
  // the regexp makes chunks of the string
  let chunks = string.match(new RegExp(`.{1,${ mile }}`, 'g'));
  if (Object.keys(conf).length !== 0) {
    chunks = chunks.map((s) => stringstone(s, conf));
  }
  
  return chunks.join(stone);
}

module.exports = stringstone;