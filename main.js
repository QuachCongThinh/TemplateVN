let openMenu = document.querySelector('.navDiv'); 
let menu = document.querySelector('#header .nav .navbar .navXmark');
let closeMenu = document.querySelector('#header .nav .navbar .navXmark label');

//Handle Open Menu button
openMenu.onclick = function(){
    menu.style.width = '100%';
}
//Handle Close Menu button
closeMenu.onclick = function(){
    menu.style.width = '0';
}
//Hide menu on click
let menuItems = document.querySelectorAll('#header .nav .navbar ul li a');
let body = document.querySelector('body');

for (let i = 0; i < menuItems.length; i++) {
    let menuItem = menuItems[i];
    let currentWidth = body.clientWidth;

    menuItem.onclick = function(){
        if(currentWidth <= 768){
            menu.style.width = '100%';
        }
        else if(currentWidth > 768){
            menu.style.width = null;
        }
    }   
}

//Handle Header Events
let headerScroll = document.querySelector('#header .menuscroll')

const headerFixed = () => {
    if(window.scrollY > 100){
        headerScroll.style.transform = 'translateY(0%)';
        headerScroll.style.transition = 'all 0.2s';
    }else{
        headerScroll.style.transform = 'translateY(-100%)';
    }
}
window.addEventListener('scroll', headerFixed)
