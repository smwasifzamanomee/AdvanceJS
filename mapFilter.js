const arr = [3, 5, 6, 8, 9]

// const output = []

// for(let i=0; i < arr.length; i++){
//     element = arr[i]
//     const result = element * element
//     output.push(result)
// }

// console.log(output)

const result = arr.map((element) => element * element)
console.log(result)

const result1 = arr.filter((element) => element > 5)
console.log(result1)

const result2 = arr.find((element) => element < 5)
console.log(result2)