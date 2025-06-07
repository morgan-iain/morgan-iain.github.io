// Toggle the dropdown when the button or its icon is clicked
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("dropdownButton");
  const dropdown = document.getElementById("myDropdown");

  button.addEventListener("click", function () {
    dropdown.classList.toggle("show");
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener("click", function (e) {
    if (!button.contains(e.target)) {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    }
  });
});