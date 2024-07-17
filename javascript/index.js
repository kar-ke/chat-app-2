
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

function closeContacts() {
    const contactSection = document.querySelector('.contacts-section');
    contactSection.classList.add('open');
};

function openContacts() {
    const contactSection = document.querySelector('.contacts-section');
    contactSection.classList.remove('open');
}

function openSettings() {
    const sideBar = document.querySelector('.sidebar');
    sideBar.classList.add('open')
}
function closeSettings() {
    const sideBar = document.querySelector('.sidebar');
    sideBar.classList.remove('open')
}

const contacts = document.querySelectorAll('.messeged-contact-link');

contacts.forEach((contact) => {
    contact.addEventListener('click', function () {
        document.querySelector('.chat-section').classList.add('open-chat')
    });
});

function backtoMain() {
    document.querySelector('.chat-section').classList.remove('open-chat');
};


