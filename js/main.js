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
        console.log(menuHeight)
        menu.style.maxHeight = menuHeight;
    } else {
        menu.style.maxHeight = '0px';
    }
})

function updateMaxHeight(height) {
    let menu = document.getElementById('menu-container');
    let menuHeight = menu.style.maxHeight.split('px')[0];
    menu.style.maxHeight = parseInt(menuHeight)  + parseInt(height) + 'px';
}

function subtractNewHeight(height) {
    let menu = document.getElementById('menu-container');
    let menuHeight = menu.style.maxHeight.split('px')[0];
    menu.style.maxHeight = parseInt(menuHeight)  - parseInt(height) + 'px';
}

Array.from(document.getElementsByClassName('header_menu')).forEach(function(item) {
    let childrenElments = item.children;
    Array.from(childrenElments).forEach(function(item) {
        if(item.tagName === 'LI') {           
            item.addEventListener('click', function() {
                this.classList.toggle('arrow-rotate')
                let children = this.children;
                let newHeight = children[1].children[0].clientHeight;
                // console.log(newHeight)
                let subMenu = children[1];
                console.log(subMenu)
                //set max height on menu-container
                if(subMenu.style.maxHeight === '0px' || !subMenu.style.maxHeight) {
                    updateMaxHeight(newHeight)
                    subMenu.style.maxHeight = newHeight+'px';
                    } else {
                    subtractNewHeight(newHeight)
                    subMenu.style.maxHeight = '0px';
                }
                //set max height on sumMenu
            })
        }
    })
})