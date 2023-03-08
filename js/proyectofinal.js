/*document.getElementById('logo').addEventListener('mouseover',cambiarlogoanombre);
document.getElementById('logo').addEventListener('mouseleave',cambiarnombrealogo);



function cambiarlogoanombre(){
    document.getElementById('logo').innerHTML = "Pablo Matias Carballo Contti"
}

function cambiarnombrealogo(){
    document.getElementById('logo').innerHTML = "PMCC";
}

*/

document.getElementById('menu').addEventListener('click',openNav);
document.getElementById('close').addEventListener('click',closeNav);
function openNav(){
    document.getElementById('mobile-menu').style.width = "100%"
}
function closeNav(){
    document.getElementById('mobile-menu').style.width = "0%"
}


//Para cambiar entre modos (claro/oscuro)

const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeToggleMenu = document.getElementById('dark-mode-toggle-menu');

const body = document.body;
const darkModeKey = 'darkModeEnabled';
const darkModeEnabled = localStorage.getItem(darkModeKey) === 'true';

if (darkModeEnabled) {
  body.classList.add('dark-mode');
  darkModeToggle.checked = true;
  darkModeToggleMenu.checked =true;
}

darkModeToggle.addEventListener('change', function() {
  const isChecked = this.checked;

  if (isChecked) {
    body.classList.add('dark-mode');
    localStorage.setItem(darkModeKey, 'true');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem(darkModeKey, 'false');
  }
});
darkModeToggleMenu.addEventListener('change', function() {
    const isChecked = this.checked;
  
    if (isChecked) {
      body.classList.add('dark-mode');
      localStorage.setItem(darkModeKey, 'true');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem(darkModeKey, 'false');
    }
});