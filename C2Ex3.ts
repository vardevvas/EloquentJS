function board(size) {
    let line = "";
    for (let number = 0; number < size; number += 1) {
        for (let number2 = 0; number2 < size; number2 += 1) {
            if ((number + number2) % 2 == 0) {
                line += " "
            }
            else {
                line += "#"
            }
        }
        if (number < size - 1) {
            line += "\n"
        }
    }
    return console.log(line)
}
board(8)
