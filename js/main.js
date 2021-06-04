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
                // Array.from(item.children).forEach(function(item) {
                //     if(item.classList.contains('sub-menu')) {
                //         console.log(item)
                //         item.classList.toggle('open')
                //     }
                // })
                this.classList.toggle('sub-menu-opened');
            })
        }
    })
})