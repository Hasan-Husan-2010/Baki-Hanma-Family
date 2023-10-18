let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let allslides = document.querySelectorAll('.slide');

function changedot(route, num){
    let activedot = document.querySelector('.active');
    activedot.classList.remove('active');

    if(route === 'prev'){
        if(num === 0){
            dots[dots.length-1].classList.add('active');
        } else {
            dots[num - 1].classList.add('active');
        }
    } else if(route === 'next') {
        if(num === dots.length-1){
            dots[0].classList.add('active');
        } else {
            dots[num + 1].classList.add('active');
        }
    }
}

function Slide(){
    let openelement = document.querySelector('.open');
    let index = Number(openelement.dataset.id);
    openelement.classList.remove('open');

    if(index === allslides.length-1){
        allslides[0].classList.add('open');    
    } else {
        allslides[index + 1].classList.add('open');
    }
    changedot('next', index);
}

next.addEventListener('click',Slide);
setInterval(Slide, 3500);

prev.addEventListener('click', function(){
    let openelement = document.querySelector('.open');
    let index = Number(openelement.dataset.id);
    openelement.classList.remove('open');

    if(index === 0){
        allslides[allslides.length-1].classList.add('open');  
    } else {
        allslides[index - 1].classList.add('open');
    }
    changedot('prev', index);
});

let boxdiv = document.querySelector('.dots');
let dots = document.querySelectorAll('.dot');

boxdiv.addEventListener('click', function(evt){
    if(evt.target.matches('.dot')){
        let k = Number(evt.target.dataset.num);

        let openelement = document.querySelector('.open');
        openelement.classList.remove('open');

        let activedot = document.querySelector('.active');
        activedot.classList.remove('active');

        allslides[k].classList.add('open'); 
        dots[k].classList.add('active');
    }
});