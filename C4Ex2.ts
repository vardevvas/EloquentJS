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
        let therev = reverse(rev)
        therev.join("")
        elemnto.push(therev)
    }
    return elemnto
}
console.log(reverseElements(["cat", "dog", "house"]))