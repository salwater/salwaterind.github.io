// Contoh sederhana untuk menambahkan interaksi (opsional)

document.addEventListener('DOMContentLoaded', function() {
    // Efek scroll halus untuk navigasi internal
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animasi sederhana pada elemen hero (contoh)
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('fade-in'); // Tambahkan class untuk animasi CSS
    }
});

// Anda bisa menambahkan lebih banyak interaksi seperti:
// - Validasi form kontak
// - Efek hover yang lebih kompleks
// - Animasi saat scroll