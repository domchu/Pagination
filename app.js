const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let pagination = [...document.querySelectorAll(".page")];

let current = 0;

let currentIndex;
pagination[current].classList.add("current");

// the next button part
next.addEventListener("click", () => {
  current = current + 1;
  if (current > pagination.length - 1) {
    current = 0;
  }
  for (let index = 0; index < pagination.length; index++) {
    pagination[index].classList.remove("current");
  }
  pagination[current].classList.add("current");
});
// the prev part of the project
prev.addEventListener("click", () => {
  current = current - 1;
  if (current < 0) {
    current = pagination.length - 1;
  }
  for (let index = 0; index < pagination.length; index++) {
    pagination[index].classList.remove("current");
  }
  pagination[current].classList.add("current");
});

// clicking on any of the page/button
for (let index = 0; index < pagination.length; index++) {
  pagination[index].addEventListener("click", function (e) {
    let w = document.querySelectorAll(".page");

    w.forEach((r) => {
      r.classList.remove("current");
    });

    
    pagination[index].classList.add("current");
    current = index;
  });

}


