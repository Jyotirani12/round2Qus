const arr = [2, 2, 2, 2, 2];
const findMaxMin = (arr) => {
  let total = 0;
  let n = arr.length;
  let avg;
  let count = 0;

  for (var i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }

  avg = total / n;
  for (let j = 0; j < arr.length; j++) {
    if (avg == arr[j]) {
      count = count + 1;
    }
  }

  return {
    count,
  };
};
console.log("The value get as avg occurs", findMaxMin(arr), "times");
