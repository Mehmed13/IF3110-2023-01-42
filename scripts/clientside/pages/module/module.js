// materialData = [
//   { title: "Course 1" },
//   { title: "Course 2" },
//   { title: "Course 3" },
// ];

let course_id = window.location.search.substring(1).split('=')[1];
let parentDiv = document.getElementsByClassName("module")[0];

parentDiv = document.getElementById("material");
materialData.map((el) =>
  parentDiv.insertAdjacentHTML(
    "beforeend",
    `
    <a href="" class="course-link">
        <div class="material">
            <div class="content">
                <h3>${el.title}</h3>
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


function showModule(no_modul){
  window.location.href = ''
}