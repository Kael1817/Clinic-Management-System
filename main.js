const btn = document.querySelector('#btn');
let attempts = 3; 

btn.addEventListener('click', validate);

function validate() {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  if (username === "admin" && password === "admin123") {
    alert("Login Successful!");
    resetFields();
  } else if (username === '' || password === '') {
    alert("Please fill in all fields");
  } else {
    attempts--; 
    if (attempts > 0) {
      alert(`Incorrect username or password. You have ${attempts} attempts left.`);
    } else {
      alert("You have exceeded the maximum number of login attempts.");
      btn.disabled = true; 
    }
  }

  resetFields(); 
}


function resetFields() {
  document.querySelector('#username').value = '';
  document.querySelector('#password').value = '';
}
