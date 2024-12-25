export const generateBalanceValue = () => {
  // maximum balance is 1500 with 2 decimal places
  return Math.floor(Math.random() * 1500 * 100) / 100;
};