var start = prompt("Would u like to start the roster web app? y/n")
if (start == "y"){
    var my_list = [];
    while(roster!="quit") {
        var roster = prompt("Please select the action add, remove,display or quit")

        if (roster == "add") {
            // var name = prompt("What name would you like to add?")
            // my_list.push(name);
            add();
        }
        else if (roster == "remove"){
            var name = prompt("What name would you like to remove?")
            my_list = my_list.filter(item => item !== name);
        }
        else if (roster == "display") {
            console.log(my_list)
        }
        else{
            alert("check your input,will quit!")
        }
    }
}
alert("Bye,Thanks!")



// Solution of video,

function add(){
    var name = prompt("What name would you like to add?")
    my_list.push(name);
}

function remove(){
    var name = prompt("What name would you like to remove?")
    var index = my_list.indexOf(name);
    my_list.splice(index,1);
}


