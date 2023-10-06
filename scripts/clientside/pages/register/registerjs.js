function auth() {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const session = JSON.parse(this.responseText).data;
      if (session["username"] != undefined) {
        window.location = "http://localhost:8080/pages/home/home.html";
      }
    }
  };

  xhttp.open("GET", "http://localhost:8000/api/auth/info", true);
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.withCredentials = true;
  xhttp.send();
}

function register() {
  const data = {
    nama_depan: document.getElementById("nama_depan").value,
    nama_belakang: document.getElementById("nama_belakang").value,
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    confirm_password: document.getElementById("confirm_password").value,
  };

  if (!checkField(data)) {
    showMessage(false, "Incomplete form");
  } else if (!checkPassword(data.password, data.confirm_password)) {
    showMessage(false, "Password doesn't match");
  } else {
    showMessage(true, "Account registered succecfully");
    registerUserToBackend();
  }
}

function registerUserToBackend() {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const resStatus = JSON.parse(this.responseText).status;
      if (resStatus) {
        window.location = "http://localhost:8080/pages/login/login.html";
      }
    }
  };

  const data = {
    nama_depan: document.getElementById("nama_depan").value,
    nama_belakang: document.getElementById("nama_belakang").value,
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  xhttp.open("POST", "http://localhost:8000/api/registerapi/register", true);
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.withCredentials = true;
  xhttp.send(JSON.stringify(data));
}

function checkPassword(password, confirm) {
  return password === confirm && password !== "";
}

function checkField(data) {
  if (
    data.nama_depan === "" ||
    data.nama_belakang === "" ||
    data.username === "" ||
    data.email === "" ||
    data.password === "" ||
    data.confirm_password === ""
  ) {
    return false;
  }
  return true;
}

function showMessage(status, message) {
  const body = document.body;

  const alertElement = document.createElement("div");
  alertElement.className = "alert-notification slide-in";

  const alertImg = document.createElement("img");
  if (status) {
    alertImg.src = "../../assets/alert_success.png";
    alertImg.alt = "fail";
  } else {
    alertImg.src = "../../assets/alert_fail.png";
    alertImg.alt = "success";
  }
  const alertText = document.createElement("p");
  alertText.innerHTML = message;

  alertElement.appendChild(alertImg);
  alertElement.appendChild(alertText);

  body.appendChild(alertElement);

  setTimeout(() => {
    alertElement.classList.add("slide-out");
    setTimeout(() => {
      alertElement.remove();
    }, 200);
  }, 3000);
}
