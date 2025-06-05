document.addEventListener("DOMContentLoaded", () => {
    // GSAP Animations
    gsap.to("h1", { opacity: 1, y: -20, duration: 1, ease: "power3.out" });
    gsap.to(".lead", { opacity: 1, y: -20, delay: 0.5, duration: 1, ease: "power3.out" });
    gsap.from(".btn-primary", { opacity: 0, y: 20, duration: 1, delay: 1, stagger: 0.3 });

    // Initialize AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
    });

    // // Dark Mode Toggle
    // const themeToggle = document.createElement("button");
    // themeToggle.innerHTML = "🌙";
    // themeToggle.classList.add("btn", "btn-outline-light", "position-fixed", "bottom-0", "end-0", "m-3", "shadow");
    // document.body.appendChild(themeToggle);

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("bg-dark");
        document.body.classList.toggle("text-light");

        // // Change Button Icon
        // if (document.body.classList.contains("bg-dark")) {
        //     themeToggle.innerHTML = "☀️";
        //     themeToggle.classList.remove("btn-outline-light");
        //     themeToggle.classList.add("btn-outline-dark");
        // } else {
        //     themeToggle.innerHTML = "🌙";
        //     themeToggle.classList.remove("btn-outline-dark");
        //     themeToggle.classList.add("btn-outline-light");
        // }
    });

    // Custom Cursor Effect
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    // Button Hover Animation
    document.querySelectorAll("button, a").forEach((element) => {
        element.addEventListener("mouseenter", () => {
            gsap.to(element, { scale: 1.1, duration: 0.3 });
        });
        element.addEventListener("mouseleave", () => {
            gsap.to(element, { scale: 1, duration: 0.3 });
        });
    });
});
const svg = document.getElementById("mesh");
for (let i = 0; i < 100; i++) {
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", Math.random() * 10000);
    circle.setAttribute("cy", Math.random() * 1000);
    circle.setAttribute("r", Math.random() * 10);
    circle.setAttribute("fill", "rgba(0, 123, 255, 0.6)");
    svg.appendChild(circle);

    const glowCursor = document.getElementById("glow-cursor");
    document.addEventListener("mousemove", (e) => {
      glowCursor.style.top = `${e.clientY}px`;
      glowCursor.style.left = `${e.clientX}px`;
    });
    document.addEventListener("touchmove", (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        glowCursor.style.top = `${touch.clientY}px`;
        glowCursor.style.left = `${touch.clientX}px`;
      }
    }, { passive: true });

    const sidebarLinks = document.querySelectorAll(".sidebar a");
    const overlay = document.getElementById("redirect-overlay");
    sidebarLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.getAttribute("href");
        overlay.classList.add("active");
        setTimeout(() => {
          window.location.href = target;
        }, 1200);
      });
    });
}
