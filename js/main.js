const icons = document.querySelector(".icon");
const icon = document.querySelectorAll(".icon span");
const middle_chart = document.querySelector("#middle");
const lists = document.querySelector(".links ul");
const btnTop = document.querySelector("#myBtn");

// function for display scroll-to-top button
window.onscroll = () => {
  btnTop.style.display =
    document.body.scrollTop > 1160 || document.documentElement.scrollTop > 1160
      ? "block"
      : "none";
};

if (btnTop) {
  btnTop.addEventListener("click", () => {
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Navigation bar interaction onclick
icons.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent click from bubbling up to the document
  const isMenuVisible = lists.style.display === "block";
  lists.style.display = isMenuVisible ? "none" : "block";
  middle_chart.style.width = isMenuVisible ? "60%" : "100%";
  icon.forEach((ele) => {
    ele.style.backgroundColor = isMenuVisible ? "black" : "#10cab7";
  });
});

// Hide menu when clicking a link
lists.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    lists.style.display = "none";
    middle_chart.style.width = "60%";
    icon.forEach((ele) => {
      ele.style.backgroundColor = "black";
    });
  });
});
