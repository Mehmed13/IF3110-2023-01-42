let id_material = window.location.search.substring(1).split('=')[1];
let parentDiv = document.getElementsByClassName("exercisePlaceholder")[0];

function loadPage() {
  // auth(["admin", "user"], `/pages/home/home.html`);
  generateNavbar();
  generateFooter();
}

function getSoal() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let questionsData;
      console.log(this.responseText);
      let serverResponse = JSON.parse(this.responseText);
      if (serverResponse["status"]) {
        questionsData = serverResponse["data"];
      } else {
        questionsData = null;
      }
      loadSoal(questionsData);
    }
  };
  xhttp.open(
    "GET",
    "http://localhost:8000/api/soalapi/getsoalbyidmaterial?id_material=" +
      id_material,
    true
  );
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.withCredentials = true;
  xhttp.send();
}

function getJawabanSalah(id_soal){
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let wrongAnswerData;
      console.log(this.responseText);
      let serverResponse = JSON.parse(this.responseText);
      if (serverResponse["status"]) {
        wrongAnswerData = serverResponse["data"];
      } else {
        wrongAnswerData = null;
      }
    }
  };
  xhttp.open(
    "GET",
    "http://localhost:8000/api/jawabansalahapi/getjawabansalahbyidsoal?id_soal=" +
      id_soal,
    true
  );
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.withCredentials = true;
  xhttp.send();
  return wrongAnswerData;
}

function loadSoal(questionsData) {
  questionsData.map((el) =>
    wrongAns = getJawabanSalah(el.id_soal),
    parentDiv.insertAdjacentHTML(
      "beforeend",
      `
      <div class="exercise">
        <p>
          ${el.question}
        </p>

      <input type="radio" id=${el.correct_answer[0]} name=${el.question} value=${el.correct_answer[0]} />
          <label for=${el.correct_answer[0]}>${el.correct_answer[0]}</label><br />
      <input type="radio" id=${wrongAns[0]} name=${el.question} value=${wrongAns[0]} />
          <label for=${wrongAns[0]}>${wrongAns[0]}</label><br />
        <input type="radio" id=${wrongAns[1]} name=${el.question} value=${wrongAns[1]} />
          <label for=${wrongAns[1]}>${el.wrong_answer[1]}</label><br />
        <input type="radio" id=${wrongAns[2]} name=${el.question} value=${wrongAns[2]} />
          <label for=${wrongAns[2]}>${wrongAns[2]}</label><br />

      </div>
      `
)
    );
}

exerciseData.map((el) =>
    parentDiv.insertAdjacentHTML(
      "beforeend",
      `
      <div class="exercise">
        <p>
          ${el.question}
        </p>

      <input type="radio" id=${el.correct_answer[0]} name=${el.question} value=${el.correct_answer[0]} />
          <label for=${el.correct_answer[0]}>${el.correct_answer[0]}</label><br />
      <input type="radio" id=${el.wrong_answer[0]} name=${el.question} value=${el.wrong_answer[0]} />
          <label for=${el.wrong_answer[0]}>${el.wrong_answer[0]}</label><br />
        <input type="radio" id=${el.wrong_answer[1]} name=${el.question} value=${el.wrong_answer[1]} />
          <label for=${el.wrong_answer[1]}>${el.wrong_answer[1]}</label><br />
        <input type="radio" id=${el.wrong_answer[2]} name=${el.question} value=${el.wrong_answer[2]} />
          <label for=${el.wrong_answer[2]}>${el.wrong_answer[2]}</label><br />

      </div>
      `
));

window.addEventListener("load", getSoal);