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
    let newArray = []
    while (aList != null) {
        newArray.push(aList.value)
        aList = aList.rest
    }
    return newArray
}
function prepend(element, list) {
    let theList = {}
    theList.value = element
    theList.rest = list
    return theList
}
function nth(list, position) {
    let x = 0
    if (x == position) {
        return list.value
    }
    else {
        return nth(list.rest, position - 1)
    }
}
console.log(prepend(10, prepend(20, null)));
console.log(listToArray(arrayToList([1, 2, 3])))
console.log(nth(arrayToList([1, 2, 3]), 1))