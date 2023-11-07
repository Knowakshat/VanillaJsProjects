//DOM reference
const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

//Event listener on all buttons
buttons.forEach((button) =>{
    button.addEventListener('click', function(e){
        console.log(e.target.id);
        body.style.backgroundColor = e.target.id;
    })
})
