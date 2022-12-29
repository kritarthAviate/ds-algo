function highestOccuringCharacter(str) {
  let charMapping = {};
  for (let i = 0; i < str.length; i++) {
    if (charMapping[str[i]]) {
      charMapping[str[i]]++;
    } else {
      charMapping[str[i]] = 1;
    }
  }
  const maxValue = Math.max(...Object.values(charMapping));
  console.log({ maxValue });
  return Object.keys(charMapping).find((key) => charMapping[key] == maxValue);
}

console.log(highestOccuringCharacter("a bc a bd a"));
