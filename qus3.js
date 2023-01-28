//. Find the average of largest and smallest numbers in an unsorted integer array?
const arr = [1, 4, 3, 4];
const findMaxMin = (arr) => {
  let max = arr[0];
  let min = arr[0];
  let c = 0;
  let c1 = 0;
  let result;
  let result2;
  let avg;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (max == arr[j]) {
      c++;
    }
    if (min == arr[j]) {
      c1++;
    }
  }
  result = max * c;
  result2 = min * c1;
  avg = (result + result2) / (c + c1);
  return {
    avg,
  };
};
console.log(
  "average of largest and smallest numbers in an unsorted integer array",
  findMaxMin(arr)
);
