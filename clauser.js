function num(){
    let count = 0
    return function(){
        count++;
        return count
    }
}

const result = num()
console.log(result())
console.log(result())
console.log(result())

const result1 = num()
console.log(result1())
console.log(result1())
console.log(result1())