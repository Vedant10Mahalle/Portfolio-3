document.addEventListener("DOMContentLoaded", () => {
  const projects = {
    "1": {
      title: "Robotic Arm",
      image: "assets/robot-arm.jpg",
      blueprint: "assets/robot-arm-blueprint.jpg",
      video: "assets/robot-arm-demo.mp4",
      description: "A robotic arm powered by AI for precise object manipulation.",
      category: "robotics"
    },
    "2": {
      title: "AI Self-Driving Car",
      image: "assets/ai-car.jpg",
      blueprint: "assets/ai-car-blueprint.jpg",
      video: "assets/ai-car-demo.mp4",
      description: "An AI-powered autonomous car using sensors and deep learning.",
      category: "ai"
    },
    "3": {
      title: "VR Controlled Robot",
      image: "assets/vr-robot.jpg",
      blueprint: "assets/vr-robot-blueprint.jpg",
      video: "assets/vr-robot-demo.mp4",
      description: "A robot controlled using virtual reality for remote operations.",
      category: "robotics"
    }
  };

  const projectList = document.getElementById("static-projects");
  const projectDetail = document.getElementById("project-detail");
  const backBtn = document.getElementById("back-btn");
  const projectTitle = document.getElementById("project-title");
  const projectDescription = document.getElementById("project-description");
  const mediaContainer = document.getElementById("project-media-container");
  const blueprintImg = document.getElementById("project-blueprint");
  const filterButtons = document.querySelectorAll(".filter-btn");

  // Initialize filter - set first button active and show all projects
  filterButtons.forEach((btn, idx) => {
    if (idx === 0) btn.classList.add("active");
  });
  projectList.querySelectorAll(".project-card").forEach(card => card.style.display = "block");

  // View Project Details
  function setupViewDetails() {
    document.querySelectorAll(".view-details").forEach(button => {
      button.addEventListener("click", function () {
        const projectId = this.getAttribute("data-id");

        if (projects[projectId]) {
          const proj = projects[projectId];

          projectTitle.textContent = proj.title;
          projectDescription.textContent = proj.description;

          // Clear previous media
          mediaContainer.innerHTML = "";

          // Add Video
          const videoElement = document.createElement("video");
          videoElement.setAttribute("id", "project-video");
          videoElement.setAttribute("width", "100%");
          videoElement.setAttribute("controls", "true");
          videoElement.setAttribute("autoplay", "true");

          const sourceElement = document.createElement("source");
          sourceElement.setAttribute("src", proj.video);
          sourceElement.setAttribute("type", "video/mp4");

          videoElement.appendChild(sourceElement);
          mediaContainer.appendChild(videoElement);

          // Set blueprint image src & alt (use your dedicated blueprint <img>)
          blueprintImg.src = proj.blueprint;
          blueprintImg.alt = proj.title + " Blueprint";

          // Show details section and hide project list
          projectList.style.display = "none";
          projectDetail.style.display = "block";
        }
      });
    });
  }

  setupViewDetails();

  // Back to Projects Button
  backBtn.addEventListener("click", function () {
    projectDetail.style.display = "none";
    projectList.style.display = "block";

    // Stop video playback when returning to main list
    const projectVideo = document.getElementById("project-video");
    if (projectVideo) {
      projectVideo.pause();
      projectVideo.currentTime = 0;
    }
  });

  // Filter Projects
  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-filter");

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");

      // Filter project cards
      projectList.querySelectorAll(".project-card").forEach(card => {
        if (category === "all" || card.classList.contains(category)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

      // When filtered, scroll to top of project list
      projectList.scrollIntoView({ behavior: "smooth" });
    });
  });
});
