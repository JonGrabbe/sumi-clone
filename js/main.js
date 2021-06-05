//MENU BUTTON ANIMATION
function toggleMenu() {
    this.classList.toggle('opened')
}

const menuButtons = document.getElementsByClassName('menu-btn');
Array.from(menuButtons).forEach(function(item) {
    item.addEventListener('click', toggleMenu)
})



//DROPDOWN MENU
function openMenu(menu, height) {
    menu.style.maxHeight = height;    
    setTimeout(function() {
        // menu.style.maxHeight = 'none';
    }, 300)
}
function closeMenu(menu, height) {
    menu.style.maxHeight = '0px';
}
document.getElementById('menu-button').addEventListener('click', function() {
    let menu = document.getElementById('menu-container');
    menu.classList.toggle('open');
    if(menu.classList.contains('open')) {
        let menuHeight = document.getElementById('header_menu').clientHeight+'px';
        //menu.style.maxHeight = menuHeight;
        openMenu(menu, menuHeight);
    } else {
        menu.style.maxHeight = '0px';
        // closeMenu(menu, menuHeight);
    }
})

function updateMaxHeight() {
    let menuHeight = document.getElementById('header_menu').clientHeight+'px';
    console.log(menuHeight)
    let menu = document.getElementById('menu-container');
    menu.style.maxHeight = menuHeight;
}

Array.from(document.getElementsByClassName('header_menu')).forEach(function(item) {
    let childrenElments = item.children;
    Array.from(childrenElments).forEach(function(item) {
        if(item.tagName === 'LI') {           
            item.addEventListener('click', function() {
                updateMaxHeight()
                this.classList.toggle('sub-menu-opened');
            })
        }
    })
})