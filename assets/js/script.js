const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function() {
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