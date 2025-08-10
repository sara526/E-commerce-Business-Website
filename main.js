 const carouselEl = document.getElementById('carouselVideoExample');
  const carousel = new bootstrap.Carousel(carouselEl, { interval: false });
  const videos = carouselEl.querySelectorAll('video');

  videos.forEach(video => {
    video.removeAttribute('loop');
    video.setAttribute('muted', true);
  });

  videos.forEach((video, index) => {
    video.addEventListener('ended', () => {
      carousel.next();
      carouselEl.addEventListener(
        'slid.bs.carousel',
        function handler() {
          const nextIndex = (index + 1) % videos.length;
          videos[nextIndex].play();
          carouselEl.removeEventListener('slid.bs.carousel', handler);
        }
      );
    });
  });

  videos[0].play();