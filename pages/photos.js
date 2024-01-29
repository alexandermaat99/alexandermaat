document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  const imagePaths = [
    "/content/alex1.jpg",
    "/content/alex2.jpg",
    "/content/alex3.jpg",
    "/content/alex4.jpeg",
    "/content/alex5.jpg",
    "/content/alex6.jpg",
    "/content/alex7.jpg",
    "/content/alex8.jpg",
    "/content/alex9.jpg",
    "/content/alex10.jpg",
    "/content/alex11.jpg",
    "/content/alex12.jpg",
    "/content/alex13.jpg",
    "/content/alex14.jpg",
    "/content/alex15.jpg",
    "/content/alex16.png",
    "/content/alex17.jpg",
    "/content/alex18.jpg",
    "/content/alex19.jpg",
    "/content/alex20.jpg",
    "/content/alex21.jpg",
    "/content/alex22.jpeg",
    "/content/alex23.jpeg",
    "/content/alex24.jpg",
    "/content/alex25.jpg",
    "/content/alex26.jpg",
    "/content/alex27.jpg",
    "/content/alex28.jpg",
    "/content/alex29.jpg",
    "/content/alex30.jpeg",
    "/content/alex31.jpg",
    "/content/alex32.jpg",
    "/content/alex33.jpg",
    "/content/alex34.jpg",
    "/content/alex35.jpeg",
  ];
  let currentImageIndex = 0;

  imagePaths.forEach((path, index) => {
    const img = document.createElement("img");
    img.src = path;
    img.loading = "lazy";
    img.classList.add("gallery-img");
    gallery.appendChild(img);

    img.onclick = () => {
      showLightbox(index);
    };
  });

  const showLightbox = (index) => {
    currentImageIndex = index;
    const lightboxImage = document.querySelector(".lightbox-image");
    const lightboxOverlay = document.getElementById("lightbox-overlay");

    lightboxImage.src = imagePaths[currentImageIndex];
    lightboxOverlay.style.display = "flex";
  };

  const updateLightboxImage = () => {
    const lightboxImage = document.querySelector(".lightbox-image");
    lightboxImage.src = imagePaths[currentImageIndex];
  };

  document.getElementById("close-lightbox").onclick = () => {
    document.getElementById("lightbox-overlay").style.display = "none";
  };

  document.getElementById("prev-button").onclick = () => {
    if (currentImageIndex > 0) {
      currentImageIndex--;
      updateLightboxImage();
    }
  };

  document.getElementById("next-button").onclick = () => {
    if (currentImageIndex < imagePaths.length - 1) {
      currentImageIndex++;
      updateLightboxImage();
    }
  };
});
