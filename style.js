
// Start Js Nav
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
let menue = document.getElementById("#btnMenue");
function btn(){
    menue.onclick.display = "flex"
}
// Start Box Search 
let searchBox =  document.querySelector('#btn-search');
let divSearchBox = document.querySelector('.box-search')
let btnExit = document.querySelector('.exit')
searchBox.onclick = () =>{
    divSearchBox.style.display = "flex";
    onclick({
        behavior: "smooth"
    })
}
btnExit.onclick = () =>{
    divSearchBox.style.display = "none";
    divSearchBox.onclick({
        behavior: "smooth"
    })
}
// Initialize Swiper 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
    },
    768: {
        slidesPerView: 4,
        spaceBetween: 40,
    },
    1024: {
        slidesPerView: 5,
        spaceBetween: 50,
    },
    },
});
// Start Button UP and Start header bg
var mybotton = document.getElementById('goup');
let header = document.querySelector("#header");
let links = document.querySelectorAll(".navbar a")

window.onscroll = function () {
    'user strict';
    if (window.pageYOffset >= 1000){
        mybotton.style.display = "block";        
    }
    else{
        mybotton.style.display = "none";        
    }

    'user strict';
    if(window.scrollY >= 600){
        header.style.background = "rgb(74 96 161 / 52%)";
        header.style.backdropfilter = "blur(10px)"
        header.style.borderBottom = "2px solid rgb(74 96 161 / 80%)"
    }
    else{
        header.style.background = "none"
    }
};
mybotton.onclick = function () {
    'user strict';

    window.scrollTo({
        top: 0,       
        behavior: "smooth",
    });
}
// Start Section More
// let loadMoreBtn = document.querySelector('#btn-more');
// let currentItem = 3;
// loadMoreBtn.onclick = () =>{
//     'user strict';
//     let boxs = [...document.querySelectorAll('.container .box')]
//     for (var i = currentItem; i < currentItem + 3; i++){
//         boxs[i].style.display = 'inline-block';
//     }
//     currentItem += 3;

//     if (currentItem >= boxs.length){
//         loadMoreBtn.style.display = "none"
//     }
// }






