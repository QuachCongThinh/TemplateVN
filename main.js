let openMenu = document.querySelector('.navDiv'); 
let menu = document.querySelector('#header .nav .navbar .navXmark');
let closeMenu = document.querySelector('#header .nav .navbar .navXmark label');

openMenu.onclick = function(){
    menu.style.width = '100%';
}

closeMenu.onclick = function(){
    menu.style.width = '0';
}

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

let headerScroll = document.querySelector('#header .menuscroll')

const scroll = () => {
    console.log(window.scrollY);
    if(window.scrollY > 100){
        headerScroll.style.display = 'block'
    }else{
        headerScroll.style.display = 'none'
    }
}
window.addEventListener('scroll', scroll)

