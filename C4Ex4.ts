let boj1 = {
    age: 23,
    hight: 162,
    weight: 60
}
let a = Object.keys(boj1)
console.log(boj1.a[0])
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
function deepEqual2(x, y, count = 0) {
    let isEqual = true
    let a = Object.keys(x)
    let b = Object.keys(y)
    let c = Object.values(x)
    let d = Object.values(y)
    if (count = a.length - 1) {
        return isEqual
    }
    else {
        if (a[count] == b[count]) {
            if (c[r] != d[r]) {
                isEqual = false
            }
        }
    }
}
// console.log(Object.values(o))
