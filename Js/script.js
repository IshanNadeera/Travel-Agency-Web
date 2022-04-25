let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#userLogin-btn');
let loginForm = document.querySelector('.login-form-container');
let formCloseBtn = document.querySelector('#form-closeBtn');
let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
let imgBtn = document.querySelectorAll('.img-btn');

//Hide search box when scroll
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

//Menu View when Click Menu-icon
menu.addEventListener('click', ()=>{
    //Cross mark View
   menu.classList.toggle('fa-times');
    //show Menu
   navbar.classList.toggle('active');
});

//Search Bar View when Click Search-icon
searchBtn.addEventListener('click', () =>{
    //Cross mark View
   searchBtn.classList.toggle('fa-times');
   //show search bar
   searchBar.classList.toggle('active');
});

//Login Form View when Click Login-icon
formBtn.addEventListener('click', () =>{
    //show login form
    loginForm.classList.add('active');
});

formCloseBtn.addEventListener('click', () =>{
    //hide login form
    loginForm.classList.remove('active');
});

//Image Slider

imgBtn.forEach(btn =>{
   btn.addEventListener('click', ()=>{
      document.querySelector('.controls .active').classList.remove('active');
      btn.classList.add('active');
      let src = btn.getAttribute('data-src');
       document.querySelector('#img-slider').src = src
   });
});

//Pre Loader

let loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    loader.style.display = "none";
})