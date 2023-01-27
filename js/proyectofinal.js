/*document.getElementById('logo').addEventListener('mouseover',cambiarlogoanombre);
document.getElementById('logo').addEventListener('mouseleave',cambiarnombrealogo);



function cambiarlogoanombre(){
    document.getElementById('logo').innerHTML = "Pablo Matias Carballo Contti"
}

function cambiarnombrealogo(){
    document.getElementById('logo').innerHTML = "PMCC";
}

*/

document.getElementById('menu').addEventListener('click',openNav)
document.getElementById('close').addEventListener('click',closeNav)

function openNav(){
    document.getElementById('mobile-menu').style.width = "100%"
}

function closeNav(){
    document.getElementById('mobile-menu').style.width = "0%"
}