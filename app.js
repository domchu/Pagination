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

for (let index = 0; index < pagination.length; index++) {
  pagination[index].addEventListener("click", function (e) {
    let w = document.querySelectorAll(".page");

    w.forEach((r) => {
      r.classList.remove("current");
    });

    console.log(e[index]);
    pagination[index].classList.add("current");
    console.log(pagination[index]);
    console.log(pagination);

    current = index;
    console.log(index);
  });

  // pagination[index].classList.remove("current");
}

// pagination.forEach((x) => {
// console.log(p);

// x.addEventListener("click", (e) => {
// e.classList.remove("current");
// console.log(e);
// x.classList.remove("current");

// let w = document.querySelectorAll(".page");

// w.forEach((s) => {
// });

// for (let index = 0; index < w.length; index++) {
//   w[index].classList.remove("current");
// [index].addEventListener("click", function (c) {});
// }

// console.log(x);
// e.classList.remove("current");
//     e.target.classList.add("current");
//     console.log(current);
//   });
// });

// for (let index = 0; index < pagination.length; index++) {
//   pagination[index].addEventListener("click", function (event) {
//     // console.log(event);
//     pagination[index].classList.remove("current");
//   });
// }
