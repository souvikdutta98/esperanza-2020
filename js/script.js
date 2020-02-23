const toggleButton = document.getElementById("toggle-button");
const navLinks = document.getElementById("nav-links")
toggleButton.addEventListener("click", ()=>{
    navLinks.classList.toggle("hide");
})


window.addEventListener("load", ()=>{
    if(window.innerWidth <= 1000){
        console.log(window.innerWidth);
        navLinks.classList.toggle("hide");
    }
})

window.addEventListener("resize", _=>{
    if(window.innerWidth >=1000 && navLinks.classList.contains("hide")){
        navLinks.classList.toggle("hide");
    }
})