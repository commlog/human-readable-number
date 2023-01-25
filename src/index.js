module.exports = function toReadable (number) {
    var numberList = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    var tensList = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    var result = "";
  
    if (number < 0) {
        return "negative " + toReadable(-number);
    }
    if (number < 20) {
        return numberList[number];
    }
    if (number < 100) {
        return tensList[Math.floor(number / 10)] + (number % 10 ? " " + toReadable(number % 10) : "");
    }
    if (number < 1000) {
        return numberList[Math.floor(number / 100)] + " hundred" + (number % 100 ? " " + toReadable(number % 100) : "");
    }
    if (number < 1000000) {
        return toReadable(Math.floor(number / 1000)) + " thousand" + (number % 1000 ? " " + toReadable(number % 1000) : "");
    }
    if (number < 1000000000) {
        return toReadable(Math.floor(number / 1000000)) + " million" + (number % 1000000 ? " " + toReadable(number % 1000000) : "");
    }
    return "number too large";
}
