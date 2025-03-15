document.addEventListener("DOMContentLoaded", function () {
    // Show pop-up when the page loads
    setTimeout(() => {
        alert("🚀 Project 3D Page - Updating Soon!");
    }, 500); // Small delay for better UX

    const projects = [
        {
            id: "robotic-arm",
            title: "Robotic Arm",
            model: "assets/robotic_arm.glb",
            description: "A robotic arm powered by AI for precise object manipulation.",
        },
        {
            id: "ai-car",
            title: "AI Self-Driving Car",
            model: "assets/ai_car.glb",
            description: "An AI-powered autonomous car using sensors and deep learning.",
        },
        {
            id: "vr-robot",
            title: "VR Controlled Robot",
            model: "assets/vr_robot.glb",
            description: "A robot controlled using virtual reality for remote operations.",
        },
        {
            id: "humanoid-robot",
            title: "Humanoid Robot",
            model: "assets/humanoid_robot.glb",
            description: "An advanced humanoid robot with AI-driven interactions.",
        }
    ];

    const projectsContainer = document.getElementById("projects-container");

    projects.forEach((project, index) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("col-md-6", "project-card");

        // Animation delay for smooth appearance
        projectCard.style.animation = `fadeIn 0.8s ease-in-out ${index * 0.3}s both`;

        projectCard.innerHTML = `
            <div class="card text-center p-3 project-item">
                <h5 class="card-title">${project.title}</h5>
                <model-viewer 
                    src="${project.model}" 
                    camera-controls 
                    auto-rotate 
                    ar 
                    class="model-viewer"
                    style="width: 100%; height: 300px;">
                </model-viewer>
                <p class="card-text">${project.description}</p>
            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });

    // Add hover animation effect
    document.querySelectorAll(".model-viewer").forEach(model => {
        model.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease-in-out";
        });

        model.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });

        // Click Event - Show Pop-up with Project Title
        model.addEventListener("click", function () {
            alert(`"${this.closest(".card").querySelector(".card-title").innerText}" - Updating Soon`);
        });
    });
});
