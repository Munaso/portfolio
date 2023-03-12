'use strict';


// Make navbar transparent when it is on the top
let navbar = document.getElementById('navbar');
let navbarHeight = navbar.getBoundingClientRect().height;
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
  const target = event.target;
  selectNavItem(target)
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

// show menu border when scrolling

// 1. 모든 섹션 요소들을 가지고온다.
// 2. IntersectinObserver 를 이용해서 모든 섹션들을 관찰한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이테을 활성화시킨다.

const sectionIds = [
  '#home',
  '#about',
  '#work',
  '#testimonials',
  '#contact',
];

const sections = sectionIds.map(id => document.querySelector(id))

const navItems = sectionIds.map(id => 
  document.querySelector(`[data-link="${id}"]`))

let selectedNavIndex = 0
let selectedNavItem = navItems[0];

function selectNavItem(selected)  {
  selectedNavItem.classList.remove('active');
  selectedNavItem = selected;
  selectedNavItem.classList.add('active');
}

const observerOptions = {
  root : null,
  rootMargin: '-100px',
  threshold: 0.3,
}

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting && entry.intersectionRatio > 0){
      const index = sectionIds.indexOf(`#${entry.target.id}`);
      // 스크롤링이 아래로 되어서 페이지가 올라옴
      if(entry.boundingClientRect.y < 0){
        selectedNavIndex = index + 1;
      } else {
        selectedNavIndex = index - 1;
      }
    }
  })
};
const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach(section => observer.observe(section));

window.addEventListener('wheel', ()=>{
  if(window.scrollY === 0){
    selectedNavIndex = 0;
  } else if(
    window.scrollY + window.innerHeight === 
    document.body.clientHeight
    ) {
      selectedNavIndex = navItems.length - 1;
  }
  selectNavItem(navItems[selectedNavIndex]);
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
  selectNavItem(navItems[sectionIds.indexOf(selector)]);
  console.log(sectionIds.indexOf(selector))
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

