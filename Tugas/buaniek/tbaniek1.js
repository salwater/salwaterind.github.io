$(document).ready(function () {
    // Sembunyikan semua paragraf kecuali yang pertama di masing-masing div
    $('.pentag p, .mantag p, .jjtag p, .tptag p').hide();

    // Atur tindakan ketika judul di-klik
    $('.penj, .manj, .jjj, .tpj').click(function () {
        // Sembunyikan paragraf yang sedang ditampilkan di div lain
        $('.pentag p, .mantag p, .jjtag p, .tptag p')
            .not($(this).siblings('p'))
            .slideUp();
        // Perlihatkan atau sembunyikan paragraf yang berdekatan dengan judul yang diklik
        $(this)
            .siblings('p')
            .slideToggle();
    });
});
