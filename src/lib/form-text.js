function generateLabel(text, maritalStatus) {
  let result = text;
  if (maritalStatus === 'couple') {
    result = `${text} for Couple`;
  }
  return result;
}

export { generateLabel };
