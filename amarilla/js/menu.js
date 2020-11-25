const navSlide = () => {
    const boton = document.querySelector('.burger');
    const nav = document.querySelector('.nav-bar');
    const navLinks = document.querySelectorAll('.nav-bar li');

    boton.addEventListener('click', () => {
        nav.classList.toggle('nav-bar-active');
        boton.classList.toggle('toggle');

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
            link.addEventListener('click', () => {
                sacar();
            })
        });
    });
}

function sacar(){
    const boton = document.querySelector('.burger');
    const nav = document.querySelector('.nav-bar');
    const navLinks = document.querySelectorAll('.nav-bar li');

    nav.classList.remove('nav-bar-active');
    boton.classList.remove('toggle');
    navLinks.forEach((link) => {
    link.style.animation = ''
    });
}

navSlide();