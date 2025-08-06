// ==================== Responsive Circle Borders ====================
if (window.screen.width <= 1130) {
    function removeAllBorders() {
        $(".cir_border").css("border", "none");
    }

    $(".cir_border").on("click", function () {
        removeAllBorders();
        $(this).css({
            "border": "2px solid whitesmoke",
            "border-radius": "20px"
        });
    });
}

// ==================== About Logo Transition ====================
function introAboutLogoTransition() {
    $("#about-quad").css({
        "top": "70%",
        "opacity": "1"
    });
}

$("#about").on("mouseover", introAboutLogoTransition);

// ==================== Toggle Body Class on Input Change ====================
$("input").on("change", function () {
    $("body").toggleClass("blue");
});

// ==================== Light/Dark Mode Toggle ====================
const checkbox = document.getElementById("checkbox");

function checkDarkMode() {
    const darkMode = localStorage.getItem("tourism_website_darkmode");
    if (darkMode === "true") {
        document.body.classList.add("dark");
        checkbox.checked = true;
    }
}
checkDarkMode();

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("tourism_website_darkmode", isDark);
});

// ==================== Scroll-to-Top Button ====================
const upButton = document.getElementById("upbtn");

window.addEventListener("scroll", () => {
    upButton.style.display = (document.documentElement.scrollTop > 20) ? "block" : "none";
});

upButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ==================== Update Navbar While Scrolling ====================
function updateNav() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links li a");
    const screenWidth = window.screen.width;

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        let threshold = 1000;

        if (screenWidth <= 425) threshold = 1300;
        else if (screenWidth > 425 && screenWidth <= 768) threshold = 1250;

        if (rect.top <= threshold) {
            navLinks.forEach((navLink) => navLink.classList.remove("active"));
            navLinks[index].classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateNav);
