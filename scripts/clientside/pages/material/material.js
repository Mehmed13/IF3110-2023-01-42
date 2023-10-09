/* Variable and initialization */
// Format get params.   ?kode_mapel=x&no_modul=y or
//                      ?keyword=word&searchby=coursename,modulename,materialname&filterclass=bool,bool,bool&orderbyclass=asc/desc&orderbyname=asc/desc

let params = window.location.search.substring(1).split('&');
let fromSearchBar = params.length == 5;

let course_id;
let no_modul;
let searchby;
let filterclass;
let orderbyclass;
let orderbyname;
let parentDiv = document.getElementsByClassName("material")[0];


console.log(fromSearchBar);
if (fromSearchBar){
  let searchbyArr = params[0].split(',');
  searchby = {"courseName": searchbyArr[0], "moduleName" : searchbyArr[1], "materialName": searchbyArr[2]};
  let filterclassArr = params[1].split(',');
  filterclass = {10: filterclassArr[0], 11:filterclassArr[1], 12:filterclassArr[2]};
  orderbyclass = params[2];
  orderbyname = params[3];
} else {
  course_id = params[0].split('=')[1];
  no_modul = params[1].split('=')[1];
}

function loadPage() {
  auth(["user", "admin"], `/pages/home/home.html`);
  generateNavbar();
  generateFooter();
}

/* Functions */
/* Display */
function loadMaterial(materialData) {
  materialData.map((el) =>
    parentDiv.insertAdjacentHTML(
      "beforeend",
      `
      <div class="content" onclick="openMaterial(${el.ID_Material})">
          <div class="contentTitle">
              <h2>${el.judul}</h2>
          </div>
      </div>
      `
    )
  );
}

/* Connections to Server */
function getMaterials() {
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
      loadMaterial(materialData);
    }
  };

  if (fromSearchBar){
    xhttp.open(
      "GET",
      "http://localhost:8000/api/materialapi/getmaterialbysearchbar?searchby=" + searchby + " &filterclass=" + filterclass + 
      "&orderbyclass="+orderbyclass + " &orderbyname=" + orderbyname,
      true
    );
  } else {
    xhttp.open(
      "GET",
      "http://localhost:8000/api/materialapi/getmaterialbymodulenumberandkodemapel?kode_mapel=" + course_id +" &modulenumber=" + no_modul,
      true
    );
  }
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.withCredentials = true;
  xhttp.send();
}

/* Redirect */
function openMaterial(ID_Material){
  window.location.href= '../material_view/material_view.html?ID_Material='+ID_Material};

/* caller */
window.addEventListener("load", getMaterials);
