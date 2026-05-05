const form = document.getElementById("contact-form");
const statusMessage = document.getElementById("form-status"); // Renamed here
const button = document.getElementById("submit-btn");

async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    button.disabled = true;
    button.innerText = "Sending...";

    try {
        const response = await fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            statusMessage.style.color = "#27ae60"; 
            statusMessage.innerText = "Message sent! We will get back to you shortly.";
            form.reset();
        } else {
            statusMessage.style.color = "#c0392b"; 
            statusMessage.innerText = "Oops! There was a problem. Please try again.";
        }
    } catch (error) {
        statusMessage.style.color = "#c0392b";
        statusMessage.innerText = "Connection error. Please try again.";
    } finally {
        button.disabled = false;
        button.innerText = "Send Message";
    }
}

form.addEventListener("submit", handleSubmit);