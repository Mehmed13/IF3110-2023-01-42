var loadFile = function (event) {
    var image = document.getElementById("output");
    var profileIcon = document.getElementById("profileIcon");
    image.src = URL.createObjectURL(event.target.files[0]);
    profileIcon.src = URL.createObjectURL(event.target.files[0]);
  };
  