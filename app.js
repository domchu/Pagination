const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let pagination = document.querySelectorAll(".page");

let current = 0;

pagination[current].classList.add("current");

next.addEventListener("click", () => {
  current = current + 1;
  if (current > pagination.length - 1) {
    current = 0;
  }
  // console.log(current);
  for (let index = 0; index < pagination.length; index++) {
    pagination[index].classList.remove("current");
  }
  pagination[current].classList.add("current");
});

// prev.addEventListener("click", () => {
//   current = current - 1;
//   // console.log(current);
//   if (current < pagination.length - 1) {
//     current = current + 1;
//   }
//   for (let index = 0; index < pagination.length; index++) {
//     pagination[index].classList.remove("current");
//   }
//   pagination[current].classList.add("current");
// });
