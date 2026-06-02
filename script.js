/* =========================
   MOBILE MENU TOGGLE
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
const menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

    } else {

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

});
/* =========================
   CLOSE MENU ON LINK CLICK
========================= */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});

/* =========================
   TYPING ANIMATION
========================= */

new Typed(".typing", {

    strings: [
        "AI Developer",
        "Software Developer",
        "Python Programmer",
        "Web Developer",
        "Machine Learning Enthusiast"
    ],

    typeSpeed: 80,

    backSpeed: 50,

    backDelay: 1500,

    loop: true

});

/* =========================
   AOS INITIALIZATION
========================= */

AOS.init({

    duration: 1000,

    once: true,

    offset: 100

});

/* =========================
   ACHIEVEMENT COUNTERS
========================= */

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const increment = target / 100;

        const updateCounter = () => {

            if (count < target) {

                count += increment;

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

};

/* =========================
   INTERSECTION OBSERVER
========================= */

const achievementSection = document.querySelector(".achievements");

if (achievementSection) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter();

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.4
    });

    observer.observe(achievementSection);

}

/* =========================
   ACTIVE NAVBAR LINKS
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {

            link.classList.add("active");

        }

    });

});

/* =========================
   HEADER SHADOW ON SCROLL
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 0 15px rgba(0,191,255,.25)";

    } else {

        header.style.boxShadow = "none";

    }

});

/* =========================
   PARTICLES JS
========================= */

particlesJS("particles-js", {

    particles: {

        number: {
            value: 70
        },

        color: {
            value: "#00BFFF"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.4
        },

        size: {
            value: 3
        },

        line_linked: {

            enable: true,

            distance: 150,

            color: "#00BFFF",

            opacity: 0.25,

            width: 1

        },

        move: {

            enable: true,

            speed: 2

        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "repulse"
            },

            onclick: {
                enable: true,
                mode: "push"
            }

        }

    },

    retina_detect: true

});

/* =========================
   SMOOTH REVEAL EFFECT
========================= */

const revealElements = document.querySelectorAll(
    ".project-card, .skill-card, .certificate-card, .counter-card"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = ".8s ease";

    revealObserver.observe(el);

});

/* =========================
   CONTACT FORM
========================= */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        alert(
            "Thank you for contacting me! I will get back to you soon."
        );

        contactForm.reset();

    });

}

/* =========================
   CURRENT YEAR IN FOOTER
========================= */

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    const year = new Date().getFullYear();

    copyright.innerHTML =
        `© ${year} All Rights Reserved`;

}

/* =========================
   PRELOADER SUPPORT
========================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* =========================
   CONSOLE SIGNATURE
========================= */

console.log(
`
===================================
  Suleman Khan Portfolio
  AI & Software Developer
===================================
`
);