function range(start, end, steps = 1) {
    let theRange = []
    for (let x = start; start < end ? x <= end : x >= end; start < end ? x += steps : x -= steps) {
        theRange.push(x)
    }
    console.log(theRange)
    return sumArray(theRange)
}
function sumArray(anArray) {
    let sum = 0
    for (let elemnt in anArray) {
        sum += anArray[elemnt]
    }
    return sum
}
console.log(range(0, 10))