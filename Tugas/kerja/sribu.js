document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Terima kasih! Panduan telah dikirim ke ${email}.`);
});
