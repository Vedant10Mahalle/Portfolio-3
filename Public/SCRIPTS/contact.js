document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        let isValid = true;

        // Get form fields
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const college = document.getElementById("college").value.trim();
        const message = document.getElementById("message").value.trim();

        // Error messages
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const collegeError = document.getElementById("collegeError");
        const messageError = document.getElementById("messageError");

        // Clear previous errors
        nameError.textContent = "";
        emailError.textContent = "";
        collegeError.textContent = "";
        messageError.textContent = "";

        // Validate Name
        if (name === "") {
            nameError.textContent = "⚠️ Name is required!";
            isValid = false;
        }

        // Validate Email
        if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            emailError.textContent = "⚠️ Please enter a valid email!";
            isValid = false;
        }

        // Validate College
        if (college === "") {
            collegeError.textContent = "⚠️ College name is required!";
            isValid = false;
        }

        // Validate Message
        if (message.length < 10) {
            messageError.textContent = "⚠️ Message should be at least 10 characters!";
            isValid = false;
        }

        // If form is valid, submit it
        if (isValid) {
            alert(`✅ Thank you, ${name}! Your message has been sent successfully.`);
            form.submit();
        }
    });
});
