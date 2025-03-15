document.addEventListener("DOMContentLoaded", () => {
    // GSAP Animations
    gsap.from(".resume-title", { opacity: 0, y: -20, duration: 1 });
    gsap.from(".resume-subtitle", { opacity: 0, y: -20, delay: 0.5, duration: 1 });
    gsap.from(".resume-preview", { opacity: 0, scale: 0.9, delay: 0.8, duration: 1 });

    // Dark Mode Toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Resume Download Functionality
    document.getElementById("download-resume").addEventListener("click", () => {
        const resumeURL = "resume.pdf"; // Change to actual resume file
        const link = document.createElement("a");
        link.href = resumeURL;
        link.download = "Vedant_Mahalle_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
