function range(beginning, end, steps = 1) {
    let theRange = []
    if (end > beginning) {
        for (let x = beginning; x <= end; x += steps) {
            theRange.push(x)
        }
        console.log(theRange)
        return sumArray(theRange)
    }
    else if (steps < 0) {
        for (let x = beginning; x >= end; x += steps) {
            theRange.push(x)
        }
        console.log(theRange)
        return sumArray(theRange)
    }
    else {
        for (let x = beginning; x >= end; x -= steps) {
            theRange.push(x)
        }
        console.log(theRange)
        return sumArray(theRange)
    }
}
function sumArray(anArray) {
    let sum = 0
    for (let elemnt in anArray) {
        sum += anArray[elemnt]
    }
    return sum
}
console.log(range(10, 0, 2))