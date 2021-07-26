const menu = document.getElementById('menu');
const menux = document.querySelector('.menu-x');
const navitems = document.querySelectorAll('.navitem');
const navbar = document.querySelector('.hidden');

var on = false;

navitems.forEach(navitem => {
    navitem.addEventListener('click', function active(e) {
        navitems.forEach(item => {
            item.firstChild.classList.remove('active');
        })
        navitem.firstChild.classList.add('active');
        if(on) {
            closeNav();
        }
    });
})

menu.addEventListener('click', showNav);
menux.addEventListener('click', closeNav);

function showNav(e) {
    navbar.style.display = 'flex';
    menu.style.display = 'none';
    menux.style.display = 'block';
    on = true;
}

function closeNav(e) {
    navbar.style.display = 'none';
    menu.style.display = 'block';
    menux.style.display = 'none';
    on = false;
}