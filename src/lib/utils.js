export const formatNumber = num => {
  return num[num.length - 1] !== "."
    ? Number(num.replace(/,/g, "")).toLocaleString()
    : num;
};
