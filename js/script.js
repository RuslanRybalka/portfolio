let left = document.querySelector('.left-arrow');
let right = document.querySelector('.right-arrow');
let items = document.querySelectorAll('.portfolio__item');
let current = document.querySelector('.current');
let collection = document.querySelector('.portfolio__wrapper');

left.addEventListener('click', function(e){

    e.preventDefault();
    if(!current.previousElementSibling){
        current.classList.remove('current');
        current = collection.lastElementChild;
        current.classList.add('current');
    }else{
        current.classList.remove('current');
        current = current.previousElementSibling;
        console.log(current);
        current.classList.add('current');
    }
});

right.addEventListener('click', function(e){

    e.preventDefault();
    if(!current.nextElementSibling){
        current.classList.remove('current');
        current = collection.firstElementChild;
        current.classList.add('current');
    }else{
        current.classList.remove('current');
        current = current.nextElementSibling;
        current.classList.add('current');
    }
});

