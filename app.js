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
    var operator = prompt("Write operator" , "use only + - / *");
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










function gradeTeller(){
    var userPercentage = +prompt("Write your percentage");
    var spanElement = document.querySelector(".grade");
    spanElement.style.fontSize = "32px"
    spanElement.style.fontWeight = "bold"
    spanElement.style.padding = "7px 10px"

    if (userPercentage > 100){
        spanElement.innerHTML = "You can not write number gretter than 100"
        
    }
    if(userPercentage > 85){
        spanElement.innerHTML = 'You have gotten A+ grade'
        spanElement.style.backgroundColor = "Green"
        spanElement.style.color = "white"
    }    

    else if(userPercentage > 75){
        spanElement.innerHTML = 'You have gotten A grade'
        spanElement.style.backgroundColor = "#2cd85d"
        spanElement.style.color = "white"
    }

    else if(userPercentage > 60){
        spanElement.innerHTML = 'You have gotten B grade'
        spanElement.style.backgroundColor = "#7aaf89"
        spanElement.style.color = "white"
    }

    else if(userPercentage > 45){
        spanElement.innerHTML = 'You have gotten C grade'
        spanElement.style.backgroundColor = "#5f7e68"
        spanElement.style.color = "white"
    }
    
    else if(userPercentage >= 33){
        spanElement.innerHTML = 'You have gotten D grade'
        spanElement.style.backgroundColor = "#534d4d"
        spanElement.style.color = "white"
    }

    else{
        spanElement.innerHTML = 'You are fail. parhtay q nahi ho tm.'
        spanElement.style.backgroundColor = "red"
        spanElement.style.color = "white"
    }
}












function BMI(){
    var UserHeight = +prompt("Write your height in Centimeters only.");
    var UserHeightSqr = UserHeight ** 2;
    var weightKG = +prompt("Write your age in kilograms.")
    var BMIValue = weightKG/UserHeightSqr;
    var h2Element = document.querySelector(".abc");


    if(BMIValue >= 30){
        h2Element.innerHTML = "Your BMI falls within the obesity range."

    }
    else if (BMIValue >=25){
        h2Element.innerHTML = "Your BMI falls within the overweight range.";
    }
    else if (BMIValue >=18.5){
        h2Element.innerHTML = "Your BMI falls within the healthy weight range.";
    }
    else {
        h2Element.innerHTML = "Your BMI falls within the underweight range.";
    }

    // console.log(UserHeight);
    // console.log(UserHeightSqr);

}