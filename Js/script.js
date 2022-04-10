let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#userLogin-btn');
let loginForm = document.querySelector('.login-form-container');
let formCloseBtn = document.querySelector('#form-closeBtn');

//Hide search box when scroll
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}
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