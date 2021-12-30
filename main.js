// Navigation Effects on Scroll Bar
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY>0);

})

// Light to Dark Button
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme",getCurrentTheme());
    localStorage.setItem("saved-icon",getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}
// Scroll to Top Button
const scrollTopBtn = document.querySelector(".scrolltoTop-btn");
window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY> 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Navigation menu items active on page scroll
window.addEventListener("scroll" , () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});

// Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

// Scroll Reveal Animations
ScrollReveal({
    // reset : true,
    distance: '60px',
    duration: 2500,
    delay: 100
});

// Target Elements
ScrollReveal().reveal('.home .info h2, .section-title-1, .section-title-2', {delay: 30, origin: 'left'});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', {delay: 40, origin: 'right'});
ScrollReveal().reveal('.home .info .btn', {delay: 40, origin: 'bottom'});
ScrollReveal().reveal('.media-icons i, .contact-left li', {delay: 40, origin: 'left', interval: 200});
ScrollReveal().reveal('.home-img', {delay: 30, origin: 'bottom'});
ScrollReveal().reveal('.about-info, .description', {delay: 30, origin: 'right'});
ScrollReveal().reveal('.about-professional-list li, .contact-right', {delay: 30, origin: 'right', interval: 200});
ScrollReveal().reveal('.skills-description, .wk, .project, .contact-left h2', {delay: 30, origin: 'left'});
ScrollReveal().reveal('.education, .education-all, .card', {delay: 20, origin: 'bottom', interval: 100});
ScrollReveal().reveal('footer .group', {delay: 20, origin: 'bottom'});

// Form Submission
var form = document.getElementById("my-form");
    
async function handleSubmit(event) 
{
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response =>  {
    status.classList.add('success');
    status.innerHTML = "Thank you for connecting!";
    form.reset()
  }).catch(error => {
    status.classList.add('error');
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit);
