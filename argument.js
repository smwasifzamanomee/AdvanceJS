function add(num1, num2) {
    console.log([...arguments])

    // ...arguments is an array-like object
    // that contains all the arguments passed
    // to the function

    return num1 + num2 + arguments[2]

}

const result = add(2, 3, 5, 7)
console.log(result)
