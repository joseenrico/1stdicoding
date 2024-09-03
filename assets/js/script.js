// JavaScript for Menu Toggle
document.getElementById("menu-button").addEventListener("click", function () {
  const menu = document.getElementById("nav-menu");
  menu.classList.toggle("show");
});

function toggleText(button) {
  var moreContent = button.previousElementSibling; // Mengambil elemen sebelum tombol (div .more-content)

  if (moreContent.classList.contains("hidden")) {
    moreContent.classList.remove("hidden");
    button.textContent = "Read Less";
  } else {
    moreContent.classList.add("hidden");
    button.textContent = "Read More";
  }
}
