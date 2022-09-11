let boj1 = {
    age: 23,
    hight: 160,
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
    if (a == b) {
        for (let z = 0; z < c.length; z++) {
            if (c[z].equals(d[z])) {
                isEqual = true
            }
            else {
                isEqual = false
            }
        }
    }
    else {
        isEqual = false
    }
    console.log(c[0], d[0])
    console.log(a, b, c, d)
    return isEqual
}
console.log(deepEqual(boj1, boj2))
