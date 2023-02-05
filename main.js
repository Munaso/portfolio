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


// // Handle scrolling when tapping on the navbar menu
// const navbarMenu = document.querySelector('.navbar__menu')
// navbarMenu.addEventListener('click', (event)=>{
//   const link = event.target.dataset.link;
//   if(link == null){
//     return;
//   }
//   console.log(event.target.dataset.link)

//   const click_target = document.querySelector(link)
//   click_target.scrollIntoView({behavior: "smooth"})
// })

// 어디서 본거
const navbarMenu = document.querySelector('.navbar__menu')
navbarMenu.addEventListener('click', (event)=>{
  const link = event.target.dataset.link;
  if(link == null){
    return;
  }
  const scrollMove = document.querySelector(link);
  const top = scrollMove.offsetTop - navbarHeight ;  
  const left = scrollMove.offsetLeft;
  window.scrollTo({
    top:top,
    behavior: 'smooth'
  });
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