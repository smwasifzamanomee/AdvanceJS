const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const array1 = [1, 2, -3, 4, 5, -6, 7, -8, 9]


for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element > 5) {
        break
    }

    console.log("result:",element)
}

for (let i = 0; i < array1.length; i++) {
    const element = array1[i];

    if (element > 5) {
        continue
    }

    console.log("result1:",element)
}