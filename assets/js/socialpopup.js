
// Image URLs array
var imageUrls = [
  { url: "assets/images/icon-insta.png", text: "Instagram" },
  { url: "assets/images/icon-x.png", text: "X" },
  { url: "assets/images/icon-whatsapp.png", text: "WhatsApp" },
  { url: "assets/images/icon-chain.png", text: "Copy Link" }
];

// Function to generate HTML for each image
function generateImageHtml(imageUrl, text) {
  return `
    <div class="image-container">
      <img src="${imageUrl}" alt="Image" class="clickable-image">
      <p>${text}</p>
    </div>
  `;
}


// Function to append images to a container
function appendImagesToContainer(containerId) {
  var container = document.getElementById(containerId);
  if (container) {
    imageUrls.forEach(function(imageInfo) {
      var imageUrl = imageInfo.url;
      var text = imageInfo.text;
      var imageHtml = generateImageHtml(imageUrl, text);
      container.innerHTML += imageHtml;
    });
  }
}

// Call the function to append images to a container
appendImagesToContainer("imageContainer");

// Event listener for clickable images
document.querySelectorAll(".clickable-image").forEach(function(image) {
  image.addEventListener("click", function() {
      // Add your functionality for handling image click events here
      console.log("Image clicked: " + this.src);
  });
});

// Get the modal for social sharing
var shareModal = document.getElementById("sharePopup");

// Get the <span> element that closes the social sharing modal
var shareCloseBtn = document.querySelector("#sharePopup .close");

// Function to open the social sharing modal
function openShareModal() {
  shareModal.style.display = "block";
}

// Function to close the social sharing modal
function closeShareModal() {
  shareModal.style.display = "none";
}

// When the user clicks on the share button, open the social sharing modal
document.getElementById("shareLink").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default action of the link
  openShareModal();
});

// When the user clicks on <span> (x) or outside of the modal, close the social sharing modal
shareCloseBtn.onclick = function() {
  closeShareModal();
};

window.onclick = function(event) {
  if (event.target == shareModal) {
      closeShareModal();
  }
};

// Event listeners for social sharing buttons (Instagram, Twitter, WhatsApp, Copy Link)
document.querySelector("#sharePopup .share-instagram").addEventListener("click", function(event) {
  event.preventDefault();
  // Add your Instagram sharing functionality here
});

document.querySelector("#sharePopup .share-twitter").addEventListener("click", function(event) {
  event.preventDefault();
  // Add your Twitter sharing functionality here
});

document.querySelector("#sharePopup .share-whatsapp").addEventListener("click", function(event) {
  event.preventDefault();
  // Add your WhatsApp sharing functionality here
});

document.querySelector("#sharePopup .copy-link").addEventListener("click", function(event) {
  event.preventDefault();
  // Add your functionality to copy the event link here
});
