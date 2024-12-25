export const formatNumber = (num: number, precision = 2, trimZeros = false) => {
  const map = [
    { suffix: "T", threshold: 1e12 },
    { suffix: "B", threshold: 1e9 },
    { suffix: "M", threshold: 1e6 },
    { suffix: "K", threshold: 1e3 },
    { suffix: "", threshold: 1 },
  ];

  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (!found) {
    return num;
  }

  const fixedPointNum = (num / found.threshold).toFixed(precision);
  if (trimZeros && fixedPointNum.endsWith("0")) {
    return fixedPointNum.slice(0, fixedPointNum.length - 2) + found.suffix;
  }

  return fixedPointNum + found.suffix;
};
