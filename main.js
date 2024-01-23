//Made by:Imants Zvīdris (iz23053)

let menuOpen = false;
let dropdownOpen = false;
function tabChanger(elem, tabName){
  let targetId = elem.textContent + "-option";
  const target = document.getElementById(targetId);
  target.classList.add('active');
  console.log(target);
  const tab_content = document.getElementsByClassName("about");
  const tabs = document.getElementsByClassName("about-nav-option");
  for (let tab of tab_content)
    if (tab.id != tabName) tab.classList.remove('active');
    else tab.classList.add('active');
  for (let tab of tabs) if (target != tab) tab.classList.remove('active');
}

function openMenu (){
  const navButton = document.getElementById("navigation-menu-button");
  const navMenu = document.getElementById("navigation");
  menuOpen = !menuOpen;
  if (menuOpen) {
    navButton.src = "img/cross.png";
    navMenu.classList.add("navigation-opened");
  }
  else {
    navButton.src = "img/menu.png";
    navMenu.classList.remove("navigation-opened");
  }
}
function closeMenu(){
  const navButton = document.getElementById("navigation-menu-button");
  const navMenu = document.getElementById("navigation");
  if (menuOpen) {
    navButton.src = "img/menu.png";
    navMenu.classList.remove("navigation-opened");
  }
  menuOpen = !menuOpen;
}
function openDropdown(elem){
  const dropdown = elem.parentElement.getElementsByClassName("dropdown")[0];
  dropdownOpen = !dropdownOpen;
  if (dropdownOpen) elem.parentElement.getElementsByTagName("a")[0].classList.add("dropdown-opened");
  else elem.parentElement.getElementsByTagName("a")[0].classList.remove("dropdown-opened");
  if (dropdownOpen) dropdown.classList.add("dropdown-opened");
  else dropdown.classList.remove("dropdown-opened");
}
function openExtraInfo(image){
  const extraInfo = document.getElementById("extra-info-container");
  extraInfo.classList.add("extra-info-active");
  document.getElementById("extra-info-image").src = image;
  document.body.classList.add("stop");
}
function closeExtraInfo (){
  document.getElementById("extra-info-container").classList.remove("extra-info-active");
  document.body.classList.remove("stop");
}
function alertUseless(){
  alert("This button is useless, but it could do something useful");
}
function scroolToSection (sectionId){
  if (innerWidth > 600) window.scrollTo(0, document.getElementById(sectionId).offsetTop-150);
  else window.scrollTo(0, document.getElementById(sectionId).offsetTop-55);
}
