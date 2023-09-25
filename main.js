    var openMenu = document.querySelector('.navDiv'); 
var menu = document.querySelector('#header .nav .navbar .navXmark');
var closeMenu = document.querySelector('#header .nav .navbar .navXmark label');

openMenu.onclick = function(){
    menu.style.width = '100%';
}

closeMenu.onclick = function(){
    menu.style.width = '0';
}

var menuItems = document.querySelectorAll('#header .nav .navbar ul li a');
var body = document.querySelector('body');

for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    var currentWidth = body.clientWidth;

    menuItem.onclick = function(){
        if(currentWidth <= 768){
            menu.style.width = '100%';
        }
        else if(currentWidth > 768){
            menu.style.width = null;
        }
    }   
}