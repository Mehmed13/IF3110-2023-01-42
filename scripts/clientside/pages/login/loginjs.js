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

function login() {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const resStatus = JSON.parse(this.responseText).status;
      if (resStatus) {
        window.location = "http://localhost:8080/pages/home/home.html";
      }
    }
  };

  let data = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };
  xhttp.open("POST", "http://localhost:8000/api/auth/login", true);
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.withCredentials = true;
  xhttp.send(JSON.stringify(data));
}
