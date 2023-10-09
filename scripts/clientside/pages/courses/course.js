/* Variable and initialization */
// Format get params.   ?kode_mapel=x&nama_mapel=y
let parentDiv = document.getElementsByClassName("course")[0];

function loadPage() {
  auth(["user"], `/pages/home/home.html`);
  generateNavbar();
  generateFooter();
}

/* Functions */
/* Display */
function loadCourse(courseData) {
  courseData.map((el) =>
    parentDiv.insertAdjacentHTML(
      "beforeend",
      `
      <div class="content" onclick="openCourse(${el.kode_mapel}, ${el.judul})">
          <img 
          src="../../../../assets/module-profile.png" 
          alt="module profile icon"
          id="module-profile"
          />
          <div class="contentText">
              <h2>${el.judul}</h2>
              <p>${el.deskripsi}</p>
          </div>
      </div>
      `
    )
  );
}

/* Connections to Server */
function getCourses() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let courseData;
      console.log(this.responseText);
      let serverResponse = JSON.parse(this.responseText);
      if (serverResponse["status"]) {
        courseData = serverResponse["data"];
      } else {
        courseData = null;
      }
      loadCourse(courseData);
    }
  };
  xhttp.open(
    "GET",
    "http://localhost:8000/api/courseapi/getallcourse",
    true
  );
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.withCredentials = true;
  xhttp.send();
}

/* Redirect */
function openCourse(kode_mapel, nama_mapel){
  window.location.href= '../module/module.html?kode_mapel='+kode_mapel+" &nama_mapel=" + nama_mapel};

/* caller */
window.addEventListener("load", getCourses);