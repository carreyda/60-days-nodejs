export function sumArray(arr) {
  console.log(arr);
  return arr.reduce((acc, val) => acc + val, 0);
}
