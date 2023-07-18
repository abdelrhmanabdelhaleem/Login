var nameInput = document.getElementById("yourname");
var emailInput = document.getElementById("youremail");
var passwordInput = document.getElementById("yourpassword");
var inputs = document.getElementsByClassName("form-control");
var btnup = document.getElementById("SignUp");
var accounts = [];
var Success = document.getElementById("Success");
var notSuccess = document.getElementById("notSuccess");
var isExistEmail = false;
var LoginedIn = false;
var LoginedIn2 = false;

btnup.onclick = function () {
  add();
  clearform();
};

function add() {
  var account = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };
  console.log(account);

  if (localStorage.key("myaccount")) {
    accounts = JSON.parse(localStorage.getItem("myaccount"));
    for (let i = 0; i < accounts.length; i++) {
      if (accounts[i].email != account.email) {
        accounts.push(account);
        localStorage.setItem("myaccount", JSON.stringify(accounts));
        Success.classList.remove("d-none");
        isExistEmail = false;
        break;
      } else {
        isExistEmail = true;
      }
    }
  } else {
    accounts.push(account);
    localStorage.setItem("myaccount", JSON.stringify(accounts));
    Success.classList.remove("d-none");
    isExistEmail = false;
  
  }

  if (isExistEmail) {
    Success.classList.add("d-none");
    notSuccess.classList.remove("d-none");
  }
}

nameInput.onkeyup = function () {
  var nameRejex = /^[a-z]{3,15}$/;
  if (nameRejex.test(nameInput.value)) {
    nameInput.classList.add("is-valid");
    nameInput.classList.remove("is-invalid");
    LoginedIn = true;
    removedisabled();
  } else {
    nameInput.classList.add("is-invalid");
    nameInput.classList.remove("is-valid");
    LoginedIn = false;
  }
};

emailInput.onkeyup = function () {
  var nameRejex1 = /^[a-zA-Z_]{8,25}[@][a-z]{1,7}\.[a-z]{3}$/;
  if (nameRejex1.test(emailInput.value)) {
    emailInput.classList.add("is-valid");
    emailInput.classList.remove("is-invalid");
    LoginedIn2 = true;
    removedisabled();
  } else {
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
    LoginedIn2 = false;
  }
};
function clearform() {
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

function removedisabled() {
  if (LoginedIn == true && LoginedIn2 == true) {
    btnup.removeAttribute("disabled");
  } else {
    btnup.disabled = "true";
  }
}
