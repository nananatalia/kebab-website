document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".menu-dishes-names .nav-link");
    const menuSections = document.querySelectorAll(".menu-section");

    navLinks.forEach((link, index) => {
        link.addEventListener("click", () => {
            // Remove active state from all links and hide all sections
            navLinks.forEach((lnk) => lnk.classList.remove("active"));
            menuSections.forEach((section) => section.style.display = "none");

            // Add active state to the clicked link and show the corresponding section
            link.classList.add("active");
            menuSections[index].style.display = "block";
        });
    });

    // Initialize first tab as active
    navLinks[0].classList.add("active");
    menuSections[0].style.display = "block";
});


