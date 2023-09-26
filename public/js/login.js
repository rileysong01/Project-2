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
  
      if (response.ok) {

        const responseData = await response.json();
        console.log(responseData)
        if (responseData.loggedIn) {
          // User is logged in
          document.location.replace('/');
          console.log('User is logged in.');
        } else {
          // User is not logged in
          console.log('User is not logged in.');
          alert('Login failed.');
        }

      } else {
        console.log(response);
        alert(response.statusText);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while processing your request.');
    }
  }
}); // <--- Add this closing curly brace

document.getElementById('signupForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  
  const username = document.getElementById('signupUsername').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  
  if (username && email && password) {

    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        window.location.replace('/');
      } else {
        const errorResponse = await response.json();
        // Handle error messages from the server
        if (errorResponse.message) {
          alert(errorResponse.message);
        } else {
          alert('An error occurred while signing up.');
        }
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while processing your request.');

    }
  } else {
    alert('Please fill in all required fields.');
  }
});
