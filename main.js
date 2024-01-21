let menuOpen = false;
let dropdownOpen = false;
function tabChanger(elem, tabName){
  elem.classList.add('active');
  const tab_content = document.getElementsByClassName("about");
  const tabs = document.getElementsByClassName("about-nav-option");
  for (let tab of tab_content)
    if (tab.id != tabName) tab.classList.remove('active');
    else tab.classList.add('active');
  for (let tab of tabs) if (elem != tab) tab.classList.remove('active');
}

function openMenu (){
  const navButton = document.getElementById("navigation-menu-button");
  const navMenu = document.getElementById("navigation");
  menuOpen = !menuOpen;
  if (menuOpen) {
    navButton.src = "img/cross.png";
    navMenu.style.display = "flex";
  }
  else {
    navButton.src = "img/menu.png";
    navMenu.style.display = "none";
  }
}
function openDropdown(elem){
  const dropdown = elem.parentElement.getElementsByClassName("dropdown")[0];
  dropdownOpen = !dropdownOpen;
  if (dropdownOpen) elem.parentElement.getElementsByTagName("a")[0].classList.add("dropdown-opened");
  else elem.parentElement.getElementsByTagName("a")[0].classList.remove("dropdown-opened");
  if (dropdownOpen) dropdown.style.display = "block";
  else dropdown.style.display = "none";
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
