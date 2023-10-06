function generateNavbar() {
  const header = document.getElementById("header");

  // searchbox
  const searchBox = document.createElement("section");
  searchBox.classList = "navbar searchBox";

  const lup = document.createElement("img");
  lup.src = "/assets/Lup.png";
  lup.alt = "Lup icon";
  lup.id = "lup";

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.classList = "searchInput";
  searchInput.placeholder = "What do you want to learn?";

  const filterIcon = document.createElement("img");
  filterIcon.src = "/assets/Filter.png";
  filterIcon.alt = "Filter icon";
  filterIcon.id = "filter";

  // Append elements to searchBox
  searchBox.appendChild(lup);
  searchBox.appendChild(searchInput);
  searchBox.appendChild(filterIcon);

  // features
  const features = document.createElement("section");
  features.classList = "navbar features";

  const ul = document.createElement("ul");

  const links = [
    { href: "./home.html", text: "Home" },
    { href: "../about_us/about_us.html", text: "About" },
    { href: "../courses/course.html", text: "Course" },
    { href: "../exercises/exercises.html", text: "Exercise" },
  ];

  links.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    li.appendChild(a);
    ul.appendChild(li);
  });

  const profileButton = document.createElement("li");
  profileButton.id = "profileButton";

  const profileIcon = document.createElement("img");
  profileIcon.src = "/assets/albert.jpg";
  profileIcon.alt = "profile picture";
  profileIcon.id = "profileIcon";

  profileButton.appendChild(profileIcon);
  ul.appendChild(profileButton);

  // Append ul to features
  features.appendChild(ul);

  // Insert sections to header
  header.appendChild(searchBox);
  header.appendChild(features);
}
