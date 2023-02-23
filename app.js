function printTable() {


    var num = +prompt("Write a number whose table you want to print.");
    var times = 1
    document.write("<h2>" + num + " x " + times + " = " + num * times++ + "</h2>");
    document.write("<h2>" + num + " x " + times + " = " + num * times++ + "</h2>");
    document.write("<h2>" + num + " x " + times + " = " + num * times++ + "</h2>");
    document.write("<h2>" + num + " x " + times + " = " + num * times++ + "</h2>");
    document.write("<h2>" + num + " x " + times + " = " + num * times++ + "</h2>");
    document.write("<h2>" + num + " x " + times + " = " + num * times++ + "</h2>");
    document.write("<h2>" + num + " x " + times + " = " + num * times++ + "</h2>");
    document.write("<h2>" + num + " x " + times + " = " + num * times++ + "</h2>");
    document.write("<h2>" + num + " x " + times + " = " + num * times++ + "</h2>");
    document.write("<h2>" + num + " x " + times + " = " + num * times++ + "</h2>");
}




function calculate() {
    var num1 = +prompt("Write 1st number.");
    var operator = prompt("Write operator");
    var num2 = +prompt("Write 2nd number.");
    if (operator === "+") {
        var add = (num1 + num2);
        document.write("<h2>Addition of " + num1 + " and " + num2 + " is " + add + "</h2>")
    }
    else if (operator === "-"){
        var minus =(num1 - num2);
        document.write("<h2>Subtraction of " + num1 + " and " + num2 + " is " + minus + "</h2>")
    }
    else if (operator === "*" || operator === "x"){
        var multiply = (num1 * num2);
        document.write("<h2>Multiplication of " + num1 + " and " + num2 + " is " + multiply + "</h2>")
    }
    else if (operator === "/"){
        var divide = (num1 / num2);
        document.write("<h2>Division of " + num1 + " and " + num2 + " is " + divide + "</h2>")
    }
    else{
        document.write("<h2>something went wrong !!!</h2>")
    }
}
// function minus() {
//     var num1 = +prompt("Write 1st number.");
//     var num2 = +prompt("Write 2nd number.");
//     var ans = num1 - num2;
//     document.write("<h2>Subtraction of " + num1 + " and " + num2 + " is " + ans + "</h2>")
// }
// function multiply() {
//     var num1 = +prompt("Write 1st number.");
//     var num2 = +prompt("Write 2nd number.");
//     var ans = num1 * num2;
//     document.write("<h2>Multiplication of " + num1 + " and " + num2 + " is " + ans + "</h2>")
// }
// function divide() {
//     var num1 = +prompt("Write 1st number.");
//     var num2 = +prompt("Write 2nd number.");
//     var ans = num1 / num2;
//     document.write("<h2>Divition of " + num1 + " and " + num2 + " is " + ans + "</h2>")
// }






// num1 = 2
// num2 = 2
// var result = "sum of 2 plus 2 equals",  num1 , num2;
// console.log(result);
// console.log("sum of 2 plus 2 equals" + num1 + num2);



