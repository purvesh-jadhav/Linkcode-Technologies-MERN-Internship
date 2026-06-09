for (let i = 1; i <= 7; i++) {
    let row = "";

    for (let j = 1; j <= 5; j++) {
        if (
            j == 1 ||
            (i == 1 && j < 5) ||
            (i == 4 && j < 5) ||
            (j == 5 && i > 1 && i < 4)
        ) {
            row += "* ";
        } else {
            row += "  ";
        }
    }

    console.log(row);
}