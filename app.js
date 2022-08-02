const menu = document.getElementById('menu');
console.log(menu);

const nav = document.getElementById('nav');
console.log(nav);

const navcont= document.getElementById('navdisplay');


menu.addEventListener('click',()=>{
    console.log("ive been clicked!");
    nav.classList.toggle('nav-active');
    navcont.classList.toggle('display-none');
})