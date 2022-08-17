// O(1)
console.log("Hi I'm Mark") // O(1)
console.log("Hi" + " " + "I'm" + " " + "Mark") // O(1)

// O(n)
let animals = ["Bear", "Squirrel", "Girafe"]

for(const x in animals){ //O(n)
  
console.log(animal[x]) // O(1)
  
}

// O(n^2)
let animal = ["Bear", "Squirrel", "Girafe"]

for(const x in animal){      //O(n*n) ---> O(n^2)
 
   for(const x in animal){   //O(n)
   console.log(animal[x]) 
   }
}

// O(log(n)) [solution: Binary Search]

let arr = [-2,3,4,7,8,9,11,13];
const target = 11;

let found = false;
let startpoint = arr.length/2;
while(found === false) {

if(arr[startpoint]>target){
  console.log('smaller')
  arr = arr.slice(0,startpoint);
  startpoint = arr.length/2
}else if(arr[startpoint] < target){
   console.log('bigger')
 arr = arr.slice(startpoint,arr[arr.lenght + 1]);
 startpoint = arr.length/2
}else if(arr[startpoint] === target){ 
 console.log('this is target')
 found=true
}}