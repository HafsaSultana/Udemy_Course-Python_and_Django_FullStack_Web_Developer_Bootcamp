//Problem 1
var employee = {
    name: "Hafsa Sultana",
    job: "Programmer",
    age: 31
}
console.log(employee["name"].length);
//console.log(this.name.length);

//Problem 2
employee = {
    name: "Hafsa Sultana",
    job: "Programmer",
    age: 31,
    report: function (){
        alert("Name is "+this.name+", Job is "+this.job+", Age is "+this.age+".");
    }
}


//Problem 3
employee = {
    name: "Hafsa Sultana",
    job: "Programmer",
    age: 31,
    lastName: function (){
        console.log("Employee's last name: "+this.name.split(" ")[1]);
    }
}
