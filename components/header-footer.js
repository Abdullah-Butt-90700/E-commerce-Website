function loadComponent(elementId, filePath) {
  return fetch(filePath) // Return the fetch promise
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error(`Error loading ${filePath}:`, error));
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header_placeholder", "components/header.html").then(() => {
    modifyHeader(); //modifyHeader runs after header
  });

  loadComponent("footer_placeholder", "components/footer.html");
});

function modifyHeader() {
  if (document.body.id === "signup-page") {
    const navbarRight = document.querySelector(".navbar_right_side");
    if (navbarRight) {
      const heartIcon = navbarRight.children[1];
      const cartIcon = navbarRight.children[2];
      const userIcon = navbarRight.children[3];

      if (heartIcon) heartIcon.remove();
      if (cartIcon) cartIcon.remove();
      if (userIcon) userIcon.remove();
    }
  }
}
const dropdownIcon = document.getElementById("dropdown_icon");
const dropdownMenu = document.getElementById("dropdown-menu");

dropdownIcon.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});
