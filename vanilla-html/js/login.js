 // Handle login form submission
 $("#loginForm").submit(async function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get input values
  const username = $("#loginUsername").val();
  const password = $("#loginPassword").val();

  if (username && password) {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while processing your request.');
    }
  }
});

$("#signupForm").submit(async function(event) {
  event.preventDefault();

  var signupUsername = $("#signupUsername").val();
  var signupEmail = $("#signupEmail").val();
  var signupPassword = $("#signupPassword").val();

  if (signupUsername && signupEmail && signupPassword) {
    const response = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
})