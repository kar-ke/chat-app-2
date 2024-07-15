
const themeSwitch = document.querySelector('.theme-switch');
const navItems = document.querySelectorAll('.sidebar-navitem');

themeSwitch.addEventListener('click', function () {
    themeSwitch.classList.toggle('active');
});

navItems.forEach((navItem) => {
    navItem.addEventListener('click', () => {
        navItems.forEach((item) => {
            if (item !== this && item.classList.contains('active')){
                item.classList.remove('active')
            };
        });
        navItem.classList.add('active');
    });
});