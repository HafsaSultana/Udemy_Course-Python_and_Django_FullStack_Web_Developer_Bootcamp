//While loop
var x =0;

while (x<5){
    console.log("x is currently: "+x);

    if (x==3){
        console.log("X is equal to Three");
        break;
    }
    console.log("x is still less than 5, adding 1 to x");

    x=x+1;
}
console.log("");

//Even number print
 var x=0;

 while(x<=10){
    if(x%2==0){
        console.log(x+" is even number!");
    }
    x=x+1
 }
 console.log("");


 //For loop
for(var num = 0; num<5; num++){
    console.log("Number is : "+num);
}
 console.log("");


// Another Example - letter in word

var word="ABCDEFGHIJK"
for (var i=0; i<word.length;i++){
    console.log(word[i]);
}
console.log("");

//
var word="ABABABABABAB"
for (var i=0; i<word.length;i=i+2){
    console.log(word[i]);
}
console.log("");




