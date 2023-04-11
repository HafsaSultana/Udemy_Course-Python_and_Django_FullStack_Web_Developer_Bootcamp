var fname = prompt("Welcome to Here!! Enter your Frist Name: ");
var lname = prompt("Enter your Last Name: ");
var age = prompt("Enter your Age: ");
var tall = prompt("Enter your Height(cm): ");
var pet = prompt("Enter your Pet Name: ");
alert("Thank you so much for the information!")


if((fname[0]==lname[0]) && (age>20 && age<30) && (tall>=170) && (pet[pet.length-1]=='y'))
{
    console.log("Welcome Comrade! You've passed the Spy Test.");
}
else{
    console.log("Sorry! nothing to see here.");
}







