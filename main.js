function tabChanger(elem, tabName){
  elem.classList.add('active');
  const tab_content = document.getElementsByClassName("about");
  const tabs = document.getElementsByClassName("about-nav-option");
  for (let tab of tab_content)
    if (tab.id != tabName) tab.classList.remove('active');
    else tab.classList.add('active');
  for (let tab of tabs) if (elem != tab) tab.classList.remove('active');
}



document.addEventListener('DOMContentLoaded', (e) =>{
  
});
