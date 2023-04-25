var a = window.prompt("Type a month number(1-12)");
var a = parseInt(a);
function months(number, month){
    this.number = number;
    this.month = month;
}
var months = [
    new months("1", "January"),
    new months("2", "February"),
    new months("3", "March"),
    new months("4", "April"),
    new months("5", "May"),
    new months("6", "June"),
    new months("7", "July"),
    new months("8", "August"),
    new months("9", "September"),
    new months("10", "October"),
    new months("11", "November"),
    new months("12", "December"),
    
]
if (a <1 || a > 12){
    alert("Enter a number between 1 and 12")
}else{
    console.log("The month number:", months[a-1].number ,".The month:", months[a-1].month)
}
