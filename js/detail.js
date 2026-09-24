// Toggle menu navbar mobile
document.querySelector('.nav-toggle')?.addEventListener('click', () => {
  document.querySelector('.nav-links')?.classList.toggle('open');
});

// Fungsi ganti preview gambar saat thumbnail diklik
function changeImage(content) {
  const mainImage = document.getElementById('mainImage');
  const sidePreview = document.getElementById('sidePreview');
  
  if (mainImage) mainImage.innerHTML = content;
  if (sidePreview) sidePreview.innerHTML = content;

  // Aktifkan border/style pada thumbnail yang dipilih
  const thumbs = document.querySelectorAll('.img-thumb');
  thumbs.forEach(thumb => {
    if (thumb.innerHTML === content) {
      thumb.classList.add('active');
    } else {
      thumb.classList.remove('active');
    }
  });
}