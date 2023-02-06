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

// Handle scrolling when tapping on the navbar menu



const navbarMenu = document.querySelector('.navbar__menu')
navbarMenu.addEventListener('click', (event)=>{
  const link = event.target.dataset.link;
  if(link == null){
    return;
  }
  console.log(event.target.dataset.link)

  const scrollMove = document.querySelector(link);
  const top = scrollMove.offsetTop - navbarHeight ;
  window.scrollTo({
    top: top, 
    behavior: 'smooth'
  });
})

// Handle click on "contact me" button on home

function scrollIntoView(selector){
  const scrollMove = document.querySelector(selector);
  const top = scrollMove.offsetTop
  window.scrollTo({
    top:top,
    behavior: 'smooth'
  });
}
const contactMeBtn = document.querySelector('.home__contact')
contactMeBtn.addEventListener('click', ()=>{
  scrollIntoView('#contact');
})

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('#home')
const homeHeight = home.getBoundingClientRect().height
document.addEventListener('scroll', ()=>{
  home.style.opacity = 1.8 - window.scrollY / homeHeight
  console.log(1 - window.scrollY / homeHeight);
})













// // locate with buttons

// // Locate home
// let location_home = document.querySelector("#navbar").offsetTop;

// const btn_home = document.querySelector('#btn_home')
// btn_home.addEventListener('click',function(){
//   window.scrollTo({left:0, top:location_home})
// })


// // Locate About
// let location_about = document.querySelector("#about");

// const btn_about = document.querySelector('#btn_about')
// btn_about.addEventListener('click',function(){
//   location_about.scrollIntoView({block:"end"})
// })



// // Locate contact
// let location_contact = document.querySelector("#contact").offsetTop;

// const btn_contact = document.querySelector('#btn_contact')
// btn_contact.addEventListener('click',function(){
//   window.scrollTo({left:0, top:location_contact})
// })

// const btn_contact2 = document.querySelector('.home__contact')
// btn_contact2.addEventListener('click',function(){
//   window.scrollTo({left:0, top:location_contact})
// })