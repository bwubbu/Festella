document.addEventListener("DOMContentLoaded", function() {
    // Get references to input elements
    const usernameInput = document.querySelector("#usernameInput");
    const aboutMeInput = document.querySelector("#aboutMeInput");
    const profilePicInput = document.querySelector("#profilePicInput");
  
    // Function to handle form submission
    function handleFormSubmit(event) {
      event.preventDefault();
  
      // Get input values
      const newUsername = usernameInput.value;
      const newAboutMe = aboutMeInput.value;
      const newProfilePic = profilePicInput.files[0];
  
      // Perform actions to update profile
      // For example:
      // 1. Update username
      // 2. Update about me
      // 3. Upload and update profile picture
      // You need to implement the logic for these actions based on your requirements
  
      // After handling form submission, navigate to profile.html
      window.location.href = "profile.html";
    }
  
    // Add event listener to the form
    const profileForm = document.querySelector("#profileForm");
    profileForm.addEventListener("submit", handleFormSubmit);
  });