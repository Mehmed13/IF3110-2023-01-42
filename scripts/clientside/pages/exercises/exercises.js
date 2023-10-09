exerciseData = [
  {
    title: "Exercise 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Exercise 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Exercise 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

function getExercises() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let exerciseData;
      console.log(this.responseText);
      let serverResponse = JSON.parse(this.responseText);
      if (serverResponse["status"]) {
        exerciseData = serverResponse["data"];
      } else {
        exerciseData = null;
      }
      loadExercises(exerciseData);
    }
  };
  xhttp.open(
    "GET",
    "http://localhost:8000/api/exerciseapi/getallexercise",
    true
  );
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.withCredentials = true;
  xhttp.send();
}

function loadSoal(exerciseData) {
  exerciseData.map((el) =>
    parentDiv.insertAdjacentHTML(
      "beforeend",
      `
      <a href="../material/material.html?id_material=+${el.id_material}" class="exercise-link">
        <div class="exercise">
            <img 
            src="../../../../assets/module-profile.png" 
            alt="module profile icon"
            id="module-profile"
            />
            <div class="content">
                <h2>${el.judul}</h2>
                <p>${el.deskripsi}</p>
            </div>
        </div>
    </a>
      `
)
    );
}

var parentDiv = document.getElementById("exercises");
exerciseData.map((el) =>
  parentDiv.insertAdjacentHTML(
    "beforeend",
    `
    <a href="" class="exercise-link">
        <div class="exercise">
            <img 
            src="../../../../assets/module-profile.png" 
            alt="module profile icon"
            id="module-profile"
            />
            <div class="content">
                <h2>${el.title}</h2>
                <p>${el.desc}</p>
            </div>
        </div>
    </a>`
  )
);

function loadPage() {
  auth(["admin", "user"], `/pages/home/home.html`);
  generateNavbar();
  generateFooter();
}

function openExercise(id_material){
  window.location.href= '../material/material.html?id_material='+id_material};