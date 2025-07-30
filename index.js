
var typed = new Typed(".text", {
    strings: [" Welcome To My Page", " You are welcome", " Take your time here"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


const images = [
    "./Best Cyber Security Course in Thane – Get Industry Ready.jpg",
    "./cyber security with padlock, shield, phone, monitor, computer and laptop icon - AI Generated Stock Illustration.jpg",
    "./b3be3a3d7253c5e0d796574cae5a3391.jpg",
    "./Adobe.jpg"
];

let currentIndex = 0;
const homeSection = document.querySelector("#home");

function fadeOutIn(nextIndex) {
    homeSection.style.opacity = 0;
    setTimeout(() => {
        homeSection.style.backgroundImage = `url('${images[nextIndex]}')`;
        homeSection.style.opacity = 1;
    }, 1000); 
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    fadeOutIn(currentIndex);
}

setInterval(nextImage, 10000); 

// Initialize with first image
homeSection.style.backgroundImage = `url('${images[0]}')`;

// New code to animate technical skills progress bars on scroll
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function animateSkills() {
    const skillsSection = document.getElementById("skills");
    if (!skillsSection) return;

    if (isInViewport(skillsSection)) {
        const progressSpans = document.querySelectorAll(".progress-line span");
        progressSpans.forEach(span => {
            span.style.transform = "scaleX(1)";
            span.style.transition = "transform 1s ease-in-out";
        });
       
        window.removeEventListener("scroll", animateSkills);
    }
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);
