export function extractNumbers(formData) {
  const num1Input = formData.get("num1");
  const num2Input = formData.get("num2");

  return [num1Input, num2Input];
}

export function extractformData(form) {
  const formData = new formData(form);
  const numberInputs = extractNumbers(formData);
  return numberInputs;
}
