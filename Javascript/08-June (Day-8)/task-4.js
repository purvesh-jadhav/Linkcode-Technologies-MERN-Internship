var num = 1;

while (num <= 10) {
    console.log(num);
    num++;
}

console.log("----------------------");


var rev = 10;

while (rev > 0) {
    console.log(rev);
    rev--;
}

console.log("----------------------");


var total = 0;
var count = 1;

while (count <= 10) {
    total = total + count;
    count++;
}

console.log("Total = " + total);

console.log("----------------------");


var number = 5;
var result = 1;
var j = 1;

while (j <= number) {
    result *= j;
    j++;
}

console.log("Factorial of " + number + " = " + result);