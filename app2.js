//navbar animation :  hide and appear when scrolled
console.log("hey")
let nav = document.querySelector(".nav");
let navLinks = document.querySelector(".nav-links li");
let lastScroll = 0;
let home = document.querySelector(".home");
let contact = document.querySelector(".contact");
let about = document.querySelector(".about");
let photos = document.querySelector(".photos");
let videos = document.querySelector(".videos");
let scrollUp = document.querySelector(".scrollup-btn");
console.log(nav)
window.addEventListener("scroll",()=>{
  console.log("scrolled")
    if(lastScroll < window.scrollY){
            nav.classList.add("scrolled-nav");
            home.classList.add("scrolled-link");
            about.classList.add("scrolled-link");
            contact.classList.add("scrolled-link");
            photos.classList.add("scrolled-link");
            videos.classList.add("scrolled-link");



    } else{             //removing every class that is added when scrolled back up
        nav.classList.remove("scrolled-nav");
        contact.classList.remove("scrolled-link");
        contact.classList.remove("active-scrolled");
        about.classList.remove("scrolled-link"); 
        about.classList.remove("active-scrolled");
        home.classList.remove("scrolled-link");
        home.classList.remove("active-scrolled");
        photos.classList.remove("scrolled-link");
        videos.classList.remove("scrolled-link");
        photos.classList.remove("active-scrolled");
        videos.classList.remove("active-scrolled");
    }
    
});