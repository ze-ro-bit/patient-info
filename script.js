// signin

// let signupBtn = document.getElementById("signupBtn");
// let signinBtn = document.getElementById("signinBtn");
// let nameField = document.getElementById("nameField");
// let title = document.getElementById("title");

// signinBtn.onclick = function(){
//     nameField.style.maxHeight = "0";
//     title.innerHTML = "Sign In";
//     signupBtn.classList.add("disable");
//     signinBtn.classList.add("disable");
// }

// signupBtn.onclick = function(){
//     nameField.style.maxHeight = "60px";
//     title.innerHTML = "Sign Up";
//     signupBtn.classList.add("disable");
//     signinBtn.classList.add("disable");
// }


const form = document.querySelector("form");


form.addEventListener("submit", (event) => {

  event.preventDefault();


  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");


  const username = usernameInput.value;
  const password = passwordInput.value;

 
  if (username === "admin" && password === "password") {

    alert("Login successful!");

    window.location.href = "patient-info.html";
  } else {

    alert("Invalid username or password. Please try again.");
  }
});





