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
        if (skillsSection && isElementInViewport(skillsSection)) {
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

    // Floating Panels Hover Effect for All Sections
    document.querySelectorAll(".glow-panel").forEach((panel) => {
        panel.addEventListener("mouseenter", () => {
            gsap.to(panel, {
                y: -10,
                scale: 1.03,
                boxShadow: "0 15px 30px rgba(0, 255, 255, 0.3)",
                duration: 0.3
            });
        });
        panel.addEventListener("mouseleave", () => {
            gsap.to(panel, {
                y: 0,
                scale: 1,
                boxShadow: "0 8px 16px rgba(0, 255, 255, 0.1)",
                duration: 0.3
            });
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

// GSAP Animations for Panels
['.education-box', '.hobby-card', '.language-item', '.skills-box', '.certificate-box'].forEach(selector => {
    gsap.from(selector, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out"
    });
});
window.addEventListener('scroll', () => {
  const scrollIndicator = document.getElementById('glowing-dot');
  const scrollTop = window.scrollY || window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  
  // Limit between 0% and 100%
  const limitedPercent = Math.min(Math.max(scrollPercent, 0), 100);
  
  scrollIndicator.style.left = `${limitedPercent}vw`;
});
