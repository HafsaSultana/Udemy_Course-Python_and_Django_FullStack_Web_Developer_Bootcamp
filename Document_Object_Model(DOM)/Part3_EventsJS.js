var headOne = document.querySelector('#one');
var headTwo = document.querySelector('#two');
var headThree = document.querySelector('#three');
var headFour = document.querySelector('#four');

console.log("Connected!")

headOne.addEventListener('mouseover',function (){
    headOne.textContent = "Mouse Currently Over";
    headOne.style.color = 'red';
    })

headOne.addEventListener('mouseout',function (){
    headOne.textContent = "HOVER OVER ME!";
    headOne.style.color = 'purple';
    })

headTwo.addEventListener('click',function () {
    headTwo.textContent = 'Clicked On';
    headTwo.style.color = 'blue';
})
headThree.addEventListener('dblclick',function () {
    headThree.textContent = 'I was Double Clicked';
    headThree.style.color = 'red';
})

headFour.addEventListener('dblclick',function (){
    headFour.textContent = 'Successfully submit!';
    headFour.style.color = 'green';
    })

