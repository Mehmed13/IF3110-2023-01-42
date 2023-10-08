function generatePagination(maxPage, currentPage) {
  const paginationCt = document.getElementById("paginationCt");

  const paginationList = document.createElement("div");
  paginationList.classList.add("paginationList");

  const prevButton = document.createElement("button");
  prevButton.classList.add("navigationPaginationButton");
  prevButton.id = "prevButton";
  prevButton.addEventListener("click", function () {
    prevPage();
  });

  const prevButtonImg = document.createElement("img");
  prevButtonImg.src = "/assets/button-previous.png";
  prevButtonImg.alt = "prev button";

  prevButton.appendChild(prevButtonImg);

  const nextButton = document.createElement("button");
  nextButton.classList.add("navigationPaginationButton");
  nextButton.id = "nextButton";
  nextButton.addEventListener("click", function () {
    nextPage(maxPage);
  });

  const nextButtonImg = document.createElement("img");
  nextButtonImg.src = "/assets/button-next.png";
  nextButtonImg.alt = "next button";

  nextButton.appendChild(nextButtonImg);

  for (let i = 1; i <= maxPage; i++) {
    const pageButton = document.createElement("button");
    pageButton.classList.add("paginationButton");
    pageButton.id = `page-${i}`;
    pageButton.textContent = i;
    if (i === currentPage) {
      pageButton.classList.add("currentPage");
    }

    pageButton.addEventListener("click", function () {
      changePage(i, maxPage);
    });
    paginationList.appendChild(pageButton);
  }

  paginationCt.appendChild(prevButton);
  paginationCt.appendChild(paginationList);
  paginationCt.appendChild(nextButton);
}

function prevPage() {
  const currentPage = document.getElementsByClassName("currentPage")[0];
  if (currentPage.id === "page-1") {
    console.log("gabisa");
  } else {
    console.log("bisa");
  }
}

function nextPage(max) {
  const currentPage = document.getElementsByClassName("currentPage")[0];
  if (currentPage.id === "page-" + max) {
    console.log("gabisa");
  } else {
    console.log("bisa");
  }
}

function changePage(destinationPage, max) {
  if (destinationPage > max || destinationPage < 1) {
    console.log("gabisa");
  } else {
    console.log("bisa");
  }
}
