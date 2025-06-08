// Toggle the dropdown when the button or its icon is clicked
document.addEventListener("DOMContentLoaded", function () 
{
  const button = document.getElementById("dropdownButton");
  const dropdown = document.getElementById("myDropdown");

  button.addEventListener("click", function () {
    dropdown.classList.toggle("show");
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener("click", function (e) 
  {
    const button = document.getElementById("dropdownButton");
    const dropdown = document.getElementById("myDropdown");
    if (button.contains(e.target)) 
    {
        dropdown.classList.toggle("show");
    }
    else if (!dropdown.contains(e.target)) 
    {
        dropdown.classList.remove("show");
    }
  });
});