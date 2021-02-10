// Adding Class Active On Links That Been Clicked
let links = document.getElementsByClassName("nav-link");

for(i=0; i < links.length; i++){
    links[i].addEventListener('click', function() {
        this.classList.add()
    });
}

// Changing Brand-Logo When The Navigation is Fixed
window.onscroll = function () {
    let nav = document.querySelector('.navbar'),
        logo = document.getElementById('logo');

    if (window.scrollY >= 200) {
        nav.classList.add('nav-fixed');
        logo.setAttribute('src', 'images/logo/logo-dark.png');
    } else{
        nav.classList.remove('nav-fixed');
        logo.setAttribute('src', 'images/logo/logo-light.png');
    }
    
    if (window.scrollY >= 2000) {
        projectsCount();
        clientsCount();
    }
}

// Owl Carousel Settings
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 10,
        nav:false,
        autoplay:true,
        autoplayTimeout: 1500,
        autoplayHoverPause:true,
        dots: false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
  });


// Count The Number OF Clients & Projects
function projectsCount() {
    var projects = document.getElementById('projects-number');
    let p = 0;
    let projectsInter = setInterval(function () {
        p += 1;
        if (projects.innerHTML == 20) {
            clearInterval(projectsInter);
            if (p >= 20 + 1) {
                clearInterval(projectsInter)
            } 
        } else{
            projects.innerHTML = p;
        }
        }, 100);
}

function clientsCount() {
    var Clients = document.getElementById('clients-number');
    let x = 0;
    let clientsInter = setInterval(function () {
        x += 1;
        if (Clients.innerHTML == 1200) {
            clearInterval(clientsInter);
            if (x >= 20 + 1) {
                clearInterval(clientsInter)
            } 
        } else{
            Clients.innerHTML = x;
        }
        }, 1);
}

// Adding Twister Class To Price Table
let price = document.querySelectorAll('#card'),
    twister = document.getElementById('indicator'),
    cardBody = document.querySelectorAll('#card-body'),
    cardList = document.querySelectorAll('#card-ul');

twister.onclick = function () {
    if (twister.previousElementSibling.className === 'trigger'){
        twister.previousElementSibling.classList.remove('trigger');
        twister.nextElementSibling.classList.add('trigger');
    } else{
        twister.previousElementSibling.classList.add('trigger');
        twister.nextElementSibling.classList.remove('trigger');
    }
    price.forEach(element => {
        if (element.className === 'card twist') {
            element.classList.remove('twist');
        } else{
            element.classList.add('twist');
        }
    });
    cardBody.forEach(element => {
        if (element.className === 'card-body') {
            element.classList.add('twist');
        } else{
            element.classList.remove('twist');
        }
    });
    cardList.forEach(element => {
        if (element.className === 'list-group list-group-flush') {
            element.classList.add('twist');
        } else{
            element.classList.remove('twist');
        }
    });
}

// Creating Slider For Testimonials
let slideItem = document.querySelectorAll('#item'),
    slideNext = document.getElementById('next'),
    slidePrev = document.getElementById('prev');

slideNext.onclick = function () {
    slideItem.forEach(element => {
        element.classList.remove('active');
        element.nextElementSibling.classList.add('active')
        
        console.log(element);
        console.log(element.nextElementSibling.className === 'quotes')
    });
}

/*== Intersection Observer ==*/
const call = function (entries) {
    if (entries[0].isIntersecting === false) {
        return;
    } else{
        entries[0].target.style.opacity = "1";
    }
}
const observe = new IntersectionObserver(call, {
    threshold: 0.7
});

let sections = document.querySelectorAll(".section");
sections.forEach(element => {
    observe.observe(element)
    console.log(element)
});
/*== Intersection Observer ==*/
