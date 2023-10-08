courseData = [
  {
    title: "Course 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Course 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Course 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

var parentDiv = document.getElementById("studyHistory");
courseData.map((el) =>
  parentDiv.insertAdjacentHTML(
    "beforeend",
    `
      <a href="" class="studyHistory-link">
          <div class="studyHistory">
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
  // auth(["admin", "user"], `/pages/home/home.html`);
  generateNavbar();
  generateFooter();
  generatePagination(5, 1);
}
