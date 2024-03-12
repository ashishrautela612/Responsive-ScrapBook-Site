

document.addEventListener("DOMContentLoaded", function() {
    const hamburger=document.querySelector(".menuBtn");
    const menuBtnBurger=document.querySelector(".menuBtnBurger");
    const navItems=document.querySelector(".navItems");
    
    // hamburger.addEventListener("click",()=>{
    //     hamburger.classList.toggle("active");
    //     navItems.classList.toggle("active");
    // })

    menuBtnBurger.addEventListener("click",()=>{
        menuBtnBurger.classList.toggle("active");
        navItems.classList.toggle("active");
    })

    document.querySelectorAll(".navItem").forEach(item =>item.addEventListener("click"),()=>{
        hamburger.classList.remove("active");
        navItems.classList.remove("active");

    })
});
