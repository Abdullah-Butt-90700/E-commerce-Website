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
    const navbar = document.getElementById("navbar");
    const dropdown = document.getElementById("dropdown");
    const dropdown_container = document.getElementById("dropdown_container");

    dropdown.addEventListener("click", () => {
      console.log("i am working");
      var currentOpacity = window.getComputedStyle(dropdown_container).opacity;
      if (currentOpacity === "0") {
        dropdown_container.style.opacity = "1";
        dropdown_container.style.pointerEvents = "auto";
      } else {
        dropdown_container.style.opacity = "0";
        dropdown_container.style.pointerEvents = "none";
      }
    });

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
