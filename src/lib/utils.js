export const removeCommas = qty => Number(qty.replace(/,/g, ""));

export const formatNumber = qty => {
  return qty[qty.length - 1] !== "." ? removeCommas(qty).toLocaleString() : qty;
};
