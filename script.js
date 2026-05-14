const title = document.querySelector(".title");

const button = document.querySelector(".change-btn");

button.addEventListener("click", function () {

    title.innerHTML = "Javascript Developer";

});

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeBtn.innerHTML = "Dark Mode";

    } else {

        themeBtn.innerHTML = "Light Mode";

    }

});

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");
    
});