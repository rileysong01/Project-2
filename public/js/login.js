// Handle login form submission
$('#loginForm').submit(async function (event) {
  event.preventDefault(); // Prevent the default form submission
  console.log('Hello');
  // Get input values
  const username = $('#loginUsername').val();
  const password = $('#loginPassword').val();

  if (username && password) {
    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while processing your request.');
    }
  }
});

$('#signupForm').submit(async function (event) {
  event.preventDefault();

  var username = $('#signupUsername').val();
  var email = $('#signupEmail').val();
  var password = $('#signupPassword').val();

  if (username && email && password) {
    const response = await fetch('/api/user', {
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
});
