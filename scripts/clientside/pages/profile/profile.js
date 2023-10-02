const DATA_PATH = "../../../../../Data"
const PROFILE_PICTURE_PATH = DATA_PATH + "/profilePicture"

var profilePictureURL = PROFILE_PICTURE_PATH+"/";
var defaultProfilePictureURL = "../../assets/albert.jpg";
var inputFile = document.getElementById("profilePhotoFile");
var profileimage = document.getElementById("output");
var profileIcon = document.getElementById("profileIcon");

// Dummy, nantinya bakal disesuaiin ama user yg login 
var profileId = 1;

function loadFile(event) {
    image.src = URL.createObjectURL(event.target.files[0]);
    profileIcon.src = URL.createObjectURL(event.target.files[0]);
};

function loadProfile(){
  getProfilePicture();
  image.src = profilePictureURL;
}

function getProfilePicture(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var profileFile = JSON.parse(this.responseText);
            if(profileFile['status']){
                profilePictureURL+= profileFile['data'];
            }else{
                profilePictureURL = defaultProfilePictureURL;
            }
        }
    };
    xhttp.open("GET","http://localhost:8000/api/profileapi/getprofile?profile_id="+profileId,true);
    // xhttp.setRequestHeader("Accept", "application/json");
    xhttp.withCredentials = true;
    xhttp.send();
}
inputFile.addEventListener("change", loadFile);
image.addEventListener("load", )