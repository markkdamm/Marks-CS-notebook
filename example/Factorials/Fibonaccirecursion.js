fibonacci(1);
console.log(newnum)

function fibonacci(newnum,num) {
  newnum += num;
  num -= newnum;
}
function fibonacciposition(n){
  while(n-2>0){
  fibonacci(1,1)
  n--;
  }
}
fibonacciposition(6);
console.log(newnum)