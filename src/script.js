const menuIcon = document.getElementById("menuIcon");
const navList = document.getElementById("navList");
const closeMenu = document.getElementById("closeMenu");
const showMenu = document.getElementById("showMenu");

menuIcon.addEventListener("click", () => {
    console.log('Nav menu clicked');
    navList.classList.toggle("show");
    showMenu.classList.toggle("hidden");
    closeMenu.classList.toggle("hidden");
});