const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const icon = menuToggle.querySelector("i");

// toggle menu
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // ganti icon hamburger ↔ close
    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// auto close saat klik link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});

// PHOTO SLIDER

const photos = [

    "images/profile/profile1.jpg",

    "images/profile/profile2.jpg",

    "images/profile/profile3.jpg",

    "images/profile/profile4.jpg"

];

let current = 0;

const image = document.getElementById("slider-image");

const dots = document.querySelectorAll(".dot");

function updateSlider(){

    image.src = photos[current];

    dots.forEach(dot=>dot.classList.remove("active"));

    dots[current].classList.add("active");

}

document.getElementById("next").addEventListener("click",()=>{

    current++;

    if(current>=photos.length){

        current=0;

    }

    updateSlider();

});

document.getElementById("prev").addEventListener("click",()=>{

    current--;

    if(current<0){

        current=photos.length-1;

    }

    updateSlider();

});


// TYPING TEXT

const jobs=[

    "Computer Science Graduate",

    "Front-End Developer",

    "UI/UX Designer",

    "Data Analyst"

];

let textIndex=0;

const typing=document.getElementById("typing-text");

setInterval(()=>{

    textIndex++;

    if(textIndex>=jobs.length){

        textIndex=0;

    }

    typing.style.opacity=0;

    setTimeout(()=>{

        typing.innerHTML=jobs[textIndex];

        typing.style.opacity=1;

    },300);

},2500);

// COUNTER

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = parseInt(counter.dataset.target);

            let count = 0;
            const speed = Math.ceil(target / 40);

            const update = () => {

                count += speed;

                if (count < target) {
                    counter.innerText = count;
                    requestAnimationFrame(update);
                } else {
                    counter.innerText = target + "+";
                }

            };

            update();
            observer.unobserve(counter);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => observer.observe(counter));

// PROJECT FILTER 

document.addEventListener("DOMContentLoaded", () => {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {

            // aktif button
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.dataset.filter;

            projectCards.forEach(card => {

                const category = card.dataset.category;

                if (filter === "all") {
                    card.classList.remove("hide");
                } else {
                    if (category === filter) {
                        card.classList.remove("hide");
                    } else {
                        card.classList.add("hide");
                    }
                }

            });

        });
    });

});