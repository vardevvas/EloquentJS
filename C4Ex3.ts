function adding(anArray, theList = {}) {
    if (anArray.length == 0) {
        return theList
    }
    else {
        theList.value = anArray[0]
        theList.rest = adding(anArray.shift, theList)
    }
}
console.log(adding([1, 2, 3]))