const course_items = [
  {
    title: "Title 1",
    image: "science.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Title 2",
    image: "science.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Title 3",
    image: "science.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Title 4",
    image: "biology.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Title 5",
    image: "biology.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Title 6",
    image: "biology.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Title 7",
    image: "math.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Title 8",
    image: "math.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const exercise_items = [
  {
    title: "Title 1",
    image: "science.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Title 2",
    image: "science.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Title 3",
    image: "science.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Title 4",
    image: "biology.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Title 5",
    image: "biology.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Title 6",
    image: "biology.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Title 7",
    image: "math.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Title 8",
    image: "math.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const course_element = document.getElementsByClassName("courseContents")[0];
const course_pagination_element = document.getElementById("coursePagination");
const exercise_element = document.getElementsByClassName("exerciseContents")[0];
const exercise_pagination_element =
  document.getElementById("exercisePagination");

let current_course_page = 1;
let current_exercise_page = 1;
let rows = 3;

function loadpage() {
  generateNavbar();
  generateFooter();
}

function DisplayItem(items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = "";
  page--;

  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    let item = paginatedItems[i];

    let item_element = document.createElement("div");
    item_element.classList.add("courseContent");
    item_element.innerHTML =
      ' <img src="../../assets/' +
      item["image"] +
      '"' +
      'alt="course logo">' +
      '<div class="courseText">' +
      "<h3>" +
      item["title"] +
      "</h3>" +
      "<p>" +
      item["desc"] +
      "</p>" +
      "</div>";

    wrapper.appendChild(item_element);
  }
}

function SetupCoursePagination(
  current_page,
  items,
  element,
  wrapper,
  rows_per_page
) {
  wrapper.innerHTML = "";

  let page_count = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = CoursePaginationButton(current_page, i, items, element);
    wrapper.appendChild(btn);
  }
}

function CoursePaginationButton(current_page, page, items, element) {
  let button = document.createElement("button");
  button.innerText = page;

  if (current_page == page) button.classList.add("activeCourse");

  button.addEventListener("click", function () {
    current_page = page;
    DisplayItem(items, element, rows, current_page);

    let current_btn = document.querySelector(
      ".pagenumbers button.activeCourse"
    );
    current_btn.classList.remove("activeCourse");

    button.classList.add("activeCourse");
  });

  return button;
}
function SetupExercisePagination(
  current_page,
  items,
  element,
  wrapper,
  rows_per_page
) {
  wrapper.innerHTML = "";

  let page_count = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = ExercisePaginationButton(current_page, i, items, element);
    wrapper.appendChild(btn);
  }
}

function ExercisePaginationButton(current_page, page, items, element) {
  let button = document.createElement("button");
  button.innerText = page;

  if (current_page == page) button.classList.add("activeExercise");

  button.addEventListener("click", function () {
    current_page = page;
    DisplayItem(items, element, rows, current_page);

    let current_btn = document.querySelector(
      ".pagenumbers button.activeExercise"
    );
    current_btn.classList.remove("activeExercise");

    button.classList.add("activeExercise");
  });

  return button;
}

DisplayItem(course_items, course_element, rows, current_course_page);
SetupCoursePagination(
  current_course_page,
  course_items,
  course_element,
  course_pagination_element,
  rows
);

DisplayItem(exercise_items, exercise_element, rows, current_exercise_page);
SetupExercisePagination(
  current_exercise_page,
  exercise_items,
  exercise_element,
  exercise_pagination_element,
  rows
);
