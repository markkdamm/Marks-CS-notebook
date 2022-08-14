// O(1)
console.log("Hi I'm Mark") // O(1)
console.log("Hi" + " " + "I'm" + " " + "Mark") // O(1)

// O(n)
let animals = ["Bear", "Squirrel", "Girafe"]

for(const x in animals){ //O(n)
  
console.log(animal[x]) // O(1)
  
}

// O(n^2)
let animals = ["Bear", "Squirrel", "Girafe"]

for(const x in animals){      //O(n*n) ---> O(n^2)
 
   for(const x in animals){   //O(n)
   console.log(animal[x]) 
   }
}

// O(log(n)) [solution: Binary Search]
