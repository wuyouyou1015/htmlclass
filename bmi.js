"using strict;"
function calcBMI () {
//get height in feet, height in inches, weight from form and store in 3 variables feet, inches, weight
var feet=Number(document.getElementById("heightft").value);
var inch=Number(document.getElementById("heightin").value);
var weight=Number(document.getElementById("weight").value);
//convert height in feet and inches to total inches and store in another variable height
var height=(feet*12)+inch;
height/=39.3700787;
weight/=2.20462;
//calculate bmi using the formula, store in a variable called bmi
var BMI=weight/Math.pow(height,2);
document.getElementById("output").innerHTML=BMI;
}