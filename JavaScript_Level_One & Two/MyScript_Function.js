function hello(name="hafsa"){
    console.log("hello "+name);
}

function add(x,y){
    console.log(x+y);
    return x*y;
}

//Global Scope
var v = "Global V"
var stuff = "Global stuff"

function fun(stuff){
    console.log(v);
    stuff = "Reassing stuff inside func";
    console.log(stuff);
}

fun()
console.log(stuff);
