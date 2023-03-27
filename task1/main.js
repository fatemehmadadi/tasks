// /////// if we use js for hover effect
// "use strict";

// const navbar = document.querySelector(".navbar");

// const handler = function (e) {
//   if (e.target.classList.contains("navbar_item--link")) {
//     const link = e.target;
//     const sibling = link
//       .closest(".navbar")
//       .querySelectorAll(".navbar_item--link");
//     if (!link.classList.contains("active")) {
//       link.classList.add("active");
//       sibling.forEach((el) => {
//         if (el != link) {
//           el.classList.remove("active");
//         }
//       });
//     } else {
//       link.classList.remove("active");
//     }
//   }
// };
// navbar.addEventListener("mouseover", handler);
// navbar.addEventListener("mouseout", handler);
