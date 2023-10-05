function test() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const singerdata = JSON.parse(this.responseText).data;
      console.log(singerdata);
      appendData(singerdata);
    }
  };

  xhttp.open("POST", "http://localhost:8000/api/test/turu", true);
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.withCredentials = false;
  xhttp.send();
}

function appendData(data) {
  var div = document.getElementById("dummy");
  var p = document.createElement("p");

  p.innerHTML = data;

  div.appendChild(p);
}
