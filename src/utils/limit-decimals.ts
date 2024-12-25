export const limitDecimals = (value: number, decimal: number) => {
  return Number(value.toFixed(decimal));
};