let searchBtn=document.querySelector('#search-btn');
let searchBar=document.querySelector('.search-container');
let formBtn=document.querySelector('#login-btn');
let loginForm=document.querySelector('.login-container');
let formClose=document.querySelector('#form-close');
let menu=document.querySelector('#menu-bar');
let navBar=document.querySelector('.navbar');

window.onscroll=()=>{
    searchBtn.classList.remove('fa-times')
    searchBar.classList.remove('active')
    menu.classList.remove('fa-times')
    navBar.classList.remove('active')
    loginForm.classList.remove('active')
}

searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times')
    searchBar.classList.toggle('active')
})

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times')
    navBar.classList.toggle('active')
})


formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active')
})

formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active')
})

function videoSlider(links){
    document.querySelector(".slider").src=links
}

var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:{
        640: {
            slidesPerView:1,
        },
        768: {
            slidesPerView:2,
        },
        1024: {
            slidesPerView:3,
        },
    },
});


var swiper = new Swiper(".brand-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:{
        640: {
            slidesPerView:1,
        },
        768: {
            slidesPerView:2,
        },
        1024: {
            slidesPerView:3,
        },
    },
});