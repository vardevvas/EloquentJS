function countBs(stringx) {
    let theBs = 0;
    let nottheBs = 0;
    for (let count = 0; count < stringx.length; count++) {
        if (stringx[count].toLowerCase() == "s") {
            theBs += 1;
        }
        if (stringx[count].toLowerCase() != "s") {
            nottheBs += 1;
        }
    }
    return `there are ${theBs} of Bs in this string and the rest is ${nottheBs}`
}
console.log(countBs("Strange ! Still don't know my names s S")) 