//navbar animation :  hide and appear when scrolled

let nav = document.querySelector(".nav");
let navLinks = document.querySelector(".nav-links li");
let lastScroll = 0;
let home = document.querySelector(".home");
let contact = document.querySelector(".contact");
let about = document.querySelector(".about");
let photos = document.querySelector(".photos");
let videos = document.querySelector(".videos");
let scrollUp = document.querySelector(".scrollup-btn");

window.addEventListener("scroll",()=>{
    if(lastScroll < window.scrollY){
        nav.classList.add("scrolled-nav");
        if(true){
            home.classList.add("scrolled-link");
            about.classList.add("scrolled-link");
            contact.classList.add("scrolled-link");
            photos.classList.add("scrolled-link");
            videos.classList.add("scrolled-link");
        }


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
    

    if(window.scrollY >= 300)
        scrollUp.style.opacity = 1;
    else    
        scrollUp.style.opacity = 0;
});


//animation on scroll of cards in section 2
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let text3 = document.querySelector(".text3");
let h1 = document.querySelector(".h1");

const h1position = h1.getBoundingClientRect();
const h1checkpoint = h1position.top;
const imgcheckpoint = h1position.top;

//right here bro was fixing this shit

let x = window.matchMedia("(min-width:1191px)");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if(x.matches){
      if(currentScroll >= h1checkpoint){
        h1.style.transform="translateY(0px)";
      }else{
        h1.style.transform="translateY(-300px)";
      }

    if (currentScroll >= imgcheckpoint) {
      img1.style.opacity="1";
          img2.style.opacity="1";
          img3.style.opacity="1";
          img1.style.transform="translateY(0px)";
          img2.style.transform="translateY(0px)";
          img3.style.transform="translateY(0px)";

          text1.style.opacity="1";
          text2.style.opacity="1";
          text3.style.opacity="1";
          text1.style.transform="translateY(0px)";
          text2.style.transform="translateY(0px)";
          text3.style.transform="translateY(0px)";  
    } else {
          img1.style.opacity="0";
          img2.style.opacity="0";
          img3.style.opacity="0";
          img1.style.transform="translateY(500px)";
          img2.style.transform="translateY(500px)";
          img3.style.transform="translateY(500px)";

          text1.style.opacity="0";
          text2.style.opacity="0";
          text3.style.opacity="0";
          text1.style.transform="translateY(-500px)";
          text2.style.transform="translateY(-500px)";
          text3.style.transform="translateY(-500px)";  
    }
  }
  
});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
let y = window.matchMedia("(min-width:530px)");
const cb = document.querySelector("#burgerbox");

const logo = document.querySelector(".logo");
cb.checked = false;
function checkMe(){
  if(y.matches){
    if(cb.checked){
      logo.style.transform = "translateX(130px)";
    }else{
      logo.style.transform = "translateX(0px)";
    }
  } 
}

window.onresize = function(){
  cb.checked = false;
  logo.style.transform = "translateX(0px)";

}