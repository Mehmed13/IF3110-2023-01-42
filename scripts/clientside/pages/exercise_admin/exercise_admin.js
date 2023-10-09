/* Variable and initialization */
let course_id = window.location.search.substring(1).split('=')[1];
let parentDiv = document.getElementsByClassName("module")[0];
let addModuleForm = document.getElementsByClassName("addModuleForm")[0];
let addModuleButton = document.getElementById("addModuleButton");

function loadPage() {
//   auth(["admin"], `/pages/home/home.html`);
  generateNavbar();
  generateFooter();
}

function loadModule(moduleData) {
  moduleData.map((el) =>
    parentDiv.insertAdjacentHTML(
      "beforeend",
      `
      <div class="exercise">
        <p>
          1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <input type="radio" id="A" name="fav_language" value="HTML" />
          <label for="A">A. Lorem ipsum</label><br />
        <input type="radio" id="B" name="fav_language" value="HTML" />
          <label for="B">B. Lorem ipsum</label><br />
        <input type="radio" id="C" name="fav_language" value="HTML" />
          <label for="C">C. Lorem ipsum</label><br />
      </div>
          `
          )
          );
}