// Just a little animation for fun
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h1");
  title.style.transition = "0.8s";
  title.style.transform = "scale(1.1)";
  setTimeout(() => {
    title.style.transform = "scale(1)";
  }, 1000);
});
