const sidebarToggle = document.querySelector('#sidebar-toggle');
const sideNav = document.querySelector('#side-nav');


sidebarToggle.addEventListener('click', ()=>{
    sideNav.classList.toggle('open');
})