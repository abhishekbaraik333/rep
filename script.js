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


document.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 200) {
        header.classList.add("shadow-md");
    } else {
        header.classList.remove("shadow-md");
    }
});
document.querySelectorAll(".testimonial").forEach((testimonial) => {
    const textContainer = testimonial.querySelector(".testimonial-text");
    const readMoreBtn = testimonial.querySelector(".read-more-btn");

    if (textContainer.scrollHeight > 300) {
        readMoreBtn.classList.remove("hidden");
    }

    let expanded = false;

    readMoreBtn.addEventListener("click", () => {
        expanded = !expanded;
        textContainer.style.maxHeight = expanded ? textContainer.scrollHeight + "px" : "300px";
        readMoreBtn.textContent = expanded ? "Read Less" : "Read More";
    });
});


document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(".faq-item");
    const firstFaqItem = faqItems[0]; // Select the first FAQ item
  
    // Function to handle FAQ toggle
    const toggleFaqItem = (item) => {
     
      item.classList.add("active"); // Open the specific FAQ item
    };
  
    // Intersection Observer to observe when the first FAQ reaches 80% of the viewport from the top
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            toggleFaqItem(firstFaqItem); // Open the first FAQ when it is 80% from the top
            observer.unobserve(entry.target); // Stop observing once opened
          }
        });
      },
      { rootMargin: "-80% 0px 0px 0px" } // 80% offset from the top of the viewport
    );
  
    // Observe the first FAQ item
    observer.observe(firstFaqItem);
  
    // Add click event listener to all FAQ items
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
  
      question.addEventListener("click", () => {
        if (item.classList.contains("active")) {
          item.classList.remove("active"); // Close the item if it's open
        } else {
          toggleFaqItem(item); // Open the clicked item
        }
      });
    });
  });