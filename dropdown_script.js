document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("dropdownButton");
  const dropdown = document.getElementById("myDropdown");

  button.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdown.classList.toggle("show");
  });

  document.addEventListener("click", function (e) {
    if (!button.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove("show");
    }
  });
});
