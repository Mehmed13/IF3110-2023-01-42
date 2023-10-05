function login() {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // const userdata = JSON.parse(this.responseText).data;
      console.log(this.responseText);
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
