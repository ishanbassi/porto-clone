let pos = {x:0, left:0}
let dragging = false

window.addEventListener('load', (event) => {
    
    setTimeout(togglePopOver, 4000    )

    
    const closeElem = document.querySelector('.btn-close')
    closeElem.addEventListener('click', event => {
        togglePopOver()
    })

    const hamIcon = document.querySelector('.ham-icon')
    hamIcon.addEventListener('click' , e=> {
        toggleOffsetMenu()
    })

    const offsetOverlayElem = document.querySelector('.offset-overlay')
    offsetOverlayElem.addEventListener('click' , e => {
        toggleOffsetMenu()
    })


    

    const toastOverlayElem = document.querySelector('.toast-overlay')
    toastOverlayElem.addEventListener('click' , e => togglePopOver())


    const customCarousel = document.querySelectorAll(".custom-carousel")
    customCarousel.forEach(el => {
        el.addEventListener('mousedown', mousedownHandler)
        el.addEventListener('mouseup', mouseupHandler)
        el.addEventListener('mousemove' , mousemoveHandler)
        
    })
    

    
    
    
    
})

function togglePopOver(){
    const toastEl = document.querySelector('#news-toast')
    let newsToast = bootstrap.Toast.getOrCreateInstance(toastEl)
    const toastOverlayElem = document.querySelector('.toast-overlay')
    
    if(newsToast.isShown()){
        newsToast.hide()
        toastOverlayElem.classList.add('hide')
        
    }else{
        newsToast.show()
        toastOverlayElem.classList.remove('hide')
        
    }

    
}



function toggleOffsetOverlay() {
    
    const offsetOverlayElem = document.querySelector('.offset-overlay')
    offsetOverlayElem.classList.toggle('hide')
}
function toggleOffsetMenu(){
    const offsetMenu = document.querySelector('.offset-nav')
    const main =  document.getElementById('main')
    const offsetOverlayElem = document.querySelector('.offset-overlay')

    offsetMenu.classList.toggle('menu-show')
    main.classList.toggle('tl-28')

    offsetOverlayElem.classList.toggle('hide')

        
}

function toggleShoppingCart(){
    
    const shoppingCartSection = document.querySelector(".shopping-cart")
    const cartOffsetOverlayElem = document.querySelector('.cart-offset-overlay')
    
    shoppingCartSection.classList.toggle('cart-show')
    cartOffsetOverlayElem.classList.toggle('hide')
    

}



function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar')
    const main = document.getElementById('main')
    const overlay = document.querySelector('.sidebar-overlay')
    const toggle = document.querySelector('.sidebar-toggle')
    const toggleIcon  = toggle.querySelector('i')
    

    sidebar.classList.toggle('sidebar-show')
    main.classList.toggle('tl-33')
    toggle.classList.toggle('tl-33')
    toggleIcon.classList.toggle("fa-sliders")
    toggleIcon.classList.toggle("fa-xmark")
    overlay.classList.toggle('hide')

}
function toggleDropdown(e){
    
    if(e.srcElement.localName == 'i'){
        const toggleIcon = e.target
        toggleIcon.classList.toggle('animate-toggle')
        e.preventDefault();
        const dropdownMenu = e.currentTarget.nextElementSibling
        dropdownMenu.classList.toggle("dropdown-show")

    }
    
}
function toggleCarousel() {
    
    const carousel = document.querySelector(".custom-carousel")
    carousel.dispatchEvent(new CustomEvent("scroll" , {detail:{name:'siahn'}}))
}

function scrollCarousel(e){
    const lastChild = document.querySelector('.custom-carousel li:last-child')
    const carousel = document.querySelector(".custom-carousel")
    
    
    
    
}
function mousedownHandler(e) {
    dragging  = true;
    const carousel = e.currentTarget;
    carousel.style.cursor = 'grabbing';
    pos = {
        
        left: carousel.scrollLeft,
        
        x: e.clientX,
        
    };
    
    
     


}

function mousemoveHandler(e) {
        
        if(dragging){
            const carousel = e.currentTarget
            
            // carousel.style.cursor = "grabing"
            const deltaX = e.clientX - pos.x
            carousel.scrollLeft = pos.left - deltaX;

            const aTag = carousel.querySelectorAll('.carousel-link')
            
            aTag.forEach(el => el.classList.add('pointers-none'))

        }
        
        
        
    


}

function mouseupHandler(e){
    dragging = false;    
    const carousel = e.currentTarget
    carousel.style.cursor  = 'grab'
    const aTag = carousel.querySelectorAll('.carousel-link')
    aTag.forEach(el => el.classList.remove('pointers-none'))
    
     
}