function getSession() {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const session = JSON.parse(this.responseText).data;
      console.log(session);
    }
  };

  xhttp.open("GET", "http://localhost:8000/api/auth/info", true);
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.withCredentials = true;
  xhttp.send();
}
