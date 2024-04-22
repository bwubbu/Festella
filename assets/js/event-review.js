// Globals
var rating = $('.rating');

// Create rating popup
rating.on('click', function(e) {
  var self = $(this),
      userRating = $('<ul />').attr('class', 'user-rating animate');
  
  // Create stars if not already on page
  if (!self.find('.user-rating').length) {
    for (var i = 0; i < 5; i++) {
      userRating.prepend('<li data-rating="' + (i + 1) + '"><i class="fa fa-star"></i></li>');
    };
    
    // Add stars to page
    userRating.appendTo(self);
    setTimeout(function() {
      userRating.removeClass('animate');
    }, 50);
  };
  
  e.preventDefault();
  e.stopPropagation();
});

// Select rating
rating.on('click', '.user-rating li', function() {
  var self = $(this),
      rateVal = self.data('rating');
  
  setTimeout(function() {
    removeRating(rateVal);
  }, 300);
});

// Remove rating popup
function removeRating(rateVal) {
  rating.children('.user-rating').addClass('animate');
  setTimeout(function() {
    rating.children('.user-rating').remove();
  }, 350);
  
  if (rateVal) {
    // Ajax submit here
    
    rating.addClass('hide');
    setTimeout(function() {
      rating.text(rateVal).removeClass('hide');
    }, 150);
  };
};

$(document).on('click', function() {
  if (rating.children('.user-rating').length) {
    removeRating();
  };
});

// Sample reviews data (you can replace this with actual data from backend)
var reviewsData = [
  {
    eventId: 1, // Linking this review to an event
    username: "User1",
    rating: 4,
    images: ["assets/images/event/RandomEvent1.jpg","assets/images/event/RandomEvent2.jpeg"],
    videos: ["assets/videos/event/RandomVideo1.mp4"],
    comments: ["What an amazing event!"],
    date: "2022-01-13"
},
  {
    eventId: 1,
    username: "User2",
    rating: 3,
    images: ["assets/images/event/RandomEvent3.jpg"],
    videos: [],
    comments: ["I wish the venue is cooler"],
    date: "2023-11-13"
  },
  {

    eventId: 1,
    username: "User3",
    rating: 5,
    images: ["assets/images/event/RandomEvent4.jpg"],
    videos: ["assets/videos/event/RandomVideo2.mp4"],
    comments: ["Best event ever!!!!"],
    date: "2009-08-29"
  },

  {
    eventId: 2, // Linking this review to an event
    username: "User1",
    rating: 1,
    images: ["assets/images/event/RandomEvent5.webp"],
    videos: ["assets/videos/event/RandomVideo3.mp4"],
    comments: ["he event had a great concept, but it was poorly executed"],
    date: "2019-01-01"
},
  {
    eventId: 2,
    username: "User2",
    rating: 2,
    images: ["assets/images/event/RandomEvent6.jpg","assets/images/event/RandomEvent7.jpg"],
    videos: [],
    comments: ["Not only was this event entertaining, but it was also educational. The guest speakers shared valuable insights, and I left feeling inspired and enlightened"],
    date: "2021-04-21"
  },
  {

    eventId: 2,
    username: "User3",
    rating: 4,
    images: ["assets/images/event/RandomEvent8.jpg"],
    videos: ["assets/videos/event/RandomVideo4.mp4"],
    comments: ["Best event ever!!!!"],
    date: "2020-08-30"
  },

  {
    eventId: 2,
    username: "User4",
    rating: 2,
    images: ["assets/images/event/RandomEvent9.jpg"],
    videos: ["assets/videos/event/RandomVideo4.mp4"],
    comments: ["The event was marred by technical issues, especially with the sound system. I"],
    date: "2011-08-21"
  },

  {
    eventId: 3, // Linking this review to an event
    username: "User1",
    rating: 4,
    images: ["assets/images/event/RandomEvent10.jpg"],
    videos: ["assets/videos/event/RandomVideo5.mp4"],
    comments: ["What an amazing event!"],
    date: "2017-03-05"
},
  {
    eventId: 3,
    username: "User2",
    rating: 3,
    images: ["assets/images/event/RandomEvent11.jpg"],
    videos: ["assets/videos/event/RandomVideo6.mp4"],
    comments: ["The venue was breathtaking, but the lack of clean restroom facilities was disappointing."],
    date: "2019-10-02"
  },
  {

    eventId: 3,
    username: "User3",
    rating: 5,
    images: ["assets/images/event/RandomEvent12.jpg"],
    videos: ["assets/videos/event/RandomVideo7.mp4"],
    comments: ["Impressed with how well-organized this event was."],
    date: "2024-08-20"
  },

  {
    eventId: 4, // Linking this review to an event
    username: "User1",
    rating: 4,
    images: ["assets/images/event/RandomEvent13.webp"],
    videos: ["assets/videos/event/RandomVideo5.mp4"],
    comments: ["This event truly brought the community together."],
    date: "2012-11-17"
},
  {
    eventId: 4,
    username: "User2",
    rating: 3,
    images: ["assets/images/event/RandomEvent14.jpg"],
    videos: ["assets/videos/event/RandomVideo6.mp4"],
    comments: ["Fun event with lots to see and do, but it was way too crowded"],
    date: "2017-02-02"
  },
  {

    eventId: 4,
    username: "User3",
    rating: 5,
    images: ["assets/images/event/RandomEvent15.jpg"],
    videos: ["assets/videos/event/RandomVideo7.mp4"],
    comments: ["Best event ever!!!!"],
    date: "2024-04-14"
  },

  {
    eventId: 5, // Linking this review to an event
    username: "User1",
    rating: 5,
    images: ["assets/images/event/RandomEvent16.jpg"],
    videos: ["assets/videos/event/RandomVideo5.mp4"],
    comments: ["Whether you're young or young at heart, this event has something for everyone."],
    date: "2019-03-04"
},
  {
    eventId: 5,
    username: "User2",
    rating: 2,
    images: ["assets/images/event/RandomEvent1.jpg"],
    videos: ["assets/videos/event/RandomVideo6.mp4"],
    comments: ["Was expecting a family-friendly environment, but some parts of the event were not suitable for kids. "],
    date: "2017-11-08"
  },
  {

    eventId: 5,
    username: "User3",
    rating: 5,
    images: ["assets/images/event/RandomEvent2.jpeg"],
    videos: ["assets/videos/event/RandomVideo7.mp4"],
    comments: ["I love web programming :)"],
    date: "2021-08-30"
  },

  {
    eventId: 6, // Linking this review to an event
    username: "User1",
    rating: 4,
    images: ["assets/images/event/RandomEvent3.jpg"],
    videos: ["assets/videos/event/RandomVideo5.mp4"],
    comments: ["Sometimes you just need to listen"],
    date: "2019-10-28"
},
  {
    eventId: 6,
    username: "User2",
    rating: 3,
    images: ["assets/images/event/RandomEvent4.jpg"],
    videos: ["assets/videos/event/RandomVideo6.mp4"],
    comments: ["She is not coming back"],
    date: "2017-07-30"
  },
  {

    eventId: 6,
    username: "User3",
    rating: 4,
    images: ["assets/images/event/RandomEvent5.jpg"],
    videos: ["assets/videos/event/RandomVideo7.mp4"],
    comments: ["As a foodie, I was in heaven at this event! "],
    date: "2016-06-21"
  }
];

// Get the value of a query parameter from a URL
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Render reviews for a specific event
function populateReviews(eventId) {
  const reviews = reviewsData.filter(review => review.eventId === eventId);
  renderReviews(reviews);
}

// Render reviews in the DOM
function renderReviews(reviews) {
  const reviewsContainer = document.getElementById('reviews');
  reviewsContainer.innerHTML = ''; // Clear previous content
  reviews.forEach(review => {
      reviewsContainer.innerHTML += createReviewHTML(review);
  });
}

// Generate HTML for each review
function createReviewHTML(review) {
  return `
      <div class="review">
          <div class="username">${review.username}</div>
          <div class="rating" data-rating="${review.rating}">Rating: ${review.rating}/5</div>
          <div class="media">${renderMedia(review.images, 'image')}${renderMedia(review.videos, 'video')}</div>
          <div class="comments">${review.comments.join('<br>')}</div>
          <div class="date">Date: ${review.date}</div>
      </div>
  `;
}

// Render media elements for each review
function renderMedia(mediaList, type) {
  return mediaList.map(media => type === 'image' ? `<img src="${media}" alt="Image">` : `<video controls><source src="${media}" type="video/mp4"></video>`).join('');
}

// Sort reviews based on user selection
function sortReviews(sortOption, reviews) {
  if (sortOption === 'lowest-rated') {
      reviews.sort((a, b) => a.rating - b.rating);
  } else if (sortOption === 'highest-rated') {
      reviews.sort((a, b) => b.rating - a.rating);
  } else {
      reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  renderReviews(reviews);
}

// Event listeners to handle document ready and interactions
document.addEventListener('DOMContentLoaded', function() {
  const eventId = parseInt(getQueryParam('id'));
  populateReviews(eventId);

  document.getElementById('sort-review').addEventListener('change', function() {
      sortReviews(this.value, reviewsData.filter(review => review.eventId === eventId));
  });

  document.addEventListener('click', function(e) {
      if (e.target.matches('.rating')) {
          let ratingElement = e.target;
          let ratingValue = ratingElement.dataset.rating;
          // This example could be expanded to a real interactive rating feature
          alert(`Rating selected: ${ratingValue}`);
      }
  });

  document.getElementById('submit-review-form').addEventListener('submit', function(e) {
      e.preventDefault();
      submitReview(eventId);
  });
});

// Submit a new review
function submitReview(eventId) {
  const newReview = {
      eventId: eventId,
      username: 'New User',
      rating: parseInt(document.querySelector('.rating h1').textContent),
      images: [],
      videos: [],
      comments: [document.getElementById('review-text').value],
      date: new Date().toISOString().split('T')[0]
  };
  reviewsData.push(newReview);
  populateReviews(eventId); // Update reviews display
  document.getElementById('review-text').value = ''; // Clear form fields
}