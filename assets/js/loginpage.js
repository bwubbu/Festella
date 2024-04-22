document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById('container');
  const registerBtn = document.getElementById('register');
  const login = document.getElementById('login');
  const loginBtn = document.getElementById('loginBtn');

  // Function to handle sign-in button click
  function signInButtonClick(event) {
    event.preventDefault(); // Prevent form submission
    window.location.href = 'userindex.html'; // Redirect to index.html
  }

  // Add event listeners to register and login buttons
  registerBtn.addEventListener('click', () => {
    container.classList.add("active");
  });

  login.addEventListener('click', () => {
    container.classList.remove("active");
  });

  loginBtn.addEventListener('click', (event) => {
    container.classList.remove("active");
    signInButtonClick(event); // Call the signInButtonClick function
  });

  const forgotPasswordLink = document.getElementById("forgot-password-link");
  const signInFormContainer = document.querySelector(".sign-in");

  forgotPasswordLink.addEventListener("click", function(event) {
    event.preventDefault();
    signInFormContainer.innerHTML = `
      <form>
        <h1>Change Password</h1>
        <div class="social-icons"></div>
        <span>Type in your e-mail address in the field below</span>
        <input type="email" placeholder="Email">
        <button>Submit</button>
      </form>
    `;
  });
});