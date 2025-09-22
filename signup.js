function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: ", response.credential);
  // Send this token to your backend for verification and user login/signup
  // On success, redirect to another page:
  window.location.href = "home.html"; // change to your desired redirect page
}

const headingText = "Sign Up";
let idx = 0;
const speed = 120;

function typeWriter() {
  const mainHeading = document.getElementById('main-heading');
  mainHeading.textContent = headingText.slice(0, idx);
  if (idx < headingText.length) {
    idx++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = function () {
  // Initialize Google Sign-In
  google.accounts.id.initialize({
    client_id: "106122189910-13mte8jkq61s7r1krrpdjmku5hlp3eb0.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });

  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large" }
  );
  
  google.accounts.id.prompt(); // display the One Tap prompt

  // Start typewriter effect
  typeWriter();
};
