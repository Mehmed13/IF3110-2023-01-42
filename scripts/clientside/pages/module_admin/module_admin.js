moduleData = [
  { title: "Module 1" },
  { title: "Module 2" },
  { title: "Module 3" },
];

var parentDiv = document.getElementsByClassName("module")[0];
moduleData.map((el) =>
  parentDiv.insertAdjacentHTML(
    "beforeend",
    `
    <div class="content">
        <div class="contentTitle">
            <h2>${el.title}</h2>
        </div>

        <div class="adminButtons">
            <button id="edit">
                <h3>Edit</h3>
            </button>
            <button id="delete">
                <h3>Delete</h3>
            </button>
        </div>
    </div>
        `
  )
);

function loadPage() {
  generateNavbar();
  generateFooter();
}
