/* PATH */
const DATA_PATH = "../../../../../Data";
const PROFILE_PICTURE_PATH = DATA_PATH + "/profilePicture";

let profilePictureURL = PROFILE_PICTURE_PATH + "/";
let defaultProfilePictureURL = "../../assets/albert.jpg";

/* Navbar */
let profileIcon = document.getElementById("profileIcon");

/* Profile form */
let inputFile = document.getElementById("profilePhotoFile");
let profileImage = document.getElementById("profileImage");
let profileFirstName = document.getElementById("profileFirstName");
let profileLastName = document.getElementById("profileLastName");
let profileUsername = document.getElementById("profileUsername");
let profileEmail = document.getElementById("profileEmail");
let profilePassword = document.getElementById("profilePassword");
let saveChangesButton = document.querySelector(".saveButton .button");

/* Profile Not Found Data */
profileNotFound = [
  {
    ID_Pengguna: "0",
    nama_depan: "unkown",
    nama_belakang: "Unknown",
    isVerified: "0",
    email: "unknown@unknown.com",
    password: "****",
    profile_pict: "Unkonwn",
    role: "unknown",
    username: "unknown",
  },
];

// Dummy, nantinya bakal disesuaiin ama user yg login
let ID_Pengguna = 2;

function loadPage() {
  generateNavbar();
  generateFooter();
}

function loadFile(event) {
  profileImage.src = profilePictureURL + event.target.files[0]["name"];
  profileIcon.src = profilePictureURL + event.target.files[0]["name"];
}

function loadProfile(profileData) {
  profileIcon.src = profilePictureURL + profileData["profile_pict"];
  profileImage.src = profilePictureURL + profileData["profile_pict"];
  profileFirstName.value = profileData["nama_depan"];
  profileLastName.value = profileData["nama_belakang"];
  profileUsername.value = profileData["username"];
  profileEmail.value = profileData["email"];
  profilePassword.value = profileData["password"];
}

function getProfile() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let profileData;
      let profileFile = JSON.parse(this.responseText);
      console.log(profileFile);
      if (profileFile["status"]) {
        profileData = profileFile["data"];
      } else {
        profileData = profileNotFound;
      }
      loadProfile(profileData);
    }
  };
  xhttp.open(
    "GET",
    "http://localhost:8000/api/userapi/getprofile?ID_Pengguna=" + ID_Pengguna,
    true
  );
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.withCredentials = true;
  xhttp.send();
}

function editProfile() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let profileData;
      console.log(this.responseText);
      let profileFile = JSON.parse(this.responseText);
      console.log(profileFile);
      if (profileFile["status"]) {
        profileData = profileFile["data"];
      } else {
        profileData = profileNotFound;
      }
      // loadProfile(profileData);
    }
  };

  let data = {
    ID_Pengguna: ID_Pengguna,
    nama_depan: profileFirstName.value,
    nama_belakang: profileLastName.value,
    email: profileEmail.value,
    password: profilePassword.value,
    profile_pict: profileImage.src.match(/\/([^\/?#]+)$/)[1],
    username: profileUsername.value,
  }; // akan disesuaikan lagi, apakah akan disesuaikan lagi portnya?
  console.log(profileImage.src);
  xhttp.open("POST", "http://localhost:8000/api/userapi/editprofile", true);
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.withCredentials = true;
  xhttp.send(JSON.stringify(data));
}

inputFile.addEventListener("change", loadFile);
// profileImage.addEventListener("load", loadProfile)
window.addEventListener("load", getProfile);

saveChangesButton.addEventListener("click", editProfile);

// Untuk update profile, profile picture yang lama akan dihapus dari storage
