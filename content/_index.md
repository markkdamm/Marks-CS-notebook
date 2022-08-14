# Data structures & Algorithms

Data structures are ways to store data, your code's performance depends on two variables, how long an algorithm takes to run *time complexity* or how much memory is used by an algorithm *space complexity* in order it we use big O notation. This can be represented in a graph as a mathematical function as shown below, 

![Big O notation](https://i0.wp.com/dotnetsimplified.com/wp-content/uploads/2021/10/image-6.png "Big O notation graph")

# O(1)
Takes the same amount of time no mater the size of the dataset, this operations take a certain amount of space no matter how much data we process. the amount of time and apce complexity are fixed.

```javascript
console.log("Hi I'm Mark") // O(1)
console.log("Hi" + " " + "I'm" + " " + "Mark") // O(1)
```

# O(n)

Takes the time and space complexity according to the amount of data, for example if we iterate an array through a for loop depending on the size of it, it will take more or less time depending on the size of the array

```javascript
let animals = ["Bear", "Squirrel", "Girafe"]
for(const x in animals){ //O(n)
console.log(animal[x]) // O(1)
}
```

# O(n^2)

Takes twice the time and space complexity according to the amount of data, for example if we iterate an array through a for loop inside another for loop depending on the size of it, it will take twice the time. this is what big O is used for, to calculate and optimize algorithms.

```javascript
let animals = ["Bear", "Squirrel", "Girafe"]
for(const x in animals){      //O(n*n) ---> O(n^2)
   for(const x in animals){   //O(n)
   console.log(animal[x]) 
   }
}
```

# O(log(n))

Takes half the time