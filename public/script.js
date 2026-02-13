// ✅ Initialize EmailJS
(function () {
    emailjs.init({
        publicKey: "FrnlY7YD3mOTkyH7o",
    });
})();

// ✅ Animate on Scroll (AOS)
AOS.init();

// ✅ Element selectors
const menuBtn = document.getElementById("menu");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");
const closeMatricBtn = document.querySelector(".closeMatricBtn");
const closeInterBtn = document.querySelector(".closeinterBtn");
const educationLeftBtn = document.querySelector(".educationleftBtn");
const educationRightBtn = document.querySelector(".educationRightBtn");
const skillLeftBtn = document.querySelector(".skillLeftBtn");
const skillRightBtn = document.querySelector(".skillRightBtn");
const matrixBox = document.querySelector(".matrixBox");
const interBox = document.querySelector(".interBox");
const uniBox = document.querySelector(".uniBox");
const graduationVerifyBtn = document.getElementById("graduationVerify");
const closeGraduationBtn = document.querySelector(".closeuniBtn");
const educationalContainer = document.querySelector(".educationContainer");
const header = document.querySelector(".header");
const matrixVerifyBtn = document.querySelector("#matrixVerify");
const interVerifyBtn = document.querySelector(".interVerifyBtn");
const matricCard = document.querySelector(".matricCard");
const interCard = document.querySelector(".interCard");
const graduationCard = document.querySelector(".graduationCard");
const readMore = document.querySelector("#readMore");
const hiddenText = document.querySelector(".hiddenText");

let eduRound1 = document.querySelector(".eduRound1");
let eduRound2 = document.querySelector(".eduRound2");
let eduRound3 = document.querySelector(".eduRound3");
let skillRound1 = document.querySelector(".skillRound1");
let skillRound2 = document.querySelector(".skillRound2");
let skillRound3 = document.querySelector(".skillRound3");

let hideText = false;

const usingBox = document.querySelector(".usingBox");
const learningBox = document.querySelector(".learningBox");
const otherBox = document.querySelector(".otherBox");

// ✅ Send notification when user visits the website
function sendVisitorNotification() {
    emailjs.send("service_do8rxtn", "template_n5e1c09", {
        from_name: "Website Visitor",
        message: "A new visitor just landed on the site",
        email: "sakhawatalisakhi32@gmail.com",
    }).then(
        response => console.log("SUCCESS!", response.status, response.text),
        error => console.error("FAILED...", error)
    );
}

// ✅ Trigger on page load
document.addEventListener("DOMContentLoaded", () => {
    sendVisitorNotification();
});

// ✅ Sliders and animation logic
let skillCards = [usingBox, learningBox, otherBox];
let educationalCards = [matrixBox, interBox, uniBox];
let resultSheets = [matricCard, interCard];
let eduRContainer = [eduRound1, eduRound2, eduRound3];
let skillRContainer = [skillRound1, skillRound2, skillRound3];
let move = 0;
let move2 = 0;

educationLeftBtn.style.color = "#6C5B01";
educationRightBtn.style.color = "yellow";
skillLeftBtn.style.color = "#6C5B01";
skillRightBtn.style.color = "yellow";

function limitColorLeft(m, cardBtn, card) {
    cardBtn.style.color = m === 0 ? "#6C5B01" : "yellow";
}

function limitColorRight(m, cardBtn, card) {
    cardBtn.style.color = m === card.length - 1 ? "#6C5B01" : "yellow";
}

graduationVerifyBtn.addEventListener("click", () => {
    graduationCard.style.display = "block";
    closeGraduationBtn.style.display = "block";
    interCard.style.display = "none";
    closeInterBtn.style.display = "none";
});

closeGraduationBtn.addEventListener("click", () => {
    graduationCard.style.display = "none";
    closeGraduationBtn.style.display = "none";
});

function goRight() {
    if (move < educationalCards.length - 1) {
        educationalCards[move].style.display = "none";
        eduRContainer[move].style.background = "none";
        move++;
        educationalCards[move].style.display = "flex";
        eduRContainer[move].style.backgroundColor = "#FFD700";
        limitColorLeft(move, educationLeftBtn, educationalCards);
        limitColorRight(move, educationRightBtn, educationalCards);
        matricCard.style.display = "none";
        interCard.style.display = "none";
        closeMatricBtn.style.display = "none";
        closeInterBtn.style.display = "none";
    }
}

function goLeft() {
    if (move > 0) {
        educationalCards[move].style.display = "none";
        eduRContainer[move].style.background = "none";
        move--;
        educationalCards[move].style.display = "flex";
        eduRContainer[move].style.backgroundColor = "#FFD700";
        limitColorLeft(move, educationLeftBtn, educationalCards);
        limitColorRight(move, educationRightBtn, educationalCards);
    }
}

function goSkillRight() {
    if (move2 < skillCards.length - 1) {
        skillCards[move2].style.display = "none";
        skillRContainer[move2].style.background = "none";
        move2++;
        skillCards[move2].style.display = "flex";
        skillRContainer[move2].style.backgroundColor = "#FFD700";
        limitColorLeft(move2, skillLeftBtn, skillCards);
        limitColorRight(move2, skillRightBtn, skillCards);
    }
}

function goSkillLeft() {
    if (move2 > 0) {
        skillCards[move2].style.display = "none";
        skillRContainer[move2].style.background = "none";
        move2--;
        skillCards[move2].style.display = "flex";
        skillRContainer[move2].style.backgroundColor = "#FFD700";
        limitColorLeft(move2, skillLeftBtn, skillCards);
        limitColorRight(move2, skillRightBtn, skillCards);
    }
}

// ✅ Menu control
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
});

// ✅ Auto-close mobile menu on scroll, but KEEP header fixed
window.addEventListener("scroll", () => {
    mobileMenu.classList.add("translate-x-full");
});

// ✅ Typing effect for Hero Section
const typed = new Typed("#element", {
    strings: ["Web Developer.", "Backend Developer.", "React Developer.", "Math Teacher."],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
});

// ✅ Navigation slider controls
educationLeftBtn.addEventListener("click", goLeft);
educationRightBtn.addEventListener("click", goRight);
skillLeftBtn.addEventListener("click", goSkillLeft);
skillRightBtn.addEventListener("click", goSkillRight);

// ✅ Certificate Card Show/Hide
matrixVerifyBtn.addEventListener("click", () => {
    matricCard.style.display = "block";
    closeMatricBtn.style.display = "block";
});

interVerifyBtn.addEventListener("click", () => {
    interCard.style.display = "block";
    closeInterBtn.style.display = "block";
});

closeMatricBtn.addEventListener("click", () => {
    matricCard.style.display = 'none';
    closeMatricBtn.style.display = 'none';
});

closeInterBtn.addEventListener("click", () => {
    interCard.style.display = 'none';
    closeInterBtn.style.display = 'none';
});

// ✅ Read More Toggle
readMore.addEventListener("click", () => {
    hiddenText.style.display = hideText ? "none" : "inline";
    readMore.innerText = hideText ? "Read More" : "Hide";
    hideText = !hideText;
});

// ✅ Botpress Chat
window.botpressWebChat.onEvent(
    function () {
        window.botpressWebChat.sendEvent({ type: "show" });
    },
    ["LIFECYCLE.LOADED"]
);

// ✅ Error handling
window.addEventListener("unhandledrejection", (event) => {
    console.error("Unhandled promise rejection:", event.reason);
});
