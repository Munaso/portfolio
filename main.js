'use strict';


// Make navbar transparent when it is on the top

let navbar = document.getElementById('navbar');
let navbarHeight = navbar.getBoundingClientRect().height;

console.log(`navbarHeight: ${navbarHeight}`);
document.addEventListener("scroll",()=>{
  if(window.scrollY > navbarHeight) {
    navbar.style.backgroundColor = '#92CD26'
  }  
  else{
    navbar.style.backgroundColor = '';
  }
})


