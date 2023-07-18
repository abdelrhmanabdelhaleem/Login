var youremailInput = document.getElementById("Enteremail");
var yourpasswordInput = document.getElementById("Enterpassword");
var btnLogin = document.getElementById("Login");
var incorrect = document.getElementById("incorrect");
isLoginedIn = false;


btnLogin.onclick = function () {
  var availableAccounts = JSON.parse(localStorage.getItem("myaccount"));
  for (var i = 0; i < availableAccounts.length; i++) {
    if (availableAccounts[i].email == youremailInput.value &&
       availableAccounts[i].password == yourpasswordInput.value
    ) {
      isLoginedIn = true;
      localStorage.setItem( "loggedName", JSON.stringify(availableAccounts[i].name));
      break;
    }
  }

  if (isLoginedIn) {
   
    window.location.replace("home.html");
  } else {
       incorrect.classList.remove("d-none");
       
    
  }
};
