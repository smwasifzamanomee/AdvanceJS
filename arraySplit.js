const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const result = array.slice(2, 5)
console.log(result)

const result1 = array.splice(3, 3, 10, 11, 12)
console.log(result1)

console.log(array)

const result2 = array.join(' ')
console.log(result2)
