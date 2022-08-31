function isEven(x) {
    if (x == 1) {
        return '${x} is odd'
    }
    else if (x == 0) {
        return '${x} is even'
    }
    else if (x < 0) {
        return "do not input negative numbers"
    }
    else {
        return isEven(x - 2)
    }
}
console.log(isEven(-1))