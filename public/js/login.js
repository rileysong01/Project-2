// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent the default form submission
  console.log('Hello');
  // Get input values
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  if (username && password) {
    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      function myFunction() {
        console.log('This function is executed every 1 second.');
      }

      const intervalId = setInterval(myFunction, 1000);


      if (response.ok) {
        setTimeout(() => {
          clearInterval(intervalId);
          console.log('Interval cleared.');
        }, 5000);
        document.location.replace('/');
        console.log('good');
      } else {
        console.log(response);
        alert(response.statusText);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while processing your request.');
    }
  }
});

document.getElementById('signupForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  var username = document.getElementById('signupUsername').value;
  var email = document.getElementById('signupEmail').value;
  var password = document.getElementById('signupPassword').value;

  if (username && email && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      window.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
});
