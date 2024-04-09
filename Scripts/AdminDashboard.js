document.addEventListener("DOMContentLoaded", function() {
    const subscriptionsContainer = document.getElementById("newsletterSubscriptions");
    const subscriptions = JSON.parse(localStorage.getItem("newsletterEmails"));

    if (subscriptions && subscriptions.length > 0) {
        const subscriptionList = document.createElement("ul");

        subscriptions.forEach(function(email) {
            const listItem = document.createElement("li");
            listItem.textContent = email;
            subscriptionList.appendChild(listItem);
        });

        subscriptionsContainer.appendChild(subscriptionList);
    } else {
        subscriptionsContainer.textContent = "No newsletter subscriptions found.";
    }
});






