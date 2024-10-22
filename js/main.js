let icons = document.querySelector(".icon");
let icon = document.querySelectorAll(".icon span");
let middle_chart = document.querySelector("#middle");
let lists = document.querySelector(".links ul");
let btnTop = document.querySelector("#myBtn");

// function for display scroll-to-top button
window.onscroll = () => {
  if (
    document.body.scrollTop > 1160 ||
    document.documentElement.scrollTop > 1160
  ) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};

if (btnTop) {
  btnTop.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE & Opera
  });
}

// Navigation bar interaction onclick
icons.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent click from bubbling up to the document
  if (lists.style.display === "none" || lists.style.display === "") {
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

// Hide menu when clicking outside
document.addEventListener("click", (event) => {
  if (!event.target.closest(".links")) {
    lists.style.display = "none";
    middle_chart.style.width = "60%";
    icon.forEach((ele) => {
      ele.style.backgroundColor = "black";
    });
  }
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

const name = document.querySelector(".name");
