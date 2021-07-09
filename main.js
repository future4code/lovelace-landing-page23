const menu = document.getElementById("menu");
const toggleMenuButton = document.getElementById("show-menu-button");

function showMenu(event) {
  event.preventDefault();
  menu.classList.toggle("show-menu");
}

console.log(toggleMenuButton);

toggleMenuButton.addEventListener("click", showMenu);
