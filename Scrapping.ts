function countB(x) {
    let bees = 0;
    let notBee = 0;
    for (let counter = 0; counter < x.lenght - 1; counter++) {
        if (x[counter] == "B") {
            bees += 1;
        }
        if (x[counter] != "B") {
            notBee += 1;
        }
    }
    return `there are ${bees} of Bs in this string and the rest is ${notBee}`;
}
console.log(countB("Strange ! Still don't know my names s S"))