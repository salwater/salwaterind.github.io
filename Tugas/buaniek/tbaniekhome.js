function showLargeImage(imageSrc) {
    var largeImageContainer = document.getElementById('largeImageContainer');
    var largeImage = document.getElementById('largeImage');

    largeImage.src = imageSrc;
    largeImageContainer.style.display = 'flex';

    // Menambahkan event listener untuk menyembunyikan gambar besar ketika diklik
    largeImageContainer.addEventListener('click', function() {
        largeImageContainer.style.display = 'none';
    });
}
