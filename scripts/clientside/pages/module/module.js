materialData = [
  { title: "Course 1" },
  { title: "Course 2" },
  { title: "Course 3" },
];

var parentDiv = document.getElementById("material");
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
