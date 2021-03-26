const nav = document.getElementsByTagName("nav")[0];
const header = document.querySelector(".header");
const logo = document.querySelector(".logo");

const obsCallBack = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
    logo.src = "resources/images/logo-black.png";
  } else {
    nav.classList.remove("sticky");
    logo.src = "resources/images/logo-white.png";
  }
};

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-61px",
};
const observer = new IntersectionObserver(obsCallBack, obsOptions);
observer.observe(header);
