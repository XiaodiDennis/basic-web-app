document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert(`Thank you for your submission, ${name}! We will contact you at ${email}.`);
    } else {
        alert('Please fill in all fields.');
    }
});
