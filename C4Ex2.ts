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
        let parameterss = []
        for (let theElement of elemnt) {
            parameterss.unshift(theElement)
        }
        parameterss.join("")
        elemnto.push(parameterss)
    }
    return elemnto
}
console.log(reverseElements(["cat", "dog", "house"]))