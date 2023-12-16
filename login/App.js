let email = localStorage.getItem("email");
// console.log(email)
let password = localStorage.getItem("password");
// console.log(password)

let fun = document.getElementById("formTag");
fun.addEventListener("submit", e => {
  e.preventDefault();
  let em = document.getElementById("LoginMail").value;
  let pw = document.getElementById("LoginPassword").value;
  if (email == em && password == pw && em != "" && pw != "") {
    alert("login sucessfully");
    window.open("../sFinal/sFinal.html");
  } else {
    alert("enter email or password correctly");
  }
});
