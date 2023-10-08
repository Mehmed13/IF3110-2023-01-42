let course_id = window.location.search.substring(1).split('=')[1];
let parentDiv = document.getElementsByClassName("course");
let addCourseForm = document.getElementsByClassName("addCourseForm")[0];
let addCourseButton = document.getElementById("addCourseButton");

function loadCourse(courseData){
  courseData.map((el) =>
    parentDiv.insertAdjacentHTML(
      "beforeend",
      `
      <div class="content">
          <div class="contentTitle">
              <h2>${el.judul}</h2>
          </div>
  
          <div class="adminButtons">
              <button id="edit" onclick="editModule(${el.no_modul})">
                  <h3>Edit</h3>
              </button>
              <button id="delete" onclick="deleteModule(${el.no_modul})">
                  <h3>Delete</h3>
              </button>
          </div>
          </div>
          `
          )
          );
        }
        
function loadAddCourseForm(){
  addCourseForm.style.display = "flex";
  
  // When form appear, add event listener to submit the new course
  let saveAddCourseButton = document.getElementsByClassName("saveButton")[0];
  
  // Add variable for input
  let courseNumberInput = document.getElementById("courseNumber");
  let courseTitleInput = document.getElementById("courseTitle");
  let courseDescriptionInput = document.getElementById("courseDescription");
  
  saveAddCourseButton.addEventListener("click", function(){addCourse(courseNumberInput.value,  moduleTitleInput.value, 
    courseDescriptionInput.value)});  
}

/* Connections to Server */
function getCourses(){
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
    "http://localhost:8000/api/moduleapi/getmodulebykodemapel?kode_mapel=" + course_id,
    true
  );
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.withCredentials = true;
  xhttp.send();
}

function addCourse(no_course, judul, deskripsi){
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      let serverResponse = JSON.parse(this.responseText);
      if(serverResponse['status']){
        if(window.confirm("Course sucessfully Added")){
            window.location.reload();
        }else{
            window.location.reload();
        }
      }
      else{
          alert("Failed to add course");
      }
    }
  };

  let data = {
    no_course: no_course,
    judul: judul,
    deskripsi: deskripsi
  };

  xhttp.open("POST", "http://localhost:8000/api/moduleapi/addcourse", true);
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.withCredentials = true;
  xhttp.send(JSON.stringify(data));
}



function deleteCourse(no_modul){
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      let serverResponse = JSON.parse(this.responseText);
      if(serverResponse['status']){
        if(window.confirm("Course sucessfully deleted")){
            window.location.reload();
        }else{
            window.location.reload();
        }
      }
      else{
        alert("failed to delete course");
      }
    }
  };

  let data = {
    no_modul:no_modul
  };
  xhttp.open("POST", "http://localhost:8000/api/moduleapi/deletemodule", true);
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.withCredentials = true;
  xhttp.send(JSON.stringify(data));
  
}


/* Redirect */
function editCourse(no_course){
  window.location.href= '../material_admin/material_admin.html?no_course=' + no_course};

/* caller */
window.addEventListener("load", getCourses);
addCourseButton.addEventListener("click", loadAddCourseForm); 

function loadPage() {
  generateNavbar();
  generateFooter();
}