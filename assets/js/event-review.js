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
    username: "User1",
    rating: 4,
    images: ["assets/images/event/RandomEvent1.jpg","assets/images/event/RandomEvent2.jpeg"],
    videos: ["video1.mp4"],
    comments: ["What an amazing event!"],
    date: "2024-04-16"
  },
  {
    username: "User2",
    rating: 3,
    images: ["assets/images/event/RandomEvent3.jpg"],
    videos: [],
    comments: ["I wish the venue is cooler"],
    date: "2024-04-15"
  },
  {
    username: "User3",
    rating: 5,
    images: ["assets/images/event/RandomEvent4.jpg"],
    videos: ["video2.mp4"],
    comments: ["Best event ever!!!!"],
    date: "2024-04-14"
  }
];

// Function to render reviews
function renderReviews(reviews) {
  var reviewsContainer = $('#reviews');
  reviewsContainer.empty(); // Clear previous reviews

  $.each(reviews, function(index, review) {
    var reviewHTML = `
      <div class="review">
        <div class="username">${review.username}</div>
        <div class="rating">Rating: ${review.rating}/5</div>
        <div class="media">
          ${renderMedia(review.images, 'image')}
          ${renderMedia(review.videos, 'video')}
        </div>
        <div class="comments">
          ${renderComments(review.comments)}
        </div>
        <div class="date">Date: ${review.date}</div>
      </div>
    `;
    reviewsContainer.append(reviewHTML);
  });
}

// Function to render media (images or videos)
function renderMedia(mediaList, type) {
  if (mediaList.length === 0) return '';

  var mediaHTML = '';
  $.each(mediaList, function(index, media) {
    if (type === 'image') {
      mediaHTML += `<img src="${media}" alt="${type}">`;
    } else if (type === 'video') {
      mediaHTML += `<video controls><source src="${media}" type="video/mp4"></video>`;
    }
  });
  return mediaHTML;
}



// Function to render comments
function renderComments(comments) {
  if (comments.length === 0) return '';

  var commentsHTML = '';
  $.each(comments, function(index, comment) {
    commentsHTML += `<p>${comment}</p>`;
  });
  return commentsHTML;
}

// Initial render
renderReviews(reviewsData);

// Sorting reviews
$('#sort-review').on('change', function() {
  var sortOption = $(this).val();
  var sortedReviews = [];

  if (sortOption === 'lowest-rated') {
    sortedReviews = reviewsData.slice().sort((a, b) => a.rating - b.rating);
  } else if (sortOption === 'most-recent') {
    sortedReviews = reviewsData.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortOption === 'highest-rated') {
    sortedReviews = reviewsData.slice().sort((a, b) => b.rating - a.rating);
  }

  renderReviews(sortedReviews);
});

// Submit review form
$('#submit-review-form').on('submit', function(e) {
  e.preventDefault();

  var username = 'New User'; // You can replace this with actual logged-in user's username
  var rating = parseInt($('.rating').text());
  var images = []; // Add uploaded image paths here
  var videos = []; // Add uploaded video paths here
  var comments = []; // New review won't have comments initially
  var date = new Date().toLocaleDateString();

  // Create new review object
  var newReview = {
    username: username,
    rating: rating,
    images: images,
    videos: videos,
    comments: comments,
    date: date
  };

  // Add new review to reviewsData array
  reviewsData.unshift(newReview);

  // Re-render reviews
  renderReviews(reviewsData);

  // Clear form fields
  $('.rating').text('0');
  $('#review-text').val('');
});