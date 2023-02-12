'use strict';


// Make navbar transparent when it is on the top
let navbar = document.getElementById('navbar');
let navbarHeight = navbar.getBoundingClientRect().height;
console.log('navbarHeight:'+ navbarHeight)
document.addEventListener("scroll",()=>{
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  }  
  else{
    navbar.classList.remove('navbar--dark');
  }
})


// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu')
navbarMenu.addEventListener('click', (event)=>{
  const link = event.target.dataset.link;
  if(link == null){
    return;
  }
  navbarMenu.classList.remove('open');


  const scrollMove = document.querySelector(link);
  const top = scrollMove.offsetTop - navbarHeight ;
  window.scrollTo({
    top: top, 
    behavior: 'smooth'
  });
})

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');

navbarToggleBtn.addEventListener('click', ()=> {
  navbarMenu.classList.toggle('open');
  navbar.classList.toggle('open');
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
  home.style.opacity = 1.5 - window.scrollY / homeHeight
})

// show arrow-up button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{
  if(window.scrollY > homeHeight / 2  ){
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
})

// handle click on the "arrow up" button
arrowUp.addEventListener('click', ()=>{
  console.log('11')
  scrollIntoView('#home');
  
})

// organize project list with buttons
const work__categories = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project')


work__categories.addEventListener('click', (event)=>{
  const filter = event.target.dataset.filter
  if(filter == null){
    return;
  }

  // Remove selection from previous item and select a new one
  const selected = document.querySelector('.category__btn.selected')
  selected.classList.remove('selected')
  event.target.classList.add('selected')

  console.log(filter)

  projectContainer.classList.add('anim-out');  
  setTimeout(() => {
    projects.forEach(project => {
      if(filter === '*' || filter === project.dataset.type){
        project.classList.remove('hide')
      } else {
        project.classList.add('hide')
      }
    })
    projectContainer.classList.remove('anim-out');
  }, "300")



})

