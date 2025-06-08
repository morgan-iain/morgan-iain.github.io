// Toggle the dropdown when the button or its icon is clicked
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("dropdownButton");
  const dropdown = document.getElementById("myDropdown");

  button.addEventListener("click", function (e) {
    e.stopPropagation(); // prevent closing immediately
    dropdown.classList.toggle("show");
  });

  // Close dropdown if clicking outside
  document.addEventListener("click", function (e) {
    if (!button.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove("show");
    }
  });
});