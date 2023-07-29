const mobileNav = document.querySelector(".mobile-nav");

function toggleNav() {
  mobileNav.classList.toggle("nav-active");
}

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
function deleteAllActiveTabs() {
  for (let tab of tabs) {
    tab.classList.remove("active");
  }
}
function deleteAllActiveContent() {
  for (let tabContent of tabContents) {
    tabContent.classList.remove("active");
  }
}
for (let tab of tabs) {
  tab.addEventListener("click", function () {
    deleteAllActiveTabs();
    tab.classList.add("active");
    const target = tab.dataset.tabMenu;
    const tabTargetElement = document.querySelector(target);
    deleteAllActiveContent();
    tabTargetElement.classList.add("active");
  });
}
