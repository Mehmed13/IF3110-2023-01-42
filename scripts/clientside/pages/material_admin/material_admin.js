moduleData = [
  { title: "Material 1" },
  { title: "Material 2" },
  { title: "Material 3" },
];

var parentDiv = document.getElementsByClassName("material")[0];
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
  auth(["admin"], `/pages/home/home.html`);
  generateNavbar();
  generateFooter();
}

function uploadVideo() {
  // Get the file input element
  const input = document.getElementById("videoInput");

  // Check if a file has been selected
  if (input.files.length === 0) {
    alert("Please select a video file.");
    return;
  }

  // Get the selected file
  const videoFile = input.files[0];

  // You can now work with the selected videoFile
  // For example, you can send it to a server for processing or display it in an HTML video element.

  // Display the selected video (example)
  displayVideo(videoFile);
}

function displayVideo(file) {
  const videoContainer = document.getElementById("videoContainer");
  const video = document.createElement("video");
  video.controls = true;
  video.src = URL.createObjectURL(file);
  videoContainer.appendChild(video);
}
