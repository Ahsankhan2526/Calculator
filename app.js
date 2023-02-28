function printTable() {
    var tableSpanElement = document.querySelector(".table-span");
    var num = +prompt("Write a number whose table you want to print.");
    var times = 1
    var l1 = "<h2>" + num + " x " + times + " = " + num * times++ + "</h2>";
    var l2 = "<h2>" + num + " x " + times + " = " + num * times++ + "</h2>";
    var l3 = "<h2>" + num + " x " + times + " = " + num * times++ + "</h2>";
    var l4 = "<h2>" + num + " x " + times + " = " + num * times++ + "</h2>";
    var l5 = "<h2>" + num + " x " + times + " = " + num * times++ + "</h2>";
    var l6 = "<h2>" + num + " x " + times + " = " + num * times++ + "</h2>";
    var l7 = "<h2>" + num + " x " + times + " = " + num * times++ + "</h2>";
    var l8 = "<h2>" + num + " x " + times + " = " + num * times++ + "</h2>";
    var l9 = "<h2>" + num + " x " + times + " = " + num * times++ + "</h2>";
    var l10 = "<h2>" + num + " x " + times + " = " + num * times++ + "</h2>";

    tableSpanElement.innerHTML = l1+l2+l3+l4+l5+l6+l7+l8+l9+l10
}




function calculate() {
    var DMASSpanElement = document.querySelector(".DMAS-span")
    var num1 = +prompt("Write 1st number.");
    var operator = prompt("Write operator" , "use only + - / *");
    var num2 = +prompt("Write 2nd number.");
    DMASSpanElement.style.fontSize = "30px";
    DMASSpanElement.style.backgroundColor = "darkgray";
    DMASSpanElement.style.color = "green";
    // DMASSpanElement.style.width = "500px";
    // DMASSpanElement.innerHTML.style.paddingLeft = "10px";
    

    if (operator === "+") {
        var add = (num1 + num2);
        // add.style.backgroundColor = "green" 
        DMASSpanElement.innerHTML = "<h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Addition of " + num1 + " and " + num2 + " is " + add + "</h2>"
    }
    else if (operator === "-"){
        var minus =(num1 - num2);
        DMASSpanElement.innerHTML = "<h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subtraction of " + num1 + " and " + num2 + " is " + minus + "</h2>"
    }
    else if (operator === "*" || operator === "x"){
        var multiply = (num1 * num2);
        DMASSpanElement.innerHTML = "<h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Multiplication of " + num1 + " and " + num2 + " is " + multiply + "</h2>"
    }
    else if (operator === "/"){
        var divide = (num1 / num2).toFixed(2);
        DMASSpanElement.innerHTML = "<h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Division of " + num1 + " and " + num2 + " is " + divide + "</h2>"
    }
    else{
        DMASSpanElement.innerHTML = "<h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;something went wrong !!!</h2>"
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
    else if(userPercentage > 85){
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
    UserHeight = UserHeight/100
    var UserHeightSqr = UserHeight ** 2;
    var weightKG = +prompt("Write your age in kilograms.")
    var BMIValue = (weightKG/UserHeightSqr).toFixed(2);
    var h2Element = document.querySelector(".abc");


    if(BMIValue >= 30){
        h2Element.innerHTML = "Your BMI is " + BMIValue + " and falls within the obesity range."

    }
    else if (BMIValue >=25){
        h2Element.innerHTML = "Your BMI  is " + BMIValue + " and falls within the overweight range.";
    }
    else if (BMIValue >=18.5){
        h2Element.innerHTML = "Your BMI  is " + BMIValue + " and falls within the healthy weight range.";
    }
    else {
        h2Element.innerHTML = "Your BMI  is " + BMIValue + " and falls within the underweight range.";
    }

    // console.log(UserHeight);
    // console.log(UserHeightSqr);

}