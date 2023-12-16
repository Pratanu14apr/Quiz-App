  let fun = document.getElementById("formTag");

fun.addEventListener("submit", e => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let phnum = document.getElementById("number").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  if (name == "" || password == "" || phnum == "" || email == "") {
    alert("form cannot be empty");
  } else {
    alert("registered successfully");
    window.open("../login/index.html");
  }
});
