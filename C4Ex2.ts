function reverse(anArray) {
    let reversedArray = []
    for (let elemnt of anArray) {
        reversedArray.unshift(elemnt)
    }
    return reversedArray
}
function reverseElements(elemntArray) {
    let elemnto = []
    for (let elemnt of elemntArray) {
        let rev = elemnt.split("")
        rev = reverse(rev)
        rev = rev.join("")
        elemnto.push(rev)
    }
    return elemnto
}
console.log(reverseElements(["cat", "dog", "house"]))