//MENU BUTTON ANIMATION
function toggleMenu() {
    this.classList.toggle('opened')
}

const menuButtons = document.getElementsByClassName('menu-btn');
Array.from(menuButtons).forEach(function(item) {
    item.addEventListener('click', toggleMenu)
})



//DROPDOWN MENU
document.getElementById('menu-button').addEventListener('click', function() {
    let subMenuHeight = document.getElementById('header_menu').clientHeight+'px';
    console.log(subMenuHeight)
    let menu = document.getElementById('menu-container');
    if(!menu.style.maxHeight) {
        menu.style.maxHeight = subMenuHeight;
    }
    if(menu.style.maxHeight === subMenuHeight) {
        menu.style.maxHeight = '0px';
    }
    
})


Array.from(document.getElementsByClassName('header_menu')).forEach(function(item) {
    let childrenElments = item.children;
    Array.from(childrenElments).forEach(function(item) {
        if(item.tagName === 'LI') {           
            item.addEventListener('click', function() {
                this.classList.toggle('sub-menu-opened');
            })
        }
    })
})