let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-3')

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');


    if (window.scrollY > 250) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}



// ----------------------------carousel---------------------------

var photos = ["media/carousel-1l.jpg" , "media/carousel-2.jpg", "media/carousel-3.jpg" ];

var imgTag = document.querySelector("img");

var count = 0;

var myVar = setInterval(next, 5000);

function next(){
    count++
    if(count >= photos.length){
        count=0;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src =photos[count]; 
    }
    
}

function prev(){
    count--

    if(count < 0){
        count = photos.length - 1;
        imgTag.src = photos[count];
        
    }
    else{
        imgTag.src =photos[count]; 
    }
}