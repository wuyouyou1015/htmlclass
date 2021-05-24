"using strict;"
//window.alert("connected");
function add()
{
    console.log("button clicked");
        //make sure have data
    if (document.getElementById("num1").value == ""||document.getElementById("num2").value == "")
    {
        window.alert("missing data");
    }
    else
    {
        //get num1 from text box
        var num1 = parseInt(document.getElementById("num1").value);
        console.log("num1 is "+ num1);

        //get num2 from textbox
        var num2 = parseInt(document.getElementById("num2").value);
        console.log("num2 is "+num2);
        //calculate sum
        var sum = num1+num2;
        console.log("The sum is "+sum);
        //display sum on page
        document.getElementById("sum").innerHTML = sum;
    }
}//end add

function reset(){
    //clear the textbox and the sum
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("sum").innerHTML = "0";
    
}