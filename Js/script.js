let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

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