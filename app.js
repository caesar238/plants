hamburger = document.querySelector(".hamburger");
        hamburger.onclick = function() {
            navBar = document.querySelector(".nav-items");
            navBar.classList.toggle("active");
        }