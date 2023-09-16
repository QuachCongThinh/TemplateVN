var btnMenu = document.querySelector('.navDiv'); 

var menu = document.querySelector('#header .nav .navbar .navXmark');
 
var btnCloseMenu = document.querySelector('#header .nav .navbar .navXmark label');

btnMenu.onclick = function(){
    var isOpen = menu.style.transform === 'translate(0%)';
    if (isOpen) {
        menu.style.transform = 'translateX(100%)';
    }
    else{
        menu.style.transform = 'translateX(0%)';
    }
}

btnCloseMenu.onclick = function(){
    var isClose = menu.style.transform === 'translateX(100%)';
    if(isClose){
        menu.style.transform = 'translateX(0%)';
    }
    else{
        menu.style.transform = 'translateX(100%)';
    }
}

var menuItems = document.querySelectorAll('#header .nav .navbar ul li a');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    menuItem.onclick = function(){
        menu.style.transform = 'translateX(100%)';
    }
}