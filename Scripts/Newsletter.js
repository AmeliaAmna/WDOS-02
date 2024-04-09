document.addEventListener("DOMContentLoaded", function() {
    const newsletterForm = document.getElementById("newsletterForm");

    newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const emailInput = document.getElementById("email");
        const email = emailInput.value.trim(); // Trim the input value to remove whitespace

        if (email) {
            let emails = JSON.parse(localStorage.getItem("newsletterEmails")) || [];

            if (!emails.includes(email)) {
                emails.push(email);
                localStorage.setItem("newsletterEmails", JSON.stringify(emails));
                alert("Thank you for subscribing to our newsletter!");
            } else {
                alert("You are already subscribed to our newsletter.");
            }

            emailInput.value = ""; // Clear the email input field after submission
        } else {
            alert("Please enter a valid email address.");
        }
    });
});
