function adding(anArray, theList = {}) {
    console.log(anArray)
    theList.value = anArray[0]
    anArray.shift()
    if (anArray.length == 0) {
        theList.rest = null
        return theList
    }
    else {
        return theList.rest = adding(anArray)
    }
}
console.log(adding([1, 2, 3]))