function adding(anArray, theList = {}) {
    if (anArray.length == 0) {
        return theList
    }
    else {
        theList.value = anArray[0]
        anArray.shift()
        console.log(anArray)
        theList.rest = adding(anArray, theList)

    }
}
console.log(adding([1, 2, 3]))