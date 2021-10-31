export default function turnToObject(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i].categories] = arr[i].stocks;
  }
  return obj;
}
