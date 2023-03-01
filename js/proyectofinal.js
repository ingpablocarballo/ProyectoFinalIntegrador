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


//NAVEGADOR DE FOTOS POOL
jQuery(document).ready(function ($) {

    $('#checkbox').change(function(){
      setInterval(function () {
          moveRight();
      }, 3000);
    });
    
      var slideCount = $('#slider-photos ul li').length;
      var slideWidth = $('#slider-photos ul li').width();
      var slideHeight = $('#slider-photos ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('#slider-photos').css({ width: slideWidth, height: slideHeight });
      
      $('#slider-photos ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('#slider-photos ul li:last-child').prependTo('#slider-photos ul');
  
      function moveLeft() {
          $('#slider-photos ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider ul li:last-child').prependTo('#slider-photos ul');
              $('#slider-photos ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('#slider-photos ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slider-photos ul li:first-child').appendTo('#slider-photos ul');
              $('#slider-photos ul').css('left', '');
          });
      };
  
      $('a.control_prev').click(function () {
          moveLeft();
      });
  
      $('a.control_next').click(function () {
          moveRight();
      });
  
  });    


