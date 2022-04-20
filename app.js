const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let pagination = document.querySelectorAll(".pagination a");
let pageIndex = 0;

prev.addEventListener("click", () => {
  pageIndex = pageIndex + 1;
  if (pageIndex < pagination.length) {
    pageIndex = 1;
  }
  for (let index = 0; index < pagination.length; index++) {
    pagination[index].style.display = "none";
    pagination[pageIndex - 1].style.display = "block";
  }
});
