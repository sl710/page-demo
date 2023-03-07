/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

window.addEventListener("load", function () {
  let currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;
});
