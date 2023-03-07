let icons = document.querySelector(".icon");
let icon = document.querySelectorAll(".icon span");
let middle_chart = document.querySelector("#mss");
let lists = document.querySelector(".links ul");
let links = document.querySelector(".links");
let btnTop = document.querySelector("#myBtn");

console.log(icon);
console.log(middle_chart);

window.onscroll = (_) => {
  if (
    document.body.scrollTop > 1160 ||
    document.documentElement.scrollTop > 1160
  ) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};

btnTop.addEventListener("click", (_) => {
  document.body.scrollTop = 0; //For Safari
  document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE & Opera
});

icons.addEventListener("click", (_) => {
  if (lists.style.display === "none") {
    lists.style.display = "block";
    middle_chart.style.width = "100%";
    icon.forEach((ele) => {
      ele.style.backgroundColor = "#10cab7";
    });
  } else {
    lists.style.display = "none";
    middle_chart.style.width = "60%";
    icon.forEach((ele) => {
      ele.style.backgroundColor = "black";
    });
  }
});
function darkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}
