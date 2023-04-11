//Problem 1: Sleeping In
function sleepIn(weekday, vacation){
    if (weekday==false || vacation==true){
        return true;
    }
    else {
        return false;
    }

    //return(!weekday || vacation)
}

result = sleepIn(false,true);
console.log("sleepIn : "+result)

//Problem 2: Monkey Trouble
function monkeyTrouble(aSmile, bSmile){
    if(aSmile==bSmile){
        return true;
    }
    else {
        return false;
    }

    //return ((aSmile && bSmile) || (!aSmile && !bSmile))
}

result = monkeyTrouble(false,false)
console.log("monkeyTrouble : "+result)


//Problem 3: String Times

function stringTimes(str,n) {
    var s='';
    for(var i = 0; i<n; i++){
        s+=str;
    }
    return s;
}

result = stringTimes("Hi",3)
console.log("stringTimes : "+result)

//Problem 4: Lucky Sum

function luckySum(a,b,c){
    if (a==13){
        return 0;
    }
    else if(b==13){
        return a;
    }
    else if (c==13){
        return (a+b);
    }
    else{
        return (a+b+c);
    }
}

result = luckySum(1,13,3)
console.log("luckySum : "+result)


//Problem 5: Caught Speeding

function caughtSpeeding(speed, is_birthday){
    var ticket = null
    if ((is_birthday== false) && speed<=60){
        ticket = 0;
    }
    else if ((is_birthday== false) && speed>=61 && speed<=80){
        ticket = 1;
    }
    else if ((is_birthday== false) && speed>=81){
        ticket = 2;
    }
    else if ((is_birthday== true) && speed<=65){
        ticket = 0;
    }
    else if ((is_birthday== true) && speed>=66 && speed<=85){
        ticket = 1;
    }
    else if ((is_birthday == true) && speed>=86){
        ticket = 2;
    }
    return ticket;
}

result = caughtSpeeding(65,true)
console.log("caughtSpeeding : "+result)



//Bonus Problem: Make Bricks
function makeBricks(small, big, goal){
    return goal%5>=0 && goal%5-small<=0 && small+5*big>=goal;
}

result = makeBricks(3,2,10)
console.log("makeBricks : "+result)



