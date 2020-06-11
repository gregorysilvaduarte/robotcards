export const sort = (a, b, parameter) => {
  if (a[parameter] > b[parameter]) {
    return 1;
  }
  if (a[parameter] < b[parameter]) {
    return -1;
  }
  return 0;
};
