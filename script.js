window.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.querySelector("#mobileMenu");
    const menuOpener = document.querySelector("#menuOpener");
    const menuCloser = document.querySelector("#mobileMenu button"); // Close button inside the menu
    menuOpener.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    menuCloser.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });

    // Close menu when clicking outside of it
    document.addEventListener("click", (event) => {
        if (!mobileMenu.contains(event.target) && !menuOpener.contains(event.target)) {
            mobileMenu.classList.add("hidden");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let toggleOrange = document.getElementById("toggle-orange");
    let toggleBlue = document.getElementById("toggle-blue");
    let orangeDiv = document.getElementById("orange-div");
    let blueDiv = document.getElementById("blue-div");

    function activateButton(selectedButton, otherButton, showDiv, hideDiv) {
        if (!selectedButton.classList.contains("active")) {
            selectedButton.classList.add("active", "bg-opacity-100");
            otherButton.classList.remove("active", "bg-opacity-100");
            showDiv.classList.add("opacity-100", "scale-100");
            showDiv.classList.remove("opacity-0", "scale-90");
            hideDiv.classList.add("opacity-0", "scale-90");
            hideDiv.classList.remove("opacity-100", "scale-100");
        }
    }

    // Default active state
    activateButton(toggleOrange, toggleBlue, orangeDiv, blueDiv);

    toggleOrange.addEventListener("click", function () {
        activateButton(toggleOrange, toggleBlue, orangeDiv, blueDiv);
    });

    toggleBlue.addEventListener("click", function () {
        activateButton(toggleBlue, toggleOrange, blueDiv, orangeDiv);
    });
});


