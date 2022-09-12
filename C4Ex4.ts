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
    if (count == Object.keys(boj1).length - 1) {
        return isEqual
    }
    else {
        if (Object.keys(boj1)[count] == Object.keys(boj2)[count]) {
            if (boj1[Object.keys(boj1)[count]] == boj2[Object.keys(boj1)[count]]) {
                return deepEqual2(x, y, count + 1)
            }
            else {
                return isEqual = false
            }
        }
        else {
            return isEqual = false
        }
    }
}
console.log(deepEqual2(boj1, boj2))