document.addEventListener("DOMContentLoaded", function () {
    // Navbar Scroll Effect
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Progress Bar Animation
    function animateProgressBars() {
        document.querySelectorAll(".progress-bar").forEach((bar) => {
            let targetWidth = bar.getAttribute("data-progress");
            bar.style.width = targetWidth + "%";
        });
    }
    
    // Trigger progress bar animation when section is in viewport
    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    
    function handleScrollAnimation() {
        let skillsSection = document.querySelector(".skills");
        if (isElementInViewport(skillsSection)) {
            animateProgressBars();
        }
    }
    
    window.addEventListener("scroll", handleScrollAnimation);
    
    // Modal Functionality
    let modals = document.querySelectorAll(".modal");
    let viewButtons = document.querySelectorAll(".view-details");
    let closeButtons = document.querySelectorAll(".close-modal");

    viewButtons.forEach((btn, index) => {
        btn.addEventListener("click", function () {
            modals[index].style.display = "flex";
        });
    });

    closeButtons.forEach((btn, index) => {
        btn.addEventListener("click", function () {
            modals[index].style.display = "none";
        });
    });

    // Close modal when clicking outside content
    modals.forEach((modal) => {
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });

    // Smooth Scrolling
    document.querySelectorAll("a[href^='#']").forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: "smooth",
                });
            }
        });
    });

    // Experience Card Hover Effect
    let experienceCards = document.querySelectorAll(".experience-card");
    experienceCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px) scale(1.03)";
            card.style.boxShadow = "0px 8px 20px rgba(0, 123, 255, 0.4)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "none";
        });
    });
});
// Modal Handling for Certificates
function openModal(certId) {
    const modal = document.getElementById(certId);
    if (modal) {
        modal.style.display = "block";
    }
}

function closeModal(certId) {
    const modal = document.getElementById(certId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Attach event listeners to modal buttons
document.querySelectorAll(".view-details").forEach((button) => {
    button.addEventListener("click", function () {
        const certId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
        openModal(certId);
    });
});

// Close modals when clicking outside the modal content
document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Close modals on clicking the close button
document.querySelectorAll(".close-modal").forEach((button) => {
    button.addEventListener("click", function () {
        const modal = this.closest(".modal");
        if (modal) {
            modal.style.display = "none";
        }
    });
});
// GSAP Animation for Education Cards
gsap.from(".education-card", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
});
// GSAP Animations
gsap.from(".education-box", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3
});

// Hover Animation using GSAP
document.querySelectorAll(".education-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, {
            scale: 1.05,
            boxShadow: "0px 15px 30px rgba(0, 150, 255, 0.3)",
            duration: 0.3,
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            scale: 1,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            duration: 0.3,
        });
    });
});
// GSAP Animation for Hobby Cards
gsap.from(".hobby-card", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
});

// Hover Animation using GSAP
document.querySelectorAll(".hobby-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, {
            scale: 1.05,
            boxShadow: "0px 15px 30px rgba(0, 123, 255, 0.3)",
            duration: 0.3,
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            scale: 1,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            duration: 0.3,
        });
    });
});
// GSAP Animations for Slide-In Effect
gsap.from(".language-item", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
});

// GSAP Animations for Slide-In Effect
gsap.from(".skills-box", {
    opacity: 0,
    y: 50,
    duration: 3,
    stagger: 1
});

