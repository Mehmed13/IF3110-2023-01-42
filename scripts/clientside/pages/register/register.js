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
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const resStatus = JSON.parse(this.responseText).status;
      if (resStatus) {
        window.location = "http://localhost:8080/pages/login/login.html";
      }
    }
  };

  let data = {
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
