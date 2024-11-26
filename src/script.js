const menuIcon = document.getElementById("menuIcon");
const navList = document.getElementById("navList");
const closeMenu = document.getElementById("closeMenu");
const showMenu = document.getElementById("showMenu");

menuIcon.addEventListener("click", () => {
    // console.log('Nav menu clicked');
    navList.classList.toggle("show");
    showMenu.classList.toggle("hidden");
    closeMenu.classList.toggle("hidden");
});

// Header menu
const headerIcon = document.getElementById("headerIcon");
const headerList = document.getElementById('headerList');
const closeHeaderIcon = document.getElementById('closeHeaderIcon');


headerIcon.onclick = () =>{
    // console.log('Header menu clicked');
    headerList.classList.toggle("flex_show");
    headerIcon.style.display = "none";
};

closeHeaderIcon.onclick = () => {
    // console.log('Close header menu clicked');
    headerList.classList.remove("flex_show");
    headerIcon.style.display = "block";
}