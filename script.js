function compute()
{
    var principal = document.getElementById("principal"); //var principal for if
    if (principal.value <= 0) {
        alert("Please enter a positive number");
        principal.focus(); 
        return false;
    } else
    var principal = document.getElementById("principal").value; //var principal for result
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years); //local time.only year plus years chosen
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,<br> at an interest rate of <mark>"+rate+"%<br></mark> You will receive an amount of <mark>"+interest+"</mark>,<br> in the year <mark>"+year+"</mark>.";
    
}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
/*
function movetoinput() {
    var toinput = document.getElementById("selection").value;
    document.getElementById("years").innerHTML =toinput;
}
*/