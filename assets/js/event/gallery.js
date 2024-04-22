document.addEventListener('DOMContentLoaded', function () {
  // Variable to store the Swiper instance
  let swiper;

  // Function to populate images in the carousel and initialize Swiper
  function populateGallery(images) {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML = ''; // Clear previous images

    images.forEach(imageSrc => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');

      const image = document.createElement('img');
      image.src = imageSrc;
      image.alt = 'Gallery Image';

      slide.appendChild(image);
      swiperWrapper.appendChild(slide);
    });

    // Initialize Swiper if it's not already initialized
    if (!swiper) {
      swiper = new Swiper('.swiper-container', {
        loop: true, // Enable looping
        pagination: {
          el: '.swiper-pagination', // Pagination container
          clickable: true, // Enable clickable pagination
        },
        autoplay: {
          delay: 3000, // Auto rotate every 3 seconds
          disableOnInteraction: false, // Enable auto-rotate even if user interacts with the swiper
        },
        speed: 1000, // Transition speed in milliseconds
        effect: 'fade', // Fade effect for smooth transition
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    } else {
      // Update Swiper after dynamically adding new slides
      swiper.update();
      swiper.slideTo(0); // Optional: Reset to the first slide
    }
  }

  // Call populateGallery with your array of image URLs
  const images = [
    'assets/images/details/Ado_detail1.jpg',
    'assets/images/details/Ado_detail2.jpg',
    'assets/images/details/Coldplay_detail2.jpg',
    // Add more image URLs as needed
  ];
  populateGallery(images);
});
