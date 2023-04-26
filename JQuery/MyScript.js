//EVENTS:
//Click()
$('h1').click(function (){
   // console.log('There is a click!')
    $(this).text('It changed!')
})

$('li ').click(function (){
    console.log('any li is clicked  !')
     $(this).text('Li is changed!')
})


//Key Press
$('input').eq(0).keypress(function (event){
   // $('h3').toggleClass('turnBlue');
    console.log(event);
    if (event.which === 13){
         $('h3').toggleClass('turnBlue');
    }
})


//on()
$('h2').on('mouseenter',function (){
    $(this).toggleClass('turnBlue');
})


//Animation
$('input').eq(1).on('click',function (){
    //$('.container').fadeOut(30);
    //$('.container').slideUp(3000);
    $('.container').slideToggle(3000);
})







