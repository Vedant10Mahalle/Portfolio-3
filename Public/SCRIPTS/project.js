document.addEventListener("DOMContentLoaded", () => {
    const projects = {
        "1": {
            title: "Robotic Arm",
            image: "assets/robot-arm.jpg",
            blueprint: "assets/robot-arm-blueprint.jpg", // Added blueprint
            video: "assets/robot-arm-demo.mp4",
            description: "A robotic arm powered by AI for precise object manipulation.",
            category: "AI"
        },
        "2": {
            title: "AI Self-Driving Car",
            image: "assets/ai-car.jpg",
            blueprint: "assets/ai-car-blueprint.jpg",
            video: "assets/ai-car-demo.mp4",
            description: "An AI-powered autonomous car using sensors and deep learning.",
            category: "AI"
        },
        "3": {
            title: "VR Controlled Robot",
            image: "assets/vr-robot.jpg",
            blueprint: "assets/vr-robot-blueprint.jpg",
            video: "assets/vr-robot-demo.mp4",
            description: "A robot controlled using virtual reality for remote operations.",
            category: "Robotics"
        }
    };

    const projectList = document.getElementById("static-projects");
    const projectDetail = document.getElementById("project-detail");
    const backBtn = document.getElementById("back-btn");
    const projectTitle = document.getElementById("project-title");
    const projectDescription = document.getElementById("project-description");
    const mediaContainer = document.getElementById("project-media-container");
    const filterButtons = document.querySelectorAll(".filter-btn");

    // ✅ View Project Details
    document.querySelectorAll(".view-details").forEach(button => {
        button.addEventListener("click", function () {
            const projectId = this.getAttribute("data-id");

            if (projects[projectId]) {
                projectTitle.textContent = projects[projectId].title;
                projectDescription.textContent = projects[projectId].description;

                // Clear previous media
                mediaContainer.innerHTML = "";

                // ✅ Add Blueprint Image
                const blueprintImg = document.createElement("img");
                blueprintImg.setAttribute("src", projects[projectId].blueprint);
                blueprintImg.setAttribute("alt", projects[projectId].title + " Blueprint");
                blueprintImg.classList.add("blueprint");
                mediaContainer.appendChild(blueprintImg);

                // ✅ Add Video
                const videoElement = document.createElement("video");
                videoElement.setAttribute("id", "project-video");
                videoElement.setAttribute("width", "100%");
                videoElement.setAttribute("controls", "true");
                videoElement.setAttribute("autoplay", "true");

                const sourceElement = document.createElement("source");
                sourceElement.setAttribute("src", projects[projectId].video);
                sourceElement.setAttribute("type", "video/mp4");

                videoElement.appendChild(sourceElement);
                mediaContainer.appendChild(videoElement);

                // Show details section and hide project list
                projectList.style.display = "none";
                projectDetail.style.display = "block";
            }
        });
    });

    // ✅ Back to Projects Button
    backBtn.addEventListener("click", function () {
        projectDetail.style.display = "none";
        projectList.style.display = "block";

        // Stop video playback when returning to the main list
        const projectVideo = document.getElementById("project-video");
        if (projectVideo) {
            projectVideo.pause();
            projectVideo.currentTime = 0;
        }
    });

    // ✅ Filter Projects
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-filter");
            document.querySelectorAll(".project-card").forEach(card => {
                if (category === "all" || card.classList.contains(category)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});
