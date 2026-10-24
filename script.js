
document.addEventListener("DOMContentLoaded", function () {
  // Buat kotak pesan
  const kotak = document.createElement("div");

  kotak.innerHTML = `
    <h2>🎉 Halo, Dunia!</h2>
    <p>JavaScript berhasil ditampilkan.</p>
    <button id="tombolKlik">Klik Saya</button>
    <p id="pesan"></p>
  `;

  // Atur tampilan
  kotak.style.cssText = `
    background: #f0f8ff;
    border: 2px solid #2196f3;
    border-radius: 12px;
    padding: 20px;
    margin: 20px auto;
    max-width: 400px;
    text-align: center;
    font-family: Arial, sans-serif;
    color: #222;
  `;

  // Tampilkan di halaman
  document.body.appendChild(kotak);

  // Aksi tombol
  document.getElementById("tombolKlik").onclick = function () {
    document.getElementById("pesan").textContent =
      "Berhasil! JavaScript berjalan 🚀";
  };
});
