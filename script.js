document.querySelector('.contact').addEventListener('click', function(){
    document.querySelector('.contactMenu').classList.toggle('contactMenu__active');
    if(!document.querySelector('.contactMenu').classList.contains('contactMenu__active')){
        document.querySelector('.contactMenu').classList.add('hoverShow');
    } else{
        document.querySelector('.contactMenu').classList.remove('hoverShow');
    }
});
function burgerClose(){
    document.querySelector('.burger-menu').classList.remove('burger-menu__active');
}
document.querySelector('.burger__Close').onclick = function(){
    burgerClose();
}
document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger-menu').classList.add('burger-menu__active');
});
document.querySelector('.footerContent__mobile').addEventListener('click', function(e){
    if(!e.target.classList.contains('dropDown__header')) return;
    e.target.closest('.dropDown__content').classList.toggle('dropDown__content-active');
});
document.querySelector('.container').addEventListener('click', function(e){
    if(e.target.textContent == 'Home'){
        document.querySelector('.homePage').scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
        burgerClose()
    } else if(e.target.textContent == 'Contact'){
        document.querySelector('.termsPage').scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
        burgerClose()
    } else if(e.target.textContent == 'Privacy'){
        document.querySelector('footer').scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
        burgerClose()
    }
});
document.querySelector('nav').addEventListener('click', function(e){
    if(e.target.textContent == 'Home'){
        document.querySelector('.homePage').scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    } else if(e.target.textContent == 'Contact'){
        document.querySelector('.termsPage').scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    } else if(e.target.textContent == 'Privacy'){
        document.querySelector('footer').scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    }
});