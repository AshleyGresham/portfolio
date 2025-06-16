let downarrow = document.querySelector(".arrow") 





downarrow.addEventListener('click', function() {
    
    window.scrollBy({
        top: 600,
        left: 0,
        behavior:'smooth'
    })

});