//MENU BUTTON ANIMATION
function toggleMenu() {
    this.classList.toggle('opened')
}

const menuButtons = document.getElementsByClassName('menu-btn');
Array.from(menuButtons).forEach(function(item) {
    item.addEventListener('click', toggleMenu)
})



//DROPDOWN MENU
Array.from(document.getElementsByClassName('header_menu')).forEach(function(item) {
    let childrenElments = item.children;
    console.log(childrenElments)
    Array.from(childrenElments).forEach(function(item) {
        if(item.tagName === 'LI') {
            item.addEventListener('click', function() {
                let sumMenu;
                Array.from(item.children).forEach(function(item) {
                    if(item.classList.contains('sub-menu')) {
                        //console.log(item)
                        // if(item.style.maxHeight === '0') {
                        //     item.style.maxHeight = 'none';
                        // } else {
                        //     item.style.maxHeight = '0';
                        // }
                        console.log(item.clientHeight)
                        item.style.maxHeight = 'none';
                    }
                })
            })
        }
    })
})