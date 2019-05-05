function generateNumericOptions(from, to) {
  const result = [];
  for (let i = from; i <= to; i += 1) {
    result.push({
      key: i,
      value: i,
      label: i,
    });
  }
  return result;
}

// to/from values should come from config
const ageOptions = generateNumericOptions(40, 70);

export { ageOptions };
