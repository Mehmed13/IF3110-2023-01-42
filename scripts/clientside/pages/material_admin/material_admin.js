let params = window.location.search.substring(1).split('&');
let course_id = params[0].split('=')[1];
let module_number = params[1].split('=')[1];
let parentDiv = document.getElementsByClassName("material")[0];
let addMaterialForm = document.getElementsByClassName("addMaterialForm")[0];
let addMaterialButton = document.getElementById("addMaterialButton");

function loadPage() {
  generateNavbar();
  generateFooter();
}

/* Functions */
/* Display */
function loadMaterials(materialData){
    materialData.map((el) =>
      parentDiv.insertAdjacentHTML(
        "beforeend",
        `
        <div class="content" id="material"+${el.ID_Material}>
            <div class="contentTitle">
                <h2>${el.judul}</h2>
            </div>
    
            <div class="adminButtons">
                <button id="edit" onclick="loadEditMaterialForm(${el.ID_Material})">
                    <h3>Edit</h3>
                </button>
                <button id="delete" onclick="deleteMaterial(${el.ID_Material})">
                    <h3>Delete</h3>
                </button>
            </div>
        </div>
            `
        )
    );
  }

function loadAddMaterialForm(){
    if (addMaterialForm.style.display=="none"){
      addMaterialForm.style.display = "flex";
      // When form appear, add event listener to submit the new module
      let saveAddMaterialButton = document.getElementsByClassName("saveAddMaterialButton")[0];
      
      // Add variable for input

      saveAddMaterialButton.addEventListener("click", function(){addMaterial});
    } else {
      addModuleForm.style.display="none"
    }    
}

function loadEditMaterialForm(ID_Material)
{
    let materialParent = document.getElementById("material"+ID_Material);
    materialParent.insertAdjacentElement("afterend",
    `
    <div class="editVideoContainer">
    <div class="editVideoTitle">
        <h3>Edit video</h3>
    </div>
    <div class="editVideo">
        <div class="video">
            <video src="../../Data/materiVideo/take me home.mp4"
            controls="true"
            ></video>
        </div>
    
        <div class="videoModification">
            <div class="videoSelector">
                <label for="videoInput">Choose a video</label>
                <input type="file" id="videoInput" accept="video/*">
            </div>
            <div class="editVideoButtons">
                <button onclick="uploadVideo()">
                    <h3>Upload</h3>
                </button>
                <button id="delete">
                    <h3>Delete</h3>  
                </button>
            </div>
        </div>
    
    </div>
    </div>
    
    <div class="editTextContainer">
    <div class="editTextTitle">
        <h3>Edit material text</h3>
    </div>
    <div class="editText">
        <textarea name="text material">
    
        </textarea>
        <div class="editTextButtons">
    
        </div>  
    </div>
    </div>
    
    <div class="editExerciseContainer">
    <div class="editExerciseTitle">
        <h3>Edit exercise</h3>
    </div>
    <div class="exercise">
        <img 
        src="../../../../assets/module-profile.png" 
        alt="exercise profile icon"
        id="exercise-profile"
        />
    
        <div class="exerciseContent">
            <div class="exerciseTitle">
                <h3>Exercise 1</h3>
            </div>
            <p>lorem</p>
            <div class="exerciseButtons">   
                <button>
                    <h3>Edit</h3>
                </button>
                <button id="delete">
                    <h3>Delete</h3>
                </button>
            </div>
        </div>
    </div>
    </div>
    `
    )


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

/* Connections to Server */
function getMaterials(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let materialData;
        console.log(this.responseText);
        let serverResponse = JSON.parse(this.responseText);
        if (serverResponse["status"]) {
          materialData = serverResponse["data"];
        } else {
          materialData = null;
        }
        loadMaterials(materialData);
      }
    };
    xhttp.open(
      "GET",
      "http://localhost:8000/api/materialapi/getmaterialbymodulenumberandkodemapel?kode_mapel=" + course_id +" &modulenumber=" + module_number,
      true
    );
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.withCredentials = true;
    xhttp.send();
  }
  
  function addMaterial(kode_mapel, no_modul, judul, video, teks){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        let serverResponse = JSON.parse(this.responseText);
        if(serverResponse['status']){
          if(window.confirm("Material sucessfully Added")){
              window.location.reload();
          }else{
              window.location.reload();
          }
        }
        else{
            alert("failed to add material");
        }
      }
    };
  
    let data = {
      kode_mapel: kode_mapel,
      no_modul: no_modul,
      judul: judul,
      video: video,
      teks: teks
    };
  
    xhttp.open("POST", "http://localhost:8000/api/materialapi/addmaterial", true);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.withCredentials = true;
    xhttp.send(JSON.stringify(data));
  }
  
  
  
  function deleteMaterial(ID_Material){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        let serverResponse = JSON.parse(this.responseText);
        if(serverResponse['status']){
          if(window.confirm("Material sucessfully deleted")){
              window.location.reload();
          }else{
              window.location.reload();
          }
        }
        else{
          alert("failed to delete material");
        }
      }
    };
  
    let data = {
      ID_Material:ID_Material
    };
    xhttp.open("POST", "http://localhost:8000/api/material/deletematerial", true);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.withCredentials = true;
    xhttp.send(JSON.stringify(data));
    
  }
  
  
  /* Redirect */
  function editMaterial(ID_Material){
  };
  
  /* caller */
  window.addEventListener("load", getMaterials);
  addMaterialButton.addEventListener("click", loadAddMaterialForm); 