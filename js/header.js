document.addEventListener("DOMContentLoaded", () => {
  fetch("assets/components/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;
      initDropdown(); // Reinitialize dropdown behavior
    });
});

// Attach JS handlers for dropdown
function initDropdown() {
  const button = document.getElementById("dropdownButton");
  const dropdown = document.getElementById("myDropdown");

  if (button && dropdown) {
    button.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdown.classList.toggle("show");
    });

    document.addEventListener("click", function (e) {
      if (!button.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("show");
      }
    });
  }
}
