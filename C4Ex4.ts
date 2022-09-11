let boj1 = {
    age: 23,
    hight: 162,
    weight: 60
}
let boj2 = {
    age: 23,
    hight: 160,
    weight: 60
}
function deepEqual(x, y) {
    let isEqual = true
    let a = Object.keys(x)
    let b = Object.keys(y)
    let c = Object.values(x)
    let d = Object.values(y)
    for (let r = 0; r < a.length; r++) {
        if (a[r] == b[r]) {
            if (c[r] != d[r]) {
                isEqual = false
            }
        }
    }
    console.log(a, b, c, d)
    return isEqual
}
console.log(deepEqual(boj1, boj2))