const phoneMenuBtn = document.querySelector(".burger");
const phoneMenu = document.querySelector(".nav_p_list");

phoneMenuBtn.addEventListener("click", function () {
  console.log("HEllo World!");

  phoneMenu.classList.toggle("shownav");
});
