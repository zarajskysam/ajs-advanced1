
export default function orderByProps(obj, [value1, value2]) {
  const arr = [];
  const arr1 = [];
  for (const key in obj) {
    if (key === value1) {
      arr[0] = { key, value: obj[key] };
    } else if (key === value2) {
      arr[1] = { key, value: obj[key] };
    } else {
      arr1.push({ key, value: obj[key] });
    }
  }
  arr1.sort((prev, next) => {
    if (prev.key < next.key) return -1;
    if (prev.key > next.key) return 1;
    /* istanbul ignore next */
    return null;
  });
  const arr2 = arr.concat(arr1);
  return arr2;
}
