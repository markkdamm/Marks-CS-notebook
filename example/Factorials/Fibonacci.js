let num = 1;
let newnum = 1;
function fibonacci(n) {
  while (n - 2 > 0) {
    newnum += num;
    num = newnum - num;
    n--;
  }
  return newnum;
}
console.log(fibonacci(8))

