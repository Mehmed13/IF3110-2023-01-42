function auth(roles, redirect) {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const session = JSON.parse(this.responseText);
      if (session["status"]) {
        if (roles.length === 0 || !roles.includes(session["data"]["role"])) {
          window.location = "http://localhost:8080" + redirect;
        }
      }
    }
  };

  xhttp.open("GET", "http://localhost:8000/api/auth/info", true);
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.withCredentials = true;
  xhttp.send();
}
