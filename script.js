// ===== Typing Effect =====
const text = "Welcome to Web Development Notes & Cheatsheet";
const heading = document.querySelector("h2");

let index = 0;
heading.innerHTML = "";

function typeEffect() {
    if (index < text.length) {
        heading.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

window.addEventListener("load", typeEffect);


// ===== Button Ripple Effect =====
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];
        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    });
});


// ===== Scroll Fade Animation =====
const content = document.querySelector("pre");

window.addEventListener("scroll", () => {
    const position = content.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
        content.style.opacity = "1";
        content.style.transform = "translateY(0)";
    }
});
