const fs = require("fs");
const prompt = require("prompt-sync")();

while (true) {

    console.log("\n1. Insert");
    console.log("2. Display");
    console.log("3. Update");
    console.log("4. Delete");
    console.log("5. Exit");

    let ch = prompt("Enter Choice : ");

    if (ch == 1) {

        let roll = prompt("Roll : ");
        let name = prompt("Name : ");
        let marks = prompt("Marks : ");

        fs.appendFileSync("student.txt", roll + "," + name + "," + marks + "\n");

        console.log("Added");

    } else if (ch == 2) {

        let data = fs.readFileSync("student.txt", "utf8");

        console.log(data);

    } else if (ch == 3) {

        let roll = prompt("Enter Roll : ");
        let name = prompt("New Name : ");
        let marks = prompt("New Marks : ");

        let data = fs.readFileSync("student.txt", "utf8");

        let student = data.split("\n");

        for (let i = 0; i < student.length; i++) {

            let d = student[i].split(",");

            if (d[0] == roll) {

                student[i] = roll + "," + name + "," + marks;
            }
        }

        fs.writeFileSync("student.txt", student.join("\n"));

        console.log("Updated");

    } else if (ch == 4) {

        let roll = prompt("Enter Roll : ");

        let data = fs.readFileSync("student.txt", "utf8");

        let student = data.split("\n");

        let arr = [];

        for (let i = 0; i < student.length; i++) {

            let d = student[i].split(",");

            if (d[0] != roll) {

                arr.push(student[i]);
            }
        }

        fs.writeFileSync("student.txt", arr.join("\n"));

        console.log("Deleted");

    } else if (ch == 5) {

        break;

    } else {

        console.log("Wrong Choice");
    }
}