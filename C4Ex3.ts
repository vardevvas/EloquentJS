function arrayToList(anArray) {
    if (anArray.length == 1) {
        let theList = {}
        theList.value = anArray.shift()
        theList.rest = null
        return theList
    }
    else {
        let theList = {}
        theList.value = anArray.shift()
        theList.rest = arrayToList(anArray)
        return theList
    }
}
function listToArray(aList) {
    for (let anArray = aList; anArray; anArray = aList.rest) {
        anArray.push(aList.value)
    }
}
console.log(arrayToList([1, 2, 3]))
console.log(listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }))
