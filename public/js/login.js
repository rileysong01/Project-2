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
        // window.setTimeout(function () {
        //   document.location.replace('/');
        // }, 1000);
        // document.location.replace('/');
        document.location.replace('/');
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
    
  
    console.log('first response --> ',response)

    if (response.ok) {
      window.location.replace('/');
      
      
      // window.setTimeout(function () {
      //   window.location.replace('/');
      // }, 2000);

      
      
    } else {
      alert(response.statusText);
    }
  }
});
