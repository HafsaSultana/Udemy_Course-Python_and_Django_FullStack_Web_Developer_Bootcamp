var p1Name = prompt("Player One: Enter your Name, you will be Blue. ");
var p2Name = prompt("Player Two: Enter your Name, you will be Red. ");
i=0;
j=5;
$('h3').text(p1Name+': It is your turn, please pick a column to drop your Blue chip.');

$('td').click(function (){
    console.log(i,j,' -- There is a click!')

    if (i%2!==0){
       $('h3').text(p1Name+': It is your turn, please pick a column to drop your Blue chip.');
       $('.board button').eq((i%7)+j*7).css('background','orange');
   }
    else{
       $('h3').text(p2Name+': It is your turn, please pick a column to drop your Red chip.');
       $('.board button').eq((i%7)+j*7).css('background','skyblue');
   }
    i++;
    if (i % 7 == 0) {
        j = j - 1;
    }

})
