function regex() {
  let firstname = document.getElementById("firstname");
  let lastname = document.getElementById("lastname");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let confirmpassword = document.getElementById("confirmpassword");

  var reg = 0;
  var error = "";

  if (firstname.value.match(/^[A-Z][a-z]{2,30}$/)) {} else {
    error = error + "\nFirstname";
    reg++;
  }

  if (lastname.value.match(/^[A-Z][a-z]{2,30}$/) && lastname.value != firstname.value) {} else {
    error = error + "\nLastname";
    reg++;
  }

  if (email.value.match(/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i)) {} else {
    error = error + "\nEmail";
    reg++;
  }

  if (password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {} else {
    error = error + "\nPassword";
    reg++;
  }

  if (password.value == confirmpassword.value && password.value.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/)) {} else {
    error = error + "\nConfrim Password";
    reg++;
  }

  if (acceptcheckbox.checked == true) {} else {
    error = error + "\nAccept the Terms of Use & Privacy Policy";
    reg++
  }

  if (reg == 0) {
    alert("Registered");
  } else {
    alert("Please correct:" + error);

  }
  reg = 0;
  error = "";
}

function firstname() {
  let firstname = document.getElementById("firstname");

  if (firstname.value.match(/^[A-Z][a-z]{2,30}$/)) {
    document.getElementById("firstname").style.outlineColor = "#008000";
    document.getElementById("firstname").style.borderBottom = "2px solid #008000";
  } else {
    document.getElementById("firstname").style.outlineColor = "#000";
    document.getElementById("firstname").style.borderBottom = "1px solid #b3b3b3";
  }
}

function lastname() {
  let lastname = document.getElementById("lastname");
  let firstname = document.getElementById("firstname");

  if (lastname.value.match(/^[A-Z][a-z]{2,30}$/) && lastname.value != firstname.value) {
    document.getElementById("lastname").style.outlineColor = "#008000";
    document.getElementById("lastname").style.borderBottom = "2px solid #008000";
  } else {
    document.getElementById("lastname").style.outlineColor = "#000";
    document.getElementById("lastname").style.borderBottom = "1px solid #b3b3b3";
  }
}

function email() {
  let email = document.getElementById("email");

  if (email.value.match(/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i)) {
    document.getElementById("email").style.outlineColor = "#008000";
    document.getElementById("email").style.borderBottom = "2px solid #008000";
  } else {
    document.getElementById("email").style.outlineColor = "#000";
    document.getElementById("email").style.borderBottom = "1px solid #b3b3b3";
  }
}

function password() {
  let password = document.getElementById("password");

  if (password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
    document.getElementById("password").style.outlineColor = "#008000";
    document.getElementById("password").style.borderBottom = "2px solid #008000";
  } else {
    document.getElementById("password").style.outlineColor = "#000";
    document.getElementById("password").style.borderBottom = "1px solid #b3b3b3";
  }
}

function confirmpassword() {
  let confirmpassword = document.getElementById("confirmpassword");
  let password = document.getElementById("password");

  if (password.value == confirmpassword.value && password.value.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/)) {
    document.getElementById("confirmpassword").style.outlineColor = "#008000";
    document.getElementById("confirmpassword").style.borderBottom = "2px solid #008000";
  } else {
    document.getElementById("confirmpassword").style.outlineColor = "#000";
    document.getElementById("confirmpassword").style.borderBottom = "1px solid #b3b3b3";
  }
}