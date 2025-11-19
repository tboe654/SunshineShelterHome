// Get all gallery items
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = item.src;
        captionText.innerText = item.alt;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
