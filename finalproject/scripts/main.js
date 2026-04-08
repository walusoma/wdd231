const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

const savedState = localStorage.getItem("menuState");
if (savedState === "true") {
  navMenu.classList.add("open");
}

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    localStorage.setItem(
      "menuState",
      navMenu.classList.contains("open")
    );
  });
}

// modal
const modal = document.querySelector("#infoModal");
const openModal = document.querySelector("#openModal");
const closeModal = document.querySelector("#closeModal");

if (openModal && modal) {
  openModal.addEventListener("click", () => modal.showModal());
}

if (closeModal && modal) {
  closeModal.addEventListener("click", () => modal.close());
}