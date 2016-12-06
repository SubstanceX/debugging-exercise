// print the result of dividing the given parameters
// does it look like the programmer understands division?
function divide(numerator, denominator) {
    console.log("numerator = " + numerator);
    console.log("denominator = " + denominator);
    return numerator/denominator;
}
var answer = divide(10, 2);
console.log("answer = " + answer);
console.log("Is that answer correct?");
if (answer === 5) {
    console.log("Yes, it is correct!")
}else {
    console.log("Nope. That's wrong.")
}