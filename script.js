// FUNCTION 1: Untuk Butang Sokong LFC dekat index.html
const butangSokong = document.getElementById('btnKlik');

// Check kalau butang tu wujud baru jalankan fungsi (supaya tak ralat kat page lain)
if (butangSokong) {
    butangSokong.addEventListener('click', function() {
        alert("YNWA! You'll Never Walk Alone. Terima kasih atas sokongan padu anda!");
    });
}

// FUNCTION 2: Untuk Hantar Borang dekat contact.html
const borang = document.getElementById('borangPeminat');

if (borang) {
    borang.addEventListener('submit', function(event) {
        // Alang-alang sekat halaman daripada refresh automatik masa hantar borang
        event.preventDefault();
        
        // Ambil nilai nama yang diisi oleh pengguna
        const namaPengguna = document.getElementById('nama').value;
        
        // Keluarkan mesej alert yang interaktif
        alert("Pendaftaran Berjaya!\nTerima kasih " + namaPengguna + ", anda telah rasmi menyertai komuniti peminat LFC Malaysia. #YNWA");
        
        // Kosongkan balik borang selepas hantar
        borang.reset();
    });
}