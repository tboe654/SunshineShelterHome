// Simple alert on form submission
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", function(e) {
        e.preventDefault(); // prevent default submission
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        if (name && email) {
          alert(`Thank you, ${name}! We will contact you at ${email}.`);
          form.reset(); // clears the form
        } else {
          alert("Please fill in all required fields.");
        }
      });
    }
  });
  